package it.francois.progetto_settimanale.service;

import it.francois.progetto_settimanale.model.Prenotazione;
import it.francois.progetto_settimanale.repository.PrenotazioneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PrenotazioneService {

    @Autowired
    private PrenotazioneRepository prenotazioneRepository;

    public Prenotazione createPrenotazione(Prenotazione prenotazione) {
        return prenotazioneRepository.save(prenotazione);
    }
}
