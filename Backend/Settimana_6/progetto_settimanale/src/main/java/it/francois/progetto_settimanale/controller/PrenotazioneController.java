package it.francois.progetto_settimanale.controller;

import it.francois.progetto_settimanale.model.Prenotazione;
import it.francois.progetto_settimanale.service.PrenotazioneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/prenotazioni")
public class PrenotazioneController {

    @Autowired
    private PrenotazioneService prenotazioneService;

    @PostMapping
    public Prenotazione createPrenotazione(@RequestBody Prenotazione prenotazione) {
        return prenotazioneService.createPrenotazione(prenotazione);
    }

    @GetMapping
    public List<Prenotazione> findAll() {
        return prenotazioneService.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Prenotazione> findById(@PathVariable Long id) {
        return prenotazioneService.findById(id);
    }

    @PutMapping("/{id}")
    public Prenotazione updatePrenotazione(@PathVariable Long id, @RequestBody Prenotazione prenotazione) {
        return prenotazioneService.updatePrenotazione(id, prenotazione);
    }

    @DeleteMapping("/{id}")
    public void deletePrenotazione(@PathVariable Long id) {
        prenotazioneService.deletePrenotazione(id);
    }
}
