package it.francois.progetto_settimanale.events;

import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import it.francois.progetto_settimanale.auth.AppUserRepository;
import it.francois.progetto_settimanale.response.CreateResponse;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Validated
public class EventService {
	private final EventRepository eventRepository;
	private final AppUserRepository appUserRepository;

	private EventResponse mapToResponse(Event event) {
		return new EventResponse(
				event.getId(),
				event.getTitle(),
				event.getDescription(),
				event.getDate(),
				event.getLocation(),
				appUserRepository.findById(event.getOrganizer().getId()).orElseThrow(),
				event.getParticipants());
	}

	public List<EventResponse> findAll() {
		return eventRepository.findAll().stream().map(this::mapToResponse).collect(Collectors.toList());
	}

	public EventResponse findById(Long id) {
		Event event = eventRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Event not found"));
		return mapToResponse(event);
	}

	public CreateResponse save(@Valid EventRequest eventRequest) {
		if (eventRepository.existsByTitle(eventRequest.getTitle())) {
			throw new EntityExistsException("Event already exists");
		}
		Event event = new Event(
				eventRequest.getTitle(),
				eventRequest.getDescription(),
				eventRequest.getDate(),
				eventRequest.getLocation(),
				appUserRepository.findById(getCurrentUserId()).orElseThrow(),
				eventRequest.getMaxGuests());
		eventRepository.save(event);
		return new CreateResponse(event.getId());
	}

	public EventResponse update(Long id, @Valid EventRequest eventRequest) {
		Event event = eventRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Event not found"));
		if (!Objects.equals(event.getOrganizer().getId(), getCurrentUserId())) {
			throw new SecurityException("You are not the organizer of this event");
		}

		event.setTitle(eventRequest.getTitle());
		event.setDescription(eventRequest.getDescription());
		event.setDate(eventRequest.getDate());
		event.setLocation(eventRequest.getLocation());

		return mapToResponse(eventRepository.save(event));
	}

	public void delete(Long id) {
		Event event = eventRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Event not found"));
		if (!Objects.equals(event.getOrganizer().getId(), getCurrentUserId())) {
			throw new SecurityException("You are not the organizer of this event");
		}
		eventRepository.delete(event);
	}

	public EventResponse addParticipant(Long eventId) {
		Event event = eventRepository.findById(eventId)
				.orElseThrow(() -> new EntityNotFoundException("Event not found"));
		var currentUser = appUserRepository.findById(getCurrentUserId()).orElseThrow();

		if (event.getParticipants().contains(currentUser)) {
			throw new EntityExistsException("You are already a participant of this event");
		}
		if (event.getParticipants().size() >= event.getMaxGuests()) {
			throw new IllegalStateException("Event is full");
		}

		event.getParticipants().add(currentUser);
		return mapToResponse(eventRepository.save(event));
	}

	public EventResponse removeParticipant(Long eventId) {
		Event event = eventRepository.findById(eventId)
				.orElseThrow(() -> new EntityNotFoundException("Event not found"));
		var currentUser = appUserRepository.findById(getCurrentUserId()).orElseThrow();

		if (!event.getParticipants().contains(currentUser)) {
			throw new EntityNotFoundException("You are not a participant of this event");
		}

		event.getParticipants().remove(currentUser);
		return mapToResponse(eventRepository.save(event));
	}

	public List<EventResponse> findAllEventsByUserId() {
		Long currentUserId = getCurrentUserId();
		return eventRepository.findAll().stream()
				.filter(event -> event.getParticipants().stream()
						.anyMatch(participant -> Objects.equals(participant.getId(), currentUserId)))
				.map(this::mapToResponse)
				.collect(Collectors.toList());
	}

	public List<EventResponse> findAllEventsByOrganizer() {
		return eventRepository.findAllByOrganizerId(getCurrentUserId()).stream().map(this::mapToResponse)
				.collect(Collectors.toList());
	}

	private @NotNull Long getCurrentUserId() {
		return appUserRepository.findByUsername(SecurityContextHolder.getContext().getAuthentication().getName())
				.map(user -> user.getId())
				.orElseThrow(() -> new EntityNotFoundException("User not found"));
	}
}
