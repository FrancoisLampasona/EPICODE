package it.francois.progetto_settimanale.model;

import it.francois.progetto_settimanale.util.StatoViaggio;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Viaggio")
public class Viaggio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "La destinazione non può essere vuota")
    @Column(nullable = false)
    private String destinazione;

    @Enumerated(EnumType.STRING)
    private StatoViaggio stato;
}
