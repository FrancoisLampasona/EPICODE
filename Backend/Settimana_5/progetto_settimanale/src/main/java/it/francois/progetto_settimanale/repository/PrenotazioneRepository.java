package it.francois.progetto_settimanale.repository;

import it.francois.progetto_settimanale.model.Prenotazione;
import it.francois.progetto_settimanale.model.Postazione;
import it.francois.progetto_settimanale.model.Utente;
import org.springframework.data.jpa.repository.JpaRepository;
import java.time.LocalDate;
import java.util.List;

public interface PrenotazioneRepository extends JpaRepository<Prenotazione, Long> {


    List<Prenotazione> findByUtenteAndGiornoPrenotazione(Utente utente, LocalDate giorno);

    List<Prenotazione> findByPostazioneAndGiornoPrenotazione(Postazione postazione, LocalDate giorno);
}
