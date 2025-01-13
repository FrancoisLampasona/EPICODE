package Progetto_Settimanale.Interfaces;

public interface regolaLuminosita {

    void alzaLuminosita(int lum);

    void abbassaLuminosita(int lum);

    default int alzaLuminositaDefault(int lum, int luminosita, int luminositaMax) {
        if (lum <= 0) {
            System.out.println("Errore: il valore per alzare la luminosita deve essere maggiore di 0.");
            return luminosita;
        }
        if (luminosita + lum <= luminositaMax) {
            luminosita += lum;
            System.out.println("Luminosita aumentata a: " + luminosita);
        } else {
            luminosita = luminositaMax;
            System.out.println("Luminosita massima raggiunta: " + luminositaMax);
        }
        return luminosita;
    }

    default int abbassaLuminositaDefault(int lum, int luminosita, int luminositaMin) {
        if (lum <= 0) {
            System.out.println("Errore: il valore per abbassare la luminosita deve essere maggiore di 0.");
            return luminosita;
        }
        if (luminosita - lum >= luminositaMin) {
            luminosita -= lum;
            System.out.println("Luminosita diminuita a: " + luminosita);
        } else {
            luminosita = luminositaMin;
            System.out.println("Luminosita minima raggiunta: " + luminositaMin);
        }
        return luminosita;
    }
}
