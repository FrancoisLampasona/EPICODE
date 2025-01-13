package Progetto_Settimanale.ConcrateClasses;

import Progetto_Settimanale.AbstractClasses.ElementoMultimediale;

public class Video extends ElementoMultimediale {

    private final int durata;
    private final GestoreVideo gestoreVideo;

    public Video(String title, int durata) {
        super(title);
        this.durata = durata;
        this.gestoreVideo = new GestoreVideo();
    }

    public int getDurata() {
        return durata;
    }

    public int getLuminosita() {
        return gestoreVideo.getLuminosita();
    }

    public int getVolume() {
        return gestoreVideo.getVolume();
    }

    public void alzaVolume(int vol) {
        gestoreVideo.alzaVolume(vol);
    }

    public void abbassaVolume(int vol) {
        gestoreVideo.abbassaVolume(vol);
    }

    public void alzaLuminosita(int lum) {
        gestoreVideo.alzaLuminosita(lum);
    }

    public void abbassaLuminosita(int lum) {
        gestoreVideo.abbassaLuminosita(lum);
    }

    public void playNow() {
        gestoreVideo.playNowVideo(getTitolo(), durata, getVolume(), gestoreVideo.getLuminosita());
    }

    @Override
    public String toString() {
        return "Video [Titolo = '" + getTitolo() + "', Durata = " + durata + " secondi, Volume = " + getVolume()
                + ", Luminosita = " + gestoreVideo.getLuminosita() + "]";
    }

}
