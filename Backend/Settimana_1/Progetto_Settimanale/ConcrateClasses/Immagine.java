package Progetto_Settimanale.ConcrateClasses;

import Progetto_Settimanale.AbstractClasses.ElementoMultimediale;

public class Immagine extends ElementoMultimediale {
    private final GestoreImage gestoreImage;

    public Immagine(String title) {
        super(title);
        this.gestoreImage = new GestoreImage();
    }

    public void alzaLuminosità(int lum) {
        gestoreImage.alzaLuminosità(lum);
    }

    public void abbassaLuminosità(int lum) {
        gestoreImage.abbassaLuminosità(lum);
    }

    public void show() {
        System.out
                .println("Immagine [Titolo = '" + getTitolo() + "*".repeat(gestoreImage.getLuminosità()));
    }

    @Override
    public String toString() {
        return "Immagine [Titolo = '" + getTitolo() + ", Luminosità = " + gestoreImage.getLuminosità() + "]";
    }

}
