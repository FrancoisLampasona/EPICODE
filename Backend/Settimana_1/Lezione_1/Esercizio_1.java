/*
 * Esercizio #1
 * Implementare i seguenti metodo : 
 * - Moltiplica : Accetta due interi e ritorna il loro prodotto
 * - Concatena : Accetta una stringa e un intero e restituisce una stringa che concatena gli elementi
 * - InserisciInArray : Accetta un array di stringhe di cinque elementi ed una stringa e restituisca un array di sei
 * elementi in cui la stringa passata sia al terzo posto e le stringhe precedentemente in quarta e quinta posizione siano
 * rispettivamente in quinta e seta.
 */

package Lezione_1;

public class Esercizio_1 {

    public static int Moltiplica(int a, int b) {

        int prodotto = a * b;
        return prodotto;
    }

    public static String Concatena(String parola, int x) {
        String new_stringa = parola + x;
        return new_stringa;
    }

    public static String[] InserisciInArray(String[] arrayStringhe, String parola) {

        String[] nuovoArray = new String[arrayStringhe.length + 1];

        for (int i = 0; i < 2; i++) {
            nuovoArray[i] = arrayStringhe[i];
        }

        nuovoArray[2] = parola;

        for (int i = 2; i < arrayStringhe.length; i++) {
            nuovoArray[i + 1] = arrayStringhe[i];
        }

        return nuovoArray;

    }

}
