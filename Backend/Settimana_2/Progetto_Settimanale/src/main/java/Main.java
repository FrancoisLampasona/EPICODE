import java.util.Scanner;

import Archivio.*;
import util.Periodicita;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Archivio archivio = new Archivio();

        boolean running = true;
        while (running) {
            System.out.println("\n--- Menu ---");
            System.out.println("1. Aggiungi elemento");
            System.out.println("2. Cerca elemento per ISBN");
            System.out.println("3. Rimuovi elemento");
            System.out.println("4. Cerca elementi per anno di pubblicazione");
            System.out.println("5. Cerca libri per autore");
            System.out.println("6. Aggiorna elemento");
            System.out.println("7. Mostra statistiche del catalogo");
            System.out.println("0. Esci");
            System.out.print("Scelta: ");

            String scelta = scanner.nextLine();

            try {
                switch (scelta) {
                    case "1":
                        System.out.print("Inserisci tipo (libro/rivista): ");
                        String tipo = scanner.nextLine();
                        System.out.print("Codice ISBN: ");
                        String isbn = scanner.nextLine();
                        System.out.print("Titolo: ");
                        String titolo = scanner.nextLine();
                        System.out.print("Anno di pubblicazione: ");
                        int anno = Integer.parseInt(scanner.nextLine());
                        System.out.print("Numero di pagine: ");
                        int pagine = Integer.parseInt(scanner.nextLine());

                        if ("libro".equalsIgnoreCase(tipo)) {
                            System.out.print("Autore: ");
                            String autore = scanner.nextLine();
                            System.out.print("Genere: ");
                            String genere = scanner.nextLine();
                            archivio.aggiungiElemento(new Libro(isbn, titolo, anno, pagine, autore, genere));
                        } else if ("rivista".equalsIgnoreCase(tipo)) {
                            System.out.print("Periodicità (SETTIMANALE, MENSILE, SEMESTRALE): ");
                            String periodicitaInput = scanner.nextLine().toUpperCase();
                            if (!Periodicita.isValid(periodicitaInput)) {
                                System.out.println("Periodicità non valida. Riprova.");
                            } else {
                                archivio.aggiungiElemento(new Rivista(isbn, titolo, anno, pagine, periodicitaInput));
                            }
                        } else {
                            System.out.println("Tipo non valido.");
                        }
                        break;

                    case "2":
                        System.out.print("Inserisci ISBN: ");
                        String isbnRicerca = scanner.nextLine();
                        System.out.println(archivio.cercaPerISBN(isbnRicerca));
                        break;

                    case "3":
                        System.out.print("Inserisci ISBN: ");
                        String isbnRimuovi = scanner.nextLine();
                        archivio.rimuoviElemento(isbnRimuovi);
                        System.out.println("Elemento rimosso.");
                        break;

                    case "4":
                        System.out.print("Inserisci anno: ");
                        int annoRicerca = Integer.parseInt(scanner.nextLine());
                        archivio.cercaPerAnno(annoRicerca).forEach(System.out::println);
                        break;

                    case "5":
                        System.out.print("Inserisci autore: ");
                        String autoreRicerca = scanner.nextLine();
                        archivio.cercaPerAutore(autoreRicerca).forEach(System.out::println);
                        break;

                    case "6":
                        System.out.print("Inserisci ISBN dell'elemento da aggiornare: ");
                        String isbnAggiorna = scanner.nextLine();
                        System.out.print("Nuovo titolo: ");
                        String nuovoTitolo = scanner.nextLine();
                        System.out.print("Anno di pubblicazione: ");
                        int nuovoAnno = Integer.parseInt(scanner.nextLine());
                        System.out.print("Numero di pagine: ");
                        int nuovePagine = Integer.parseInt(scanner.nextLine());

                        System.out.print("Tipo (libro/rivista): ");
                        String nuovoTipo = scanner.nextLine();

                        if ("libro".equalsIgnoreCase(nuovoTipo)) {
                            System.out.print("Autore: ");
                            String nuovoAutore = scanner.nextLine();
                            System.out.print("Genere: ");
                            String nuovoGenere = scanner.nextLine();
                            archivio.aggiornaElemento(isbnAggiorna, new Libro(isbnAggiorna, nuovoTitolo, nuovoAnno,
                                    nuovePagine, nuovoAutore, nuovoGenere));
                        } else if ("rivista".equalsIgnoreCase(nuovoTipo)) {
                            System.out.print("Periodicità (SETTIMANALE, MENSILE, SEMESTRALE): ");
                            String nuovaPeriodicita = scanner.nextLine().toUpperCase();
                            if (!Periodicita.isValid(nuovaPeriodicita)) {
                                System.out.println("Periodicità non valida. Riprova.");
                            } else {
                                archivio.aggiornaElemento(isbnAggiorna,
                                        new Rivista(isbnAggiorna, nuovoTitolo, nuovoAnno, nuovePagine,
                                                nuovaPeriodicita));
                            }
                        } else {
                            System.out.println("Tipo non valido.");
                        }
                        break;

                    case "7":
                        archivio.statisticheCatalogo();
                        break;

                    case "0":
                        System.out.println("Uscita...");
                        running = false;
                        break;

                    default:
                        System.out.println("Scelta non valida.");
                }
            } catch (Exception e) {
                System.out.println("Errore: " + e.getMessage());
            }
        }

        scanner.close();
    }
}
