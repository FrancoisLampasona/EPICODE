package Progetto_Settimanale.ConcrateClasses;

import Progetto_Settimanale.AbstractClasses.ElementoMultimediale;

public class RegistrazioneAudio extends ElementoMultimediale {

    private final int durata;
    private final GestoreAudio gestoreAudio;

    public RegistrazioneAudio(String title, int durata) {
        super(title);
        this.durata = durata;
        this.gestoreAudio = new GestoreAudio();
    }

    public int getDurata() {
        return durata;
    }

    public int getVolume() {
        return gestoreAudio.getVolume();
    }

    public void alzaVolume(int vol) {
        gestoreAudio.alzaVolume(vol);
    }

    public void abbassaVolume(int vol) {
        gestoreAudio.abbassaVolume(vol);
    }

    public void playNow() {
        gestoreAudio.playNowAudio(getTitolo(), durata, getVolume());
    }

    @Override
    public String toString() {
        return "RegistrazioneAudio [Titolo = '" + getTitolo() + "', Durata = " + durata + " secondi, Volume =" + getVolume()
                + "]";
    }
}
