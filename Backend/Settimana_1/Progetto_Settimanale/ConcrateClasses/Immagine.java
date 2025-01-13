package Progetto_Settimanale.ConcrateClasses;

import Progetto_Settimanale.AbstractClasses.ElementoMultimediale;

public class Immagine extends ElementoMultimediale {
    private final GestoreImage gestoreImage;
    private final int luminosita;

    public Immagine(String title) {
        super(title);
        this.gestoreImage = new GestoreImage();
        this.luminosita = gestoreImage.getLuminosita();
    }

    public int getLuminosita() {
        return luminosita;
    }

    public void alzaLuminosita(int lum) {
        gestoreImage.alzaLuminosita(lum);
    }

    public void abbassaLuminosita(int lum) {
        gestoreImage.abbassaLuminosita(lum);
    }

    public void show() {
        System.out
                .println("Tipo : (Immagine) | Titolo = '" + getTitolo() + "*".repeat(gestoreImage.getLuminosita()));
    }

    @Override
    public String toString() {
        return "Immagine [Titolo = '" + getTitolo() + ", Luminosita = " + gestoreImage.getLuminosita() + "]";
    }

}
