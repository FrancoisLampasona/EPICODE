/*
 * Esercizio #2
 * Estendere il punto 1 aggiungendo 3 ulteriori classi : 
 * - DipendenteFullTime 
 * - DipendentePartTime
 * - Dirigente
 * 
 * La classe Dipendente deve diventare astratta e le 3 classi di sopra devono ereditare da essa.
 * Ogni classe concreta deve implementare il metodo calculateSalary() in modo appropriato
 * per il tipo di dipendente specifico. Ad esempio, il salario di un dipendente a tempo pieno
 * potrebbe essere calcolato come uno stipendio mensile fisso, mentre il salario di un dipendente
 * part-time potrebbe essere calcolato in base alle ore lavorate.
 * 
 * Nel main , crea diverse istanze di dipendenti (ad esempio, dipendenti a tempo pieno,
 * dipendenti part-time e dirigenti) mettendoli in un unico array e calcola i loro stipendi totali.
 * Utilizza il polimorfismo per trattare tutti i dipendenti in modo uniforme.
 */

package Lezione_4;

class DipendenteFullTime extends Dipendente {
    public DipendenteFullTime(int matricola, double stipendio, String dipartimento) {
        super(matricola, stipendio, dipartimento);
    }

    @Override
    public double calculateSalary() {
        return getStipendio();
    }

    @Override
    public void mostraInfo() {
        System.out.println("Full-Time - Matricola: " + getMatricola() + ", Stipendio Mensile: " + calculateSalary()
                + ", Dipartimento: " + getDipartimento());
    }
}

class DipendentePartTime extends Dipendente {
    private int oreLavorate;

    public DipendentePartTime(int matricola, double stipendio, String dipartimento, int oreLavorate) {
        super(matricola, stipendio, dipartimento);
        this.oreLavorate = oreLavorate;
    }

    @Override
    public double calculateSalary() {
        return getStipendio() * oreLavorate;
    }

    @Override
    public void mostraInfo() {
        System.out.println("Part-Time - Matricola: " + getMatricola() + ", Ore Lavorate: " + oreLavorate
                + ", Stipendio Totale: " + calculateSalary() + ", Dipartimento: " + getDipartimento());
    }
}

class Dirigente extends Dipendente {
    private double bonus;

    public Dirigente(int matricola, double stipendio, String dipartimento, double bonus) {
        super(matricola, stipendio, dipartimento);
        this.bonus = bonus;
    }

    @Override
    public double calculateSalary() {
        return getStipendio() + bonus;
    }

    @Override
    public void mostraInfo() {
        System.out.println("Dirigente - Matricola: " + getMatricola() + ", Stipendio Base: " + getStipendio()
                + ", Bonus: " + bonus + ", Stipendio Totale: " + calculateSalary()
                + ", Dipartimento: " + getDipartimento());
    }
}

public class Esercizio_2 {

    public static void Ufficio_2() {
        String[] dipartimenti = { "PRODUZIONE", "AMMINISTRAZIONE", "VENDITE" };

        Dipendente[] dipendenti = new Dipendente[5];
        dipendenti[0] = new DipendenteFullTime(12345, 2000.00, dipartimenti[0]);
        dipendenti[1] = new DipendentePartTime(6789, 15.50, dipartimenti[1], 80);
        dipendenti[2] = new Dirigente(11223, 5000.00, dipartimenti[2], 1000.00);
        dipendenti[3] = new DipendentePartTime(45678, 20.00, dipartimenti[0], 100);
        dipendenti[4] = new DipendenteFullTime(8910, 2500.00, dipartimenti[2]);

        double totaleStipendi = 0;

        for (Dipendente dipendente : dipendenti) {
            dipendente.mostraInfo();
            totaleStipendi += dipendente.calculateSalary();
        }

        System.out.println("Totale Stipendi: " + totaleStipendi);
    }

}
