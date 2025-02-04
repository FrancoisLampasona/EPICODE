package org.example.DAO;

import jakarta.persistence.EntityManager;
import org.example.Entities.Autore;
import org.example.Entities.Pubblicazioni;
import org.example.EntityManagerUtil;

import java.util.List;

public class PubblicazioneDAOImpl implements PubblicazioneDAO {

    @Override
    public void aggiungiPubblicazione(Pubblicazioni pubblicazione) {
        EntityManager em = EntityManagerUtil.getEntityManager();
        try {
            em.getTransaction().begin();
            em.persist(pubblicazione);
            em.getTransaction().commit();
        } catch (Exception e) {
            if (em.getTransaction().isActive())
                em.getTransaction().rollback();
            e.printStackTrace();
        } finally {
            em.close();
        }
    }

    @Override
    public void rimuoviPubblicazione(Long isbn) {
        EntityManager em = EntityManagerUtil.getEntityManager();
        try {
            em.getTransaction().begin();
            Pubblicazioni pubblicazioneDaRimuovere = em.find(Pubblicazioni.class, isbn);
            if (pubblicazioneDaRimuovere != null)
                em.remove(pubblicazioneDaRimuovere);
            em.getTransaction().commit();
        } catch (Exception e) {
            if (em.getTransaction().isActive())
                em.getTransaction().rollback();
            e.printStackTrace();
        } finally {
            em.close();
        }
    }

    @Override
    public Pubblicazioni cercaDaIsbn(Long isbn) {
        EntityManager em = EntityManagerUtil.getEntityManager();
        try {
            em.getTransaction().begin();
            Pubblicazioni pubblicazioneTrovata = em.find(Pubblicazioni.class, isbn);
            em.getTransaction().commit();
            return pubblicazioneTrovata;
        } catch (Exception e) {
            if (em.getTransaction().isActive())
                em.getTransaction().rollback();
            e.printStackTrace();
            return null;
        } finally {
            em.close();
        }
    }

    @Override
    public List<Pubblicazioni> cercaDaAutore(Autore autore) {
        EntityManager em = EntityManagerUtil.getEntityManager();
        try {
            // Qui puoi migliorare la query per cercare per autore usando i parametri
            // corretti
            return em.createQuery("SELECT p FROM Pubblicazioni p WHERE p.autore.nome = :nome", Pubblicazioni.class)
                    .setParameter("nome", autore.getNome())
                    .getResultList();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        } finally {
            em.close();
        }
    }

    @Override
    public Pubblicazioni cercaDaTitle(String titolo) {
        EntityManager em = EntityManagerUtil.getEntityManager();
        try {
            // Se il titolo non è la chiave primaria, potresti dover usare una query come
            // questa:
            return em.createQuery("SELECT p FROM Pubblicazioni p WHERE p.titolo LIKE :titolo", Pubblicazioni.class)
                    .setParameter("titolo", "%" + titolo + "%")
                    .getSingleResult();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        } finally {
            em.close();
        }
    }

    // Nuovo metodo: Trova tutte le pubblicazioni
    @Override
    public List<Pubblicazioni> trovaTuttePubblicazioni() {
        EntityManager em = EntityManagerUtil.getEntityManager();
        try {
            return em.createQuery("SELECT p FROM Pubblicazioni p", Pubblicazioni.class).getResultList();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        } finally {
            em.close();
        }
    }

    @Override
    public List<Pubblicazioni> cercaPerAnno(int anno) {
        EntityManager em = EntityManagerUtil.getEntityManager();
        try {
            return em
                    .createQuery("SELECT p FROM Pubblicazioni p WHERE YEAR(p.dataPubblicazione) = :anno",
                            Pubblicazioni.class)
                    .setParameter("anno", anno)
                    .getResultList();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        } finally {
            em.close();
        }
    }
}
