/*
 * Esercizio #1
 * Creare una classe Rettangolo che permetta di rappresentare dei rettangoli. Per ogni rettangolo deve essere
 * possibile specificare altezza e larghezza in fase di costruzione dell'istanza e devono essere realizzati
 * i metodi per calcolare perimetro e area.
 * Realizzare un metodo stampaRettangolo che , dato un Rettangolo, stampi a video area e perimetro.
 * Realizzare un metodo stampaDueRettangoli che dati due rattangoli , stampi area e perimetro di ognuno e quindi la somma delle aree e dei perimetri
 * Scrivere un main che utilizzi tutte queste funzioni
 */

package Lezione_3;

public class Esercizio_1 {
    public static void RettangoloInAzione() {
     
        Rettangolo rettangolo1 = new Rettangolo(5.0, 10.0);
        Rettangolo rettangolo2 = new Rettangolo(3.0, 7.0);
        
        System.out.println("Dati del primo rettangolo:");
        rettangolo1.stampaRettangolo();

        System.out.println("\nDati del secondo rettangolo:");
        rettangolo2.stampaRettangolo();

        System.out.println("\nConfronto tra i due rettangoli:");
        Rettangolo.stampaDueRettangoli(rettangolo1, rettangolo2);
    }
}

class Rettangolo {
    private double altezza;
    private double larghezza;

    public Rettangolo(double altezza, double larghezza) {
        this.altezza = altezza;
        this.larghezza = larghezza;
    }

    public double calcolaPerimetro() {
        return 2 * (altezza + larghezza);
    }

    public double calcolaArea() {
        return altezza * larghezza;
    }

    public void stampaRettangolo() {
        System.out.println("Area: " + calcolaArea());
        System.out.println("Perimetro: " + calcolaPerimetro());
    }

    public static void stampaDueRettangoli(Rettangolo r1, Rettangolo r2) {
        System.out.println("Primo rettangolo:");
        r1.stampaRettangolo();

        System.out.println("\nSecondo rettangolo:");
        r2.stampaRettangolo();

        double sommaAree = r1.calcolaArea() + r2.calcolaArea();
        double sommaPerimetri = r1.calcolaPerimetro() + r2.calcolaPerimetro();

        System.out.println("\nSomma delle aree: " + sommaAree);
        System.out.println("Somma dei perimetri: " + sommaPerimetri);
    }

}
