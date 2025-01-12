/*
 * Esercizio #3
 * Estendere il punto 2 aggiungendo la classe Volontario con le seguenti caratteristiche :
 * - nome
 * - età
 * - CV
 * 
 * Definire un'interfaccia con un metodo checkIn() comune a Dipendente e Volontario
 * che indica quando un dipendente inzia il suo turno di lavoro o quando un volontario inizia
 * il suo servizio (basta un print in console)
 * 
 * Nel main creare un array con dipendenti e volontarri e chiamare il metodo checkin per ognuno di essi
 */

package Lezione_4;

class Volontario implements Checkable {
    private String nome;
    private int eta;
    private String cv;

    public Volontario(String nome, int eta, String cv) {
        this.nome = nome;
        this.eta = eta;
        this.cv = cv;
    }

    public String getNome() {
        return nome;
    }

    public int getEta() {
        return eta;
    }

    public String getCv() {
        return cv;
    }

    @Override
    public void checkIn() {
        System.out.println("Volontario " + nome + " ha iniziato il servizio.");
    }

    public void mostraInfo() {
        System.out.println("Volontario - Nome: " + nome + ", Età: " + eta + ", CV: " + cv);
    }
}

public class Esercizio_3 {

    public static void Ufficio_3() {

        Dipendente dip1 = new DipendenteFullTime(12345, 2000.00, "PRODUZIONE");
        Dipendente dip2 = new DipendentePartTime(6789, 15.50, "AMMINISTRAZIONE", 80);
        Dipendente dip3 = new Dirigente(11223, 5000.00, "VENDITE", 1000.00);
        Volontario vol1 = new Volontario("Mario Rossi", 25, "Laurea in Scienze Sociali");
        Volontario vol2 = new Volontario("Anna Verdi", 30, "Esperienza in associazioni umanitarie");

        Checkable[] persone = { dip1, dip2, dip3, vol1, vol2 };

        for (Checkable persona : persone) {
            persona.checkIn();
        }
    }

}
