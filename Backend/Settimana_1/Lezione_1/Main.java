// 1) Esercizio 
// Implementare i seguenti metodi :
// - Moltiplica : accetta due interi e ritorno il loro prodotto
// - Concatena : accetta una stringa , un intero e restituisce una stringa che concatena gli elementi 
// - InserisciLnArray : Accetta un array di stringhe di cinque elementi ed una stringa , restituisce un array di sei elementi in cui 
// la stringa passata sia al terzo posto e le stringhe precedentemente in quarta e quindi posizione siano rispettivamente in quinta e sesta

import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        System.out.println("Ciao, mondo!");
        Francois.saluta();
        Main.somma(6, 7);
        Main.concatenaStringa("tommaso", 10);

        System.out.println(
                Arrays.toString(
                        Main.InserisciLnArray(new String[] { "ciao", "come", "va", "domani", "cinema" }, "Francois")));
    }

    public static void somma(int a, int b) {
        System.out.println(a + b);
    }

    public static void concatenaStringa(String nome, int K) {
        System.out.println(nome + K);
    }

    public static String[] InserisciLnArray(String[] array, String parolina) {

        if (array.length != 5) {
            throw new Error("Sono sbagliato");
        }

        String[] array_new = new String[] { array[0], array[1], parolina, array[2], array[3], array[4] };
        return array_new;

    }

}

class Francois {
    public static void main() {
        Francois.saluta();
    }

    // metodo
    public static void saluta() {
        System.out.println("Francois");
    }
}
