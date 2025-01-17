

/*
 * Esercizio #1
 * Scrivere un programma che chieda all'utente di inserire un intero N che rappresenti il numero di elementi
 * da inserire e poi gli chieda di inserire N parole. Il programma dovrà:
 * - stampare tutte le parole duplicate
 * - stampare il numero di parole distinte
 * - stampare l'elenco delle parole distinte
 * Utilizza l'interfaccia Set e l'implementazione HashSet
 */



import java.util.HashSet;
import java.util.Scanner;

public class Esercizio_1 {

    public static void Primo() {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Inserisci il numero di parole che vuoi inserire : ");
        int N = scanner.nextInt();
        scanner.nextLine();

        HashSet<String> parole = new HashSet<String>();

        for (int i = 0; i < N; i++) {

            System.out.print("\nInserisci una parola : ");
            String parola = scanner.nextLine();

            if (parole.contains(parola)) {
                System.out.println("La parola è gia presente nel Set :");
                System.out.print(parola + "\n");
            }
            parole.add(parola);
        }

        System.out.println("Le parole presenti nel set sono : ");
        System.out.println(parole);

        scanner.close();
    }

    public static void main(String[] args) {
        Primo();
    }

}
