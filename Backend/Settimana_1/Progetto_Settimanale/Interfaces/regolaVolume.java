package Progetto_Settimanale.Interfaces;

public interface regolaVolume {

    void alzaVolume(int vol);

    void abbassaVolume(int vol);

    default int alzaVolumeDefault(int incremento, int volumeAttuale, int volumeMax) {
        if (incremento <= 0) {
            System.out.println("Errore: il valore per alzare il volume deve essere maggiore di 0.");
            return volumeAttuale;
        }
        if (volumeAttuale + incremento <= volumeMax) {
            volumeAttuale += incremento;
            System.out.println("\nVolume aumentato a: " + volumeAttuale);
        } else {
            volumeAttuale = volumeMax;
            System.out.println("Volume massimo raggiunto: " + volumeMax);
        }
        return volumeAttuale;
    }

    default int abbassaVolumeDefault(int decremento, int volumeAttuale, int volumeMin) {
        if (decremento <= 0) {
            System.out.println("Errore: il valore per abbassare il volume deve essere maggiore di 0.");
            return volumeAttuale;
        }
        if (volumeAttuale - decremento >= volumeMin) {
            volumeAttuale -= decremento;
            System.out.println("Volume diminuito a: " + volumeAttuale);
        } else {
            volumeAttuale = volumeMin;
            System.out.println("Volume minimo raggiunto: " + volumeMin);
        }
        return volumeAttuale;
    }
}
