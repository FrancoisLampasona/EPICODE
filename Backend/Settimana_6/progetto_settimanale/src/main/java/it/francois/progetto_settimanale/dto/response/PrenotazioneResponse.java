package it.francois.progetto_settimanale.dto.response;

import java.time.LocalDate;

import it.francois.progetto_settimanale.model.Dipendente;
import it.francois.progetto_settimanale.model.Viaggio;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PrenotazioneResponse {
    private Long id;
    private LocalDate requestedAt;
    private String notes;
    private Viaggio viaggio;
    private Dipendente dipendente;
}
