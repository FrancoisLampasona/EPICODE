package it.francois.progetto_settimanale.controller;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import it.francois.progetto_settimanale.service.PrenotazioneService;

@RestController
@RequestMapping("/prenotazioni")
public class PrenotazioneController {

    @Autowired
    private PrenotazioneService prenotazioneService;  // Inietta il servizio, non l'entità Prenotazione

    @PostMapping("/prenota")
    public ResponseEntity<String> prenotaPostazione(@RequestParam Long utenteId, @RequestParam Long postazioneId,
            @RequestParam String giorno) {
        LocalDate data = LocalDate.parse(giorno);  // Converte la stringa in un LocalDate
        boolean successo = prenotazioneService.prenotaPostazione(utenteId, postazioneId, data);  // Usa il service

        if (successo) {
            return ResponseEntity.ok("Prenotazione effettuata con successo");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Impossibile effettuare la prenotazione");
        }
    }
}
