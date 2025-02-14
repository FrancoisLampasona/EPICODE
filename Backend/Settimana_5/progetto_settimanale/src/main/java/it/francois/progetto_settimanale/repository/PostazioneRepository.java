package it.francois.progetto_settimanale.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import it.francois.progetto_settimanale.model.Postazione;

@Repository
public interface PostazioneRepository extends JpaRepository<Postazione, Long> {
    List<Postazione> findByTipoAndEdificio_Citta(String tipo, String citta);
}
