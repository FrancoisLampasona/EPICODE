/*
 * Esercizio #1
 * Scrivere la classe Dipendente che ha i seguenti attributi:
 * - Matricola : identificativo univoco del dipendente;
 * - Stipendio : numero decimale con stipendio base mensile calcolato per il dipendente;
 * - Dipartimento : valori possibili [PRODUZIONE , AMMINISTRAZIONE , VENDITE];
 * 
 * Le proprietà devono essere accessibili solo dalla classe Dipendente e deve essere possibile leggerle tramite
 * opportuni metodi getter ma non modificarle, tranne la proprietà Dipartimento che può essere modificata da altre 
 * classi tramite setter.
 * 
 * Instanziare 3 Dipendenti nel main, creare un array con essi ed iterare su ognuno di essi stampando la matricola
 * di ogni dipendente.
 */

package Lezione_4;

abstract class Dipendente implements Checkable {
    private int matricola;
    private double stipendio;
    private String dipartimento;

    public Dipendente(int matricola, double stipendio, String dipartimento) {
        this.matricola = matricola;
        this.stipendio = stipendio;
        this.dipartimento = dipartimento;
    }

    public int getMatricola() {
        return matricola;
    }

    public double getStipendio() {
        return stipendio;
    }

    public String getDipartimento() {
        return dipartimento;
    }

    public void setDipartimento(String dipartimentoNew) {
        this.dipartimento = dipartimentoNew;
    }

    public abstract double calculateSalary();

    public abstract void mostraInfo();

    @Override
    public void checkIn() {
        System.out.println("Dipendente " + matricola + " ha iniziato il turno.");
    }
}

class DipendenteConcreto extends Dipendente {

    public DipendenteConcreto(int matricola, double stipendio, String dipartimento) {
        super(matricola, stipendio, dipartimento);
    }

    @Override
    public void mostraInfo() {
        System.out.println("Dipendente - Matricola: " + getMatricola() + ", Stipendio: " + getStipendio()
                + ", Dipartimento: " + getDipartimento());
    }

    @Override
    public double calculateSalary() {
        return getStipendio();
    }
}

public class Esercizio_1 {

    public static void Ufficio() {
        String[] dipartimenti = { "PRODUZIONE", "AMMINISTRAZIONE", "VENDITE" };

        Dipendente[] dipendenti = new Dipendente[3];
        dipendenti[0] = new DipendenteConcreto(12345, 2000.50, dipartimenti[(int) (Math.random() * 3)]);
        dipendenti[1] = new DipendenteConcreto(6789, 3000.75, dipartimenti[(int) (Math.random() * 3)]);
        dipendenti[2] = new DipendenteConcreto(24567, 2500.60, dipartimenti[(int) (Math.random() * 3)]);

        for (Dipendente dipendente : dipendenti) {
            System.out.println("Matricola Dipendente: " + dipendente.getMatricola());
            dipendente.mostraInfo();
        }
    }
}
