package it.francois.progetto_settimanale.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import it.francois.progetto_settimanale.model.Postazione;
import it.francois.progetto_settimanale.repository.PostazioneRepository;

@RestController
@RequestMapping("/postazioni")
public class PostazioneController {

    @Autowired
    private PostazioneRepository postazioneRepository;

    @GetMapping("/ricerca")
    public List<Postazione> cercaPostazioni(@RequestParam String tipo, @RequestParam String citta) {
        return postazioneRepository.findByTipoAndEdificio_Citta(tipo, citta);
    }
}
