package org.example.DAO;

import org.example.Entities.Autore;
import org.example.Entities.Pubblicazioni;

import java.util.List;

public interface PubblicazioneDAO {
    void aggiungiPubblicazione(Pubblicazioni pubblicazione);

    void rimuoviPubblicazione(Long isbn);

    Pubblicazioni cercaDaIsbn(Long isbn);

    List<Pubblicazioni> cercaDaAutore(Autore autore);
//
    Pubblicazioni cercaDaTitle(String titolo);

    List<Pubblicazioni> trovaTuttePubblicazioni();

    public List<Pubblicazioni> cercaPerAnno(int anno);

}
