package Progetto_Settimanale.ConcrateClasses;

import Progetto_Settimanale.Interfaces.playVideo;
import Progetto_Settimanale.Interfaces.regolaLuminosità;

public class GestoreVideo extends GestoreAudio implements regolaLuminosità, playVideo {

    private int luminosità = 5;
    private final int luminositàMax = 10;
    private final int luminositàMin = 0;

    public int getLuminosità() {
        return luminosità;
    }

    @Override
    public void alzaLuminosità(int lum) {
        luminosità = alzaLuminositàDefault(lum, luminosità, luminositàMax);
    }

    @Override
    public void abbassaLuminosità(int lum) {
        luminosità = abbassaLuminositàDefault(lum, luminosità, luminositàMin);
    }

    @Override
    public void playNowVideo(String titolo, int durata, int volume, int luminosità) {
        playVideo.super.playNowVideo(titolo, durata, volume, luminosità);
    }
}
