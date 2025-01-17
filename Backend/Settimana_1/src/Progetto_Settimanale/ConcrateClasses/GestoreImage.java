package Progetto_Settimanale.ConcrateClasses;

import Progetto_Settimanale.Interfaces.regolaLuminosita;

public class GestoreImage implements regolaLuminosita {
    private int luminosita = 5;
    private final int luminositaMax = 10;
    private final int luminositaMin = 0;

    public int getLuminosita() {
        return luminosita;
    }

    @Override
    public void alzaLuminosita(int lum) {
        luminosita = alzaLuminositaDefault(lum, luminosita, luminositaMax);
    }

    @Override
    public void abbassaLuminosita(int lum) {
        luminosita = abbassaLuminositaDefault(lum, luminosita, luminositaMin);
    }

}
