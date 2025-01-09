/*
 * Esercizio #2
 * Implementare un metodo main che chiede all'utente di inserire tre stringhe da tastiera e scrive in console la concatenazione
 * delle stringhe in ordine di inserimento o in ordine di inserimento inverso.
 */

package Lezione_1;

import java.util.Scanner;

public class Esercizio_2 {
    public static void main() {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Inserisci la prima stringa: ");
        String stringa_1 = scanner.next();

        System.out.print("Inserisci la seconda stringa: ");
        String stringa_2 = scanner.next();

        System.out.print("Inserisci la terza stringa: ");
        String stringa_3 = scanner.next();

        scanner.close();

        String ordineNormale = stringa_1 + stringa_2 + stringa_3;
        System.out.println("Concatenazione in ordine di inserimento: " + ordineNormale);

        // Concatenazione delle stringhe in ordine inverso
        String ordineInverso = stringa_3 + stringa_2 + stringa_1;
        System.out.println("Concatenazione in ordine inverso: " + ordineInverso);
    }
}
