package it.francois.progetto_settimanale.events;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import it.francois.progetto_settimanale.response.CreateResponse;

import java.util.List;

@RestController
@RequestMapping("/events")
@RequiredArgsConstructor
public class EventController {
	private final EventService eventService;

	@GetMapping
	public List<EventResponse> getAllEvents() {
		return eventService.findAll();
	}

	@GetMapping("/{id}")
	public EventResponse getEvent(@PathVariable Long id) {
		return eventService.findById(id);
	}

	@PostMapping
	public CreateResponse createEvent(@Valid @RequestBody EventRequest eventRequest) {
		return eventService.save(eventRequest);
	}

	@PutMapping("/{id}")
	public EventResponse updateEvent(@PathVariable Long id, @Valid @RequestBody EventRequest eventRequest) {
		return eventService.update(id, eventRequest);
	}

	@DeleteMapping("/{id}")
	public void deleteEvent(@PathVariable Long id) {
		eventService.delete(id);
	}

	@PostMapping("/{id}/join")
	public EventResponse joinEvent(@PathVariable Long id) {
		return eventService.addParticipant(id);
	}

	@PostMapping("/{id}/leave")
	public EventResponse leaveEvent(@PathVariable Long id) {
		return eventService.removeParticipant(id);
	}
}
