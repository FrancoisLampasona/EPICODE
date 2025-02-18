package it.francois.progetto_settimanale.repository;

import it.francois.progetto_settimanale.model.Prenotazione;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PrenotazioneRepository extends JpaRepository<Prenotazione, Long> {
    // Metodi personalizzati per la gestione delle prenotazioni
}
