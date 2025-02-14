package it.francois.progetto_settimanale.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Entity
@Data
public class Postazione {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String codice;
    private String descrizione;
    private String tipo; 
    private int maxOccupanti;

    @ManyToOne
    private Edificio edificio;

}
