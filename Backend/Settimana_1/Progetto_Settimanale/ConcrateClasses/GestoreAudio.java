package Progetto_Settimanale.ConcrateClasses;

import Progetto_Settimanale.Interfaces.playAudio;

public class GestoreAudio implements playAudio {

    private int volume = 5;
    private final int volumeMax = 10;
    private final int volumeMin = 0;

    public int getVolume() {
        return volume;
    }

    public void alzaVolume(int vol) {
        if (vol <= 0) {
            System.out.println("Errore: il valore per alzare il volume deve essere maggiore di 0.");
            return;
        }
        if (volume + vol <= volumeMax) {
            volume += vol;
            System.out.println("Volume aumentato a: " + volume);
        } else {
            volume = volumeMax;
            System.out.println("Volume massimo raggiunto: " + volume);
        }
    }

    public void abbassaVolume(int vol) {
        if (vol <= 0) {
            System.out.println("Errore: il valore per abbassare il volume deve essere maggiore di 0.");
            return;
        }
        if (volume - vol >= volumeMin) {
            volume -= vol;
            System.out.println("Volume diminuito a: " + volume);
        } else {
            volume = volumeMin;
            System.out.println("Volume minimo raggiunto: " + volume);
        }
    }

    @Override
    public void playNowAudio(String titolo, int durata, int volume) {
        System.out.println("GestoreAudio: ");
        playAudio.super.playNowAudio(titolo, durata, volume);
    }

}
