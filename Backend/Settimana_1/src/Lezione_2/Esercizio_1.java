/*
 * Esercizio #1 if - else if
 * Scrivere i seguenti metodi :
 * - stringaPariDispari , che accetta una stringa e ritorna true se il numero di caratteri è pari e false se il numero di caratteri è dispari.
 * - annoBisestile , che accetta un anno espresso come intero e ritorna true se esso è bisestile , false altrimenti.
 * [Un anno per essere bisestile deve rispettare le seguenti regole : 
 * - essere divisibile per 4
 * - qualora sia divisibile per 100 deve essere anche divisibile per 400
 * ]
 */

package Lezione_2;

public class Esercizio_1 {

    public static boolean stringaPariDispari(String parola) {
        return parola.length() % 2 == 0 ? true : false;
    }

    public static boolean annoBisestile(int anno) {
        return anno % 4 == 0 && (anno % 100 != 0 || anno % 400 == 0) ? true : false;
    }

}
