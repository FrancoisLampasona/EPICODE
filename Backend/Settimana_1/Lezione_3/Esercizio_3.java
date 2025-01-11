/*
 * Esercizio #3 
 * Scrivere un'applicazione che simula il funzionamento di un e-commerce.
 * Si devono quindi rappresentare i dati relativi i seguenti elementi :
 * Articolo : "Codice Articolo , Descrizione Articolo , Prezzo, Numero pezzi disponibili a magazino"
 * Cliente : "Codice Cliente , Nome e Cognome, Email, Data Iscrizione"
 * Carrello : "Cliente associato, elenco articoli (Articolo[]), totale costo Articoli"
 */

package Lezione_3;

class Articolo {
    private int codiceArticolo;
    private String descrizioneArticolo;
    private double prezzoArticolo;
    private int numeroPezziDisponibili;

    // Costruttore
    public Articolo(int codiceArticolo, String descrizioneArticolo, double prezzoArticolo, int numeroPezziDisponibili) {
        this.codiceArticolo = codiceArticolo;
        this.descrizioneArticolo = descrizioneArticolo;
        this.numeroPezziDisponibili = numeroPezziDisponibili;
        this.prezzoArticolo = prezzoArticolo;
    }

    // Getter per il prezzo dell'articolo
    public double getPrezzoArticolo() {
        return prezzoArticolo;
    }

    @Override
    public String toString() {
        return "\n\ncodiceArticolo = " + codiceArticolo +
                ", descrizioneArticolo = '" + descrizioneArticolo + '\'' +
                ", prezzoArticolo = " + prezzoArticolo +
                ", numeroPezziDisponibili = " + numeroPezziDisponibili;
    }
}

class Cliente {
    private int codiceCliente;
    private String nome;
    private String cognome;
    private String email;
    private String dataIscrizione;

    // Costruttore
    public Cliente(int codiceCliente, String nome, String cognome, String email, String dataIscrizione) {
        this.codiceCliente = codiceCliente;
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.dataIscrizione = dataIscrizione;
    }

    @Override
    public String toString() {
        return "\n\ncodiceCliente = " + codiceCliente +
                ", nome = '" + nome + '\'' +
                ", cognome = '" + cognome + '\'' +
                ", email = '" + email + '\'' +
                ", dataIscrizione = '" + dataIscrizione + '\n';
    }
}

class Carrello {
    private Cliente clienteAssociato;
    private Articolo[] listaArticoli;
    private double costoTotale;

    // Costruttore
    public Carrello(Cliente clienteAssociato, Articolo[] listaArticoli) {
        this.clienteAssociato = clienteAssociato;
        this.listaArticoli = listaArticoli;
        this.costoTotale = calcolaCostoTotale();
    }

    private double calcolaCostoTotale() {
        double totale = 0;
        if (listaArticoli != null) {
            for (Articolo articolo : listaArticoli) {
                totale += articolo.getPrezzoArticolo();
            }
        }
        return totale;
    }

    @Override
    public String toString() {
        StringBuilder articoli = new StringBuilder();
        if (listaArticoli != null) {
            for (Articolo articolo : listaArticoli) {
                articoli.append(articolo.toString()).append("\n");
            }
        }
        return "Carrello : \n\n" +
                "clienteAssociato = " + clienteAssociato + "\n" +
                "listaArticoli = " + articoli + '\n' +
                "costoTotale = " + costoTotale;
    }
}

public class Esercizio_3 {
    public static void Ecommerce() {
        // Crea un cliente
        Cliente cliente = new Cliente(1, "Mario", "Rossi", "mario.rossi@example.com", "2023-01-01");

        // Crea alcuni articoli
        Articolo articolo1 = new Articolo(101, "Penna", 1.50, 100);
        Articolo articolo2 = new Articolo(102, "Quaderno", 2.00, 50);

        // Crea una lista di articoli
        Articolo[] listaArticoli = { articolo1, articolo2 };

        // Crea un carrello associato al cliente
        Carrello carrello = new Carrello(cliente, listaArticoli);

        // Stampa il contenuto del carrello
        System.out.println(carrello);
    }
}