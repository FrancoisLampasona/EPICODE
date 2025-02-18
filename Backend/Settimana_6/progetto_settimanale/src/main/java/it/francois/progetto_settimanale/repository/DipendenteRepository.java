package it.francois.progetto_settimanale.repository;

import it.francois.progetto_settimanale.model.Dipendente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DipendenteRepository extends JpaRepository<Dipendente, Long> {
    // Metodi personalizzati per la gestione dei dipendenti
}
