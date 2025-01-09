/*
 * Esercizio #3 - while 
 * Scrivere un programma che chieda di inserire una stringa e la suddivida in caratteri separati dalla virgola. 
 * Il programma si ripete fino a che l'utente non inserisce la stringa ":q"
 */

package Lezione_2;

import java.util.Scanner;

public class Esercizio_3 {
    public static void inserisciStringa() {

        Scanner scanner = new Scanner(System.in);
        String new_stringa;

        do {
            System.out.print("Inserisci una stringa (o ':q' per uscire): ");
            new_stringa = scanner.nextLine();

            if (!new_stringa.equals(":q")) {

                String risultato = String.join(",", new_stringa.split(""));
                System.out.println("Stringa suddivisa: " + risultato);
            }

        } while (!new_stringa.equals(":q"));

        System.out.println("Programma terminato.");
        scanner.close();
    }
}
