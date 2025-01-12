package Progetto_Settimanale.ConcrateClasses;

import Progetto_Settimanale.Interfaces.regolaLuminosità;

public class GestoreImage implements regolaLuminosità {
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

}
