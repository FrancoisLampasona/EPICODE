public class Main {
    public static void main(String[] args) {

        // Esercizi Lezione 1 :

        /*
         * Lezione_1_Esercizio_1();
         * Lezione_1_Esercizio_2();
         * Lezione_1_Esercizio_3();
         */

        // Esercizi Lezione 2 :

        /*
         * Lezione_2_Esercizio_1();
         * Lezione_2_Esercizio_2();
         * Lezione_2_Esercizio_3();
         * Lezione_2_Esercizio_4();
         */

        // Esercizi Lezione 3 :
        // Lezione_3_Esercizio_1();
        // Lezione_3_Esercizio_2();
        Lezione_3_Esercizio_3();

    }

    // Lezione 1 :

    public static void Lezione_1_Esercizio_1() {
        System.out.println("// Lezione 1 - Esercizio 1 :");

        System.out.println(Lezione_1.Esercizio_1.Moltiplica(2, 5));

        System.out.println(Lezione_1.Esercizio_1.Concatena("Cane", 5));

        String[] array = { "A", "B", "C", "D", "E" };
        String parola = "X";

        String[] return_Array = Lezione_1.Esercizio_1.InserisciInArray(array, parola);

        System.out.println("Nuovo Array:");
        for (String elemento : return_Array) {
            System.out.print(elemento + " ");
        }
        System.out.println("\n");
    }

    public static void Lezione_1_Esercizio_2() {
        System.out.println("// Lezione 1 - Esercizio 2 :");
        Lezione_1.Esercizio_2.main();
        System.out.println("\n");
    }

    public static void Lezione_1_Esercizio_3() {
        System.out.println("// Lezione 1 - Esercizio 3 :");

        Lezione_1.Esercizio_3.perimetroRettangolo(2, 4);

        int pari_dispari = Lezione_1.Esercizio_3.pariDispari(5);

        if (pari_dispari == 0) {
            System.out.println("Dispari");
        } else {
            System.out.println("Pari");
        }

        System.out.println(Lezione_1.Esercizio_3.perimetroTriangolo(3, 3, 5));
        System.out.println("\n");
    }

    // Lezione 2 :

    public static void Lezione_2_Esercizio_1() {
        System.out.println("// Lezione 2 - Esercizio 1 :");

        if (Lezione_2.Esercizio_1.stringaPariDispari("ciaone")) {
            System.out.println("La Stringa ha un numero di caratteri pari");
        } else {
            System.out.println("La Stringa ha un numero di caratteri dispari");
        }

        int anno = 2050;

        if (Lezione_2.Esercizio_1.annoBisestile(anno)) {
            System.out.println(anno + " e' un anno bisestile.");
        } else {
            System.out.println(anno + " non e' un anno bisestile.");
        }
        System.out.println("\n");
    }

    public static void Lezione_2_Esercizio_2() {
        System.out.println("// Lezione 2 - Esercizio 2 :");
        Lezione_2.Esercizio_2.switchState();
        System.out.println("\n");
    }

    public static void Lezione_2_Esercizio_3() {
        System.out.println("// Lezione 2 - Esercizio 3 :");
        Lezione_2.Esercizio_3.inserisciStringa();
        System.out.println("\n");
    }

    public static void Lezione_2_Esercizio_4() {
        System.out.println("// Lezione 2 - Esercizio 4 :");
        Lezione_2.Esercizio_4.countDown();
        System.out.println("\n");
    }

    // Lezione 3 :

    public static void Lezione_3_Esercizio_1() {
        System.out.println("// Lezione 3 - Esercizio 1 :");
        Lezione_3.Esercizio_1.RettangoloInAzione();
        System.out.println("\n");
    }

    public static void Lezione_3_Esercizio_2() {
        System.out.println("// Lezione 3 - Esercizio 2 :");
        Lezione_3.Esercizio_2.controllaSim();
        System.out.println("\n");
    }

    public static void Lezione_3_Esercizio_3() {
        System.out.println("// Lezione 3 - Esercizio 3 :");
        Lezione_3.Esercizio_3.Ecommerce();
        System.out.println("\n");
    }
}
