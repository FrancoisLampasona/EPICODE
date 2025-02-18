package it.francois.progetto_settimanale.dto.request;

import java.time.LocalDate;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class PrenotazioneRequest {

    @NotNull(message = "requestedAt is required")
    private LocalDate requestedAt;

    private String notes;

    @NotNull(message = "viaggioID is required")
    private Long viaggioIDLong;

    @NotNull(message = "dipendenteID is required")
    private Long dipendenteIDLong;
}
