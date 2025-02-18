package it.francois.progetto_settimanale.service;

import it.francois.progetto_settimanale.model.Prenotazione;
import it.francois.progetto_settimanale.repository.PrenotazioneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PrenotazioneService {

    @Autowired
    private PrenotazioneRepository prenotazioneRepository;

    public Prenotazione createPrenotazione(Prenotazione prenotazione) {
        return prenotazioneRepository.save(prenotazione);
    }

    public List<Prenotazione> findAll() {
        return prenotazioneRepository.findAll();
    }

    public Optional<Prenotazione> findById(Long id) {
        return prenotazioneRepository.findById(id);
    }

    public Prenotazione updatePrenotazione(Long id, Prenotazione prenotazione) {
        if (prenotazioneRepository.existsById(id)) {
            prenotazione.setId(id);
            return prenotazioneRepository.save(prenotazione);
        }
        throw new RuntimeException("Prenotazione non trovata");
    }

    public void deletePrenotazione(Long id) {
        if (prenotazioneRepository.existsById(id)) {
            prenotazioneRepository.deleteById(id);
        } else {
            throw new RuntimeException("Prenotazione non trovata");
        }
    }
}
