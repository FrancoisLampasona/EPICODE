/*
 * Esercizio #4 - for 
 * Scrivere un programma che chiede all'utente di inserire un numero intero e 
 * stampi il conto alla rovescia a partire da quel numero fino a zero
 */

package Lezione_2;

import java.util.Scanner;

public class Esercizio_4 {
    public static void countDown() {

        System.out.print("Inserisci un numero : ");

        Scanner scanner = new Scanner(System.in);

        int numero = scanner.nextInt();

        scanner.close();

        for (int i = numero; i != 0; i--) {
            System.out.print(i + " ");
        }

    }
}
