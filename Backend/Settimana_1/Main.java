import Lezione_1.*;

public class Main {
    public static void main(String[] args) {
        Lezione_1_Esercizio_1();
        Lezione_1_Esercizio_2();
        Lezione_1_Esercizio_3();
    }

    public static void Lezione_1_Esercizio_1() {

        System.out.println("// Lezione 1 - Esercizio 1 :");

        System.out.println(Esercizio_1.Moltiplica(2, 5));

        System.out.println(Esercizio_1.Concatena("Cane", 5));

        String[] array = { "A", "B", "C", "D", "E" };

        String parola = "X";

        String[] return_Array = Esercizio_1.InserisciInArray(array, parola);

        System.out.println("Nuovo Array:");

        for (String elemento : return_Array) {
            System.out.print(elemento + " ");
        }
        System.out.println("\n");
    }

    public static void Lezione_1_Esercizio_2() {
        System.out.println("// Lezione 1 - Esercizio 2 :");
        Esercizio_2.main();
        System.out.println("\n");
    }

    public static void Lezione_1_Esercizio_3() {

        System.out.println("// Lezione 1 - Esercizio 3 :");

        Esercizio_3.perimetroRettangolo(2, 4);

        int pari_dispari = Esercizio_3.pariDispari(5);

        if (pari_dispari == 0) {
            System.out.println("Dispari");
        } else {
            System.out.println("Pari");
        }

        System.out.println(Esercizio_3.perimetroTriangolo(3, 3, 5));
        System.out.println("\n");
    }
}
