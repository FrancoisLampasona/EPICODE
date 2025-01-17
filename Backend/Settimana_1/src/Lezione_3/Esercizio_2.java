/*
 * Esercizio #2
 * Scrivere un applicazione che simula il funzionamento di un frammento del sistema informativo
 * di un operatore di telefonia cellulare.
 * 
 * Si devono quindi rappresentare i dati relativi ad un certa SIM , ed in particolare:
 * - Il numero di telefono
 * - Il credito disponibile in euro
 * - La lista delle ultime 5 chiamate effettuate
 * Per ciascuna chiamata deve essere rappresentata la durata in minuti e il numero chiamato
 * 
 * La classe SIM dovrà fornire le seguenti funzionalità :
 * - Un costruttore che crea una SIM con numero di telefono passato come parametro , credito a 0 e lista delle chiamate vuote
 * - Una funziona per la stampa dei dati della SIM
 * 
 * Scrivere un main che crei una istanza di SIM e ne stampi i dati
 */

package Lezione_3;

class SIM {
    private int numero_SIM;
    private double credito_disponibile;
    private Chiamata[] lista_chiamate;

    public SIM(int numero_SIM, double credito_disponibile, Chiamata[] lista_chiamate) {
        this.numero_SIM = numero_SIM;
        this.credito_disponibile = credito_disponibile;
        this.lista_chiamate = lista_chiamate != null ? lista_chiamate : new Chiamata[5];
    }

    public void stampaDatiSim() {
        System.out.println("Il numero della SIM e' : " + numero_SIM);
        System.out.println("Il credito disponibile sulla SIM e' di: " + credito_disponibile + " Euro");
        System.out.println("Lista chiamate recenti:");
        for (Chiamata chiamata : lista_chiamate) {
            if (chiamata != null) {
                System.out.println("- Numero chiamato: " + chiamata.getNumeroChiamato() + ", Durata: "
                        + chiamata.getDurataMinuti() + " minuti");
            }
        }
    }

    public int getNumeroSIM() {
        return numero_SIM;
    }

    public void setNumeroSIM(int numero_SIM) {
        this.numero_SIM = numero_SIM;
    }

    public double getCreditoDisponibile() {
        return credito_disponibile;
    }

    public void setCreditoDisponibile(double credito_disponibile) {
        this.credito_disponibile = credito_disponibile;
    }

}

class Chiamata {
    private int numero_chiamato;
    private int durata_minuti;

    public Chiamata(int numero_chiamato, int durata_minuti) {
        this.numero_chiamato = numero_chiamato;
        this.durata_minuti = durata_minuti;
    }

    public int getNumeroChiamato() {
        return numero_chiamato;
    }

    public int getDurataMinuti() {
        return durata_minuti;
    }
}

public class Esercizio_2 {

    public static void controllaSim() {
        Chiamata[] chiamate = {
                new Chiamata(123456789, 5),
                new Chiamata(987654321, 10),
                new Chiamata(112233445, 3)
        };
        SIM miaSIM = new SIM(12345, 20.0, chiamate);
        miaSIM.stampaDatiSim();
    }

}
