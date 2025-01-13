package Progetto_Settimanale.ConcrateClasses;

import Progetto_Settimanale.Interfaces.playAudio;
import Progetto_Settimanale.Interfaces.regolaVolume;

public class GestoreAudio implements playAudio, regolaVolume {

    private int volume = 5;
    private final int volumeMax = 10;
    private final int volumeMin = 0;

    public int getVolume() {
        return volume;
    }

    @Override
    public void alzaVolume(int vol) {
        volume = alzaVolumeDefault(vol, volume, volumeMax);
    }

    @Override
    public void abbassaVolume(int vol) {
        volume = abbassaVolumeDefault(vol, volume, volumeMin);
    }

    @Override
    public void playNowAudio(String titolo, int durata, int volume) {
        playAudio.super.playNowAudio(titolo, durata, volume);
    }

}
