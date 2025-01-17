package Archivio;
import java.util.*;
import java.util.stream.Collectors;

// Classe Archivio
public class Archivio {
    private List<ElementoCatalogo> catalogo = new ArrayList<>();

    // Aggiungi un elemento
    public void aggiungiElemento(ElementoCatalogo elemento) throws IllegalArgumentException {
        if (catalogo.stream().anyMatch(e -> e.getCodiceISBN().equals(elemento.getCodiceISBN()))) {
            throw new IllegalArgumentException("Elemento con ISBN " + elemento.getCodiceISBN() + " già presente nel catalogo.");
        }
        catalogo.add(elemento);
    }

    // Ricerca per ISBN
    public ElementoCatalogo cercaPerISBN(String isbn) throws NoSuchElementException {
        return catalogo.stream()
                .filter(e -> e.getCodiceISBN().equals(isbn))
                .findFirst()
                .orElseThrow(() -> new NoSuchElementException("Elemento con ISBN " + isbn + " non trovato."));
    }

    // Rimuovi un elemento dato un ISBN
    public void rimuoviElemento(String isbn) throws NoSuchElementException {
        ElementoCatalogo elemento = cercaPerISBN(isbn);
        catalogo.remove(elemento);
    }

    // Ricerca per anno di pubblicazione
    public List<ElementoCatalogo> cercaPerAnno(int anno) {
        return catalogo.stream()
                .filter(e -> e.getAnnoPubblicazione() == anno)
                .collect(Collectors.toList());
    }

    // Ricerca per autore
    public List<Libro> cercaPerAutore(String autore) {
        return catalogo.stream()
                .filter(e -> e instanceof Libro && ((Libro) e).getAutore().equalsIgnoreCase(autore))
                .map(e -> (Libro) e)
                .collect(Collectors.toList());
    }

    // Aggiorna elemento dato l'ISBN
    public void aggiornaElemento(String isbn, ElementoCatalogo nuovoElemento) throws NoSuchElementException {
        rimuoviElemento(isbn);
        catalogo.add(nuovoElemento);
    }

    // Statistiche del catalogo
    public void statisticheCatalogo() {
        long numeroLibri = catalogo.stream().filter(e -> e instanceof Libro).count();
        long numeroRiviste = catalogo.stream().filter(e -> e instanceof Rivista).count();

        Optional<ElementoCatalogo> maxPagine = catalogo.stream().max(Comparator.comparingInt(ElementoCatalogo::getNumeroPagine));
        double mediaPagine = catalogo.stream().mapToInt(ElementoCatalogo::getNumeroPagine).average().orElse(0);

        System.out.println("Numero totale di libri: " + numeroLibri);
        System.out.println("Numero totale di riviste: " + numeroRiviste);
        maxPagine.ifPresent(e -> System.out.println("Elemento con più pagine: " + e));
        System.out.println("Media delle pagine di tutti gli elementi: " + mediaPagine);
    }
}
