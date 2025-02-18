package it.francois.progetto_settimanale.dto.response;

import java.time.LocalDate;

import it.francois.progetto_settimanale.util.StatoViaggio;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ViaggioResponse {
    private String destination;
    private LocalDate startDate;
    private StatoViaggio state;
}
