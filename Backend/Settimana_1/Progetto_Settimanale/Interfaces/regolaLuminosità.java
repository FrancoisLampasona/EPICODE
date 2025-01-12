package Progetto_Settimanale.Interfaces;

public interface regolaLuminosità {

    void alzaLuminosità(int lum);

    void abbassaLuminosità(int lum);

    default int alzaLuminositàDefault(int lum, int luminosità, int luminositàMax) {
        if (lum <= 0) {
            System.out.println("Errore: il valore per alzare la luminosità deve essere maggiore di 0.");
            return luminosità;
        }
        if (luminosità + lum <= luminositàMax) {
            luminosità += lum;
            System.out.println("Luminosità aumentata a: " + luminosità);
        } else {
            luminosità = luminositàMax;
            System.out.println("Luminosità massima raggiunta: " + luminositàMax);
        }
        return luminosità;
    }

    default int abbassaLuminositàDefault(int lum, int luminosità, int luminositàMin) {
        if (lum <= 0) {
            System.out.println("Errore: il valore per abbassare la luminosità deve essere maggiore di 0.");
            return luminosità;
        }
        if (luminosità - lum >= luminositàMin) {
            luminosità -= lum;
            System.out.println("Luminosità diminuita a: " + luminosità);
        } else {
            luminosità = luminositàMin;
            System.out.println("Luminosità minima raggiunta: " + luminositàMin);
        }
        return luminosità;
    }
}
