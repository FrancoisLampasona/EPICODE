package org.example;

import org.example.DAO.*;
import org.example.Entities.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Scanner;

public class Main {

        public static void main(String[] args) {

                Utente utente = new Utente("Francois", "Lampasona", LocalDate.of(2000, 11, 01));
                UtenteDAO utenteDAO = new UtenteDAOImpl();
                PrestitoDAO prestitoDAO = new PrestitoDAOImpl();
                PubblicazioneDAO pubblicazioneDAO = new PubblicazioneDAOImpl();

                Scanner scanner = new Scanner(System.in);
                int scelta;

                do {
                        System.out.println("\nScegli cosa fare:");
                        System.out.println("1) Aggiungi un elemento al catalogo");
                        System.out.println("2) Stampa tutto il catalogo");
                        System.out.println("3) Rimozione di un elemento del catalogo dato un codice ISBN");
                        System.out.println("4) Ricerca per ISBN");
                        System.out.println("5) Ricerca per anno pubblicazione");
                        System.out.println("6) Ricerca per autore");
                        System.out.println("7) Ricerca per titolo o parte di esso");
                        System.out.println(
                                        "8) Ricerca degli elementi attualmente in prestito dato un numero di tessera utente");
                        System.out.println("9) Ricerca di tutti i prestiti scaduti e non ancora restituiti");
                        System.out.println("0) Esci");

                        System.out.print("Inserisci la tua scelta: ");
                        while (!scanner.hasNextInt()) {
                                System.out.println("Errore: Inserisci un numero valido.");
                                scanner.next();
                        }

                        scelta = scanner.nextInt();
                        scanner.nextLine();

                        switch (scelta) {
                                case 1:
                                        // Richiesta dei dati per un nuovo libro
                                        System.out.print("Inserisci il titolo: ");
                                        String titolo = scanner.nextLine();

                                        System.out.print("Inserisci l'anno di pubblicazione: ");
                                        int anno = scanner.nextInt();
                                        scanner.nextLine();

                                        System.out.print("Inserisci il numero di pagine: ");
                                        int numeroPagine = scanner.nextInt();
                                        scanner.nextLine();

                                        System.out.print("Inserisci il nome dell'autore: ");
                                        String nomeAutore = scanner.nextLine();

                                        System.out.print("Inserisci il cognome dell'autore: ");
                                        String cognomeAutore = scanner.nextLine();

                                        // Creazione dell'autore
                                        Autore autore = new Autore(nomeAutore, cognomeAutore);

                                        // Creazione del libro
                                        Libro nuovaPubblicazione = new Libro(titolo, LocalDate.of(anno, 1, 1),
                                                        numeroPagine, autore, null);
                                        pubblicazioneDAO.aggiungiPubblicazione(nuovaPubblicazione);
                                        System.out.println("Elemento aggiunto!");
                                        break;
                                case 2:
                                        List<Pubblicazioni> catalogo = pubblicazioneDAO.trovaTuttePubblicazioni();
                                        catalogo.forEach(System.out::println);
                                        break;
                                case 3:
                                        System.out.print("Inserisci ISBN da rimuovere: ");
                                        Long isbnDaRimuovere = scanner.nextLong();
                                        scanner.nextLine();
                                        pubblicazioneDAO.rimuoviPubblicazione(isbnDaRimuovere);
                                        System.out.println("Elemento rimosso!");
                                        break;
                                case 4:
                                        System.out.print("Inserisci ISBN da cercare: ");
                                        Long isbnDaCercare = scanner.nextLong();
                                        scanner.nextLine();
                                        System.out.println(pubblicazioneDAO.cercaDaIsbn(isbnDaCercare));
                                        break;
                                case 5:
                                        System.out.print("Inserisci l'anno di pubblicazione da cercare: ");
                                        int annoRicerca = scanner.nextInt();
                                        scanner.nextLine();
                                        List<Pubblicazioni> risultatiAnno = pubblicazioneDAO.cercaPerAnno(annoRicerca);
                                        risultatiAnno.forEach(System.out::println);
                                        break;
                                case 6:
                                        System.out.print("Inserisci il nome dell'autore: ");
                                        String nomeRicercaAutore = scanner.nextLine();
                                        List<Pubblicazioni> risultatiAutore = pubblicazioneDAO
                                                        .cercaDaAutore(new Autore(nomeRicercaAutore, ""));
                                        risultatiAutore.forEach(System.out::println);
                                        break;
                                case 7:
                                        System.out.print("Inserisci il titolo o parte di esso: ");
                                        String titoloRicerca = scanner.nextLine();
                                        System.out.println(pubblicazioneDAO.cercaDaTitle(titoloRicerca));
                                        break;
                                case 8:
                                        System.out.print("Inserisci numero tessera utente: ");
                                        Long numeroTessera = scanner.nextLong();
                                        scanner.nextLine();
                                        List<Prestito> prestiti = prestitoDAO.prestitiPerUtente(numeroTessera);
                                        prestiti.forEach(System.out::println);
                                        break;
                                case 9:
                                        List<Prestito> prestitiScaduti = prestitoDAO.prestitiScaduti();
                                        prestitiScaduti.forEach(System.out::println);
                                        break;
                                case 0:
                                        System.out.println("Uscita dal programma...");
                                        break;
                                default:
                                        System.out.println("Scelta non valida, riprova.");
                        }
                } while (scelta != 0);

                scanner.close();
        }
}