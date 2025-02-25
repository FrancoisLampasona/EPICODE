package it.francois.progetto_settimanale.events;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class EventRequest {

	@NotBlank(message = "Nome evento")
	private String title;
	@NotBlank(message = "Descrizione evento")
	private String description;

	@NotNull(message = "Data dell'evento")
	private LocalDateTime date;

	@NotBlank(message = "Localita' evento")
	private String location;

	@NotNull(message = "Massimo partecipanti")
	private Integer maxGuests;
}
