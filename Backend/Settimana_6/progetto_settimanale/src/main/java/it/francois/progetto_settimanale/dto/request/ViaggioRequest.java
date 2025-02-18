package it.francois.progetto_settimanale.dto.request;

import java.time.LocalDate;

import it.francois.progetto_settimanale.util.StatoViaggio;
import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ViaggioRequest {
    
    @NotBlank(message = "Destination is mandatory")
    private String destinazione;

    @NotNull(message = "Start date is mandatory")
    @FutureOrPresent(message = "Start date must be in the present or future")
    private LocalDate startDate;

    @NotBlank(message = "State is mandatory")
    private StatoViaggio state;
}
