package it.francois.progetto_settimanale.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import it.francois.progetto_settimanale.model.Utente;

public interface UtenteRepository extends JpaRepository<Utente, Long> {
}
