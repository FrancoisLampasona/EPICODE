package Lezione_2;

/*
 * #Esercizio #2
 * Scrivere una funzione che accetti un intero N e restituisca una lista ordinata di N ineteri casuali da 0 a 100.
 * Scrivere una seconda funzione che accetti una lista e restituisca una nuova lista composta dagli elementi
 * della prima lista seguiti dagli stessi elementi disposti in ordine inverso. Scrivere una terza funzione
 * che accetti una lista ed un booleano : se il booleano è true stampa i valori in posizioni pari,
 * altrimenti stampa i valori in posizioni dispari.
 */



import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class Esercizio_2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Inserisci il numero di elementi: ");

        int N = scanner.nextInt();
        scanner.nextLine();

        ArrayList<Integer> lista_ordinata = creatore_lista_ordinata(N);
        System.out.println("La mia lista ordinata :" + lista_ordinata);
        ArrayList<Integer> lista_inversa = creatore_lista_inversa(lista_ordinata);
        System.out.println("La mia lista inversa :" + lista_inversa);

        pari_o_dispari(lista_ordinata, true);
        System.out.println("\n");
        pari_o_dispari(lista_ordinata, false);

        scanner.close();
    }

    private static ArrayList<Integer> creatore_lista_ordinata(int N) {
        ArrayList<Integer> ritorna = new ArrayList<Integer>();

        for (int i = 0; i < N; i++) {

            ritorna.add((int) Math.floor(Math.random() * 100 + 1));

        }

        return ritorna;
    }

    private static ArrayList<Integer> creatore_lista_inversa(ArrayList<Integer> lista_ordinata) {
        ArrayList<Integer> ritorna = new ArrayList<>(lista_ordinata);
        ArrayList<Integer> lista_inversa = new ArrayList<>(lista_ordinata);
        Collections.reverse(lista_inversa);
        ritorna.addAll(lista_inversa);
        return ritorna;
    }

    private static void pari_o_dispari(ArrayList<Integer> lista_ordinata, boolean valore) {

        System.out.println(valore ? "\nValori in posizioni pari :" : "Valori in posizioni dispari :");

        for (int i = 0; i < lista_ordinata.size(); i++) {
            if ((i % 2 == 0 && valore) || (i % 2 != 0 && !valore)) {
                System.out.println("Posizione " + i + ":" + lista_ordinata.get(i));
            }
        }

    }

}
