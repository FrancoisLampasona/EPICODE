package it.francois.progetto_settimanale.repository;

import it.francois.progetto_settimanale.model.Viaggio;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ViaggioRepository extends JpaRepository<Viaggio, Long> {
    // Metodi personalizzati per la gestione dei viaggi
}
