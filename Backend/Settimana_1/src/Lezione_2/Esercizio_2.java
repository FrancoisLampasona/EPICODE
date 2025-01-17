/*
 * Esercizio #2 - switch
 * Scrivere un programma che chiede un intero in ingresso e lo stampa in lettere se il valore
 * è compreso tra 0 e 3, altrimenti stampa un messaggio d'errore usando il costrutto switch
 */

package Lezione_2;

import java.util.Scanner;

public class Esercizio_2 {

    public static void switchState() {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Inserisci un numero intero: ");
        int numero = scanner.nextInt();

        scanner.nextLine();

        switch (numero) {
            case 0:
                System.out.println("Zero");
                break;
            case 1:
                System.out.println("Uno");
                break;
            case 2:
                System.out.println("Due");
                break;
            case 3:
                System.out.println("Tre");
                break;
            default:
                System.out.println("Errore: il numero deve essere compreso tra 0 e 3.");
                break;
        }

        scanner.close();
    }
}
