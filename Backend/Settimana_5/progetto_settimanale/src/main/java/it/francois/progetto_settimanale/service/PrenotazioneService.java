package it.francois.progetto_settimanale.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import it.francois.progetto_settimanale.model.Postazione;
import it.francois.progetto_settimanale.model.Prenotazione;
import it.francois.progetto_settimanale.model.Utente;
import it.francois.progetto_settimanale.repository.PostazioneRepository;
import it.francois.progetto_settimanale.repository.PrenotazioneRepository;
import it.francois.progetto_settimanale.repository.UtenteRepository;

import java.time.LocalDate;
import java.util.List;

@Service
public class PrenotazioneService {

    @Autowired
    private PostazioneRepository postazioneRepository;

    @Autowired
    private PrenotazioneRepository prenotazioneRepository;

    @Autowired
    private UtenteRepository utenteRepository;

    public boolean prenotaPostazione(Long utenteId, Long postazioneId, LocalDate giorno) {
    
        Utente utente = utenteRepository.findById(utenteId)
                .orElseThrow(() -> new RuntimeException("Utente non trovato"));

 
        Postazione postazione = postazioneRepository.findById(postazioneId)
                .orElseThrow(() -> new RuntimeException("Postazione non trovata"));

    
        List<Prenotazione> prenotazioniUtente = prenotazioneRepository.findByUtenteAndGiornoPrenotazione(utente, giorno);
        if (!prenotazioniUtente.isEmpty()) {
            return false; 
        }

     
        List<Prenotazione> prenotazioniPostazione = prenotazioneRepository.findByPostazioneAndGiornoPrenotazione(postazione, giorno);
        if (!prenotazioniPostazione.isEmpty()) {
            return false; 
        }

      
        Prenotazione prenotazione = new Prenotazione();
        prenotazione.setUtente(utente);
        prenotazione.setPostazione(postazione);
        prenotazione.setGiornoPrenotazione(giorno);
        prenotazioneRepository.save(prenotazione);

        return true; 
    }
}
