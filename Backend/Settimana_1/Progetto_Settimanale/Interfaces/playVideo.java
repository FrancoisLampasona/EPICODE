package Progetto_Settimanale.Interfaces;

public interface playVideo {

    default void playNowVideo(String titolo, int durata, int volume,int luminosità) {
        System.out.println("Riproduzione Video di '" + titolo + "' in corso per " + durata + " secondi...");
        if (volume == 0) {
            System.out.println("Il volume è a 0: nessun suono udibile.");
        } else {
            for (int i = 0; i < durata; i++) {
                System.out.println("Riproducendo: " + titolo + " " + "!".repeat(volume) + "*".repeat(luminosità));
            }
        }
        System.out.println("Riproduzione terminata.");
    }
}