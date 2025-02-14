package it.francois.progetto_settimanale.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import it.francois.progetto_settimanale.model.Edificio;

public interface EdificioRepository extends JpaRepository<Edificio, Long> {
}
