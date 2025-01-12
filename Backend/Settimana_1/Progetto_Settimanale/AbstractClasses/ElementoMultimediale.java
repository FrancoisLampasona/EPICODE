package Progetto_Settimanale.AbstractClasses;

public abstract class ElementoMultimediale {
    private final String title;

    public ElementoMultimediale(String title) {
        this.title = title;
    }

    public String getTitolo() {
        return title;
    }

}