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

    public int getVolume() {
        return gestoreVideo.getVolume();
    }

    public void alzaVolume(int vol) {
        gestoreVideo.alzaVolume(vol);
    }

    public void abbassaVolume(int vol) {
        gestoreVideo.abbassaVolume(vol);
    }

    public void alzaLuminosità(int lum) {
        gestoreVideo.alzaLuminosità(lum);
    }

    public void abbassaLuminosità(int lum) {
        gestoreVideo.abbassaLuminosità(lum);
    }

    public void playNow() {
        System.out.println("Riproduzione di '" + getTitolo() + "' per " + durata + " secondi...");
        gestoreVideo.playNowVideo(getTitolo(), durata, getVolume(), gestoreVideo.getLuminosità());
    }

    @Override
    public String toString() {
        return "Video [Titolo = '" + getTitolo() + "', Durata = " + durata + " secondi, Volume = " + getVolume()
                + ", Luminosità = " + gestoreVideo.getLuminosità() + "]";
    }

}
