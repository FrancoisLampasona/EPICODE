package it.francois.progetto_settimanale.controller;

import it.francois.progetto_settimanale.model.Prenotazione;
import it.francois.progetto_settimanale.service.PrenotazioneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/prenotazioni")
public class PrenotazioneController {

    @Autowired
    private PrenotazioneService prenotazioneService;

    @PostMapping
    public Prenotazione createPrenotazione(@RequestBody Prenotazione prenotazione) {
        return prenotazioneService.createPrenotazione(prenotazione);
    }
}
