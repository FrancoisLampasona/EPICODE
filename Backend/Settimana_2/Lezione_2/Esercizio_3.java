package Backend.Settimana_2.Lezione_2;

import java.util.HashMap;

/*
 * Esercizio #3
 * Scrivere una classe Java che permetta di gestire una rubrica telefonica. La
 * lista dei contatti
 * è realizzata mediante un HashMap in cui le chiavi sono i nomi delle persone e
 * i valori sono i
 * numeri di telefono. Realizzare i metodi per :
 * 1. L'inserimento di una coppia <Nome , telefono>
 * 2. La cancellazione di una coppia <Nome , telefono> a partire dal nome
 * 3. La ricerca di una Persona di cui si conosce il numero di telefono
 * 4. La ricerca del numero di telefono di una persona di cui si conosce il nome
 * 5. La stampa di tutti i contatti con nome e numero.
 */

public class Esercizio_3 {

    public static void main(String[] args) {

        HashMap<String, String> persone = new HashMap<String, String>();

        aggiungi_elemento("Francois", "12345", persone);
        aggiungi_elemento("Niccolò", "6789", persone);
        aggiungi_elemento("MartinoSempreBello", "2345", persone);
        aggiungi_elemento("Tommaso", "56785", persone);

        System.out.println("Eliminato l'elemento tramite nome : 'Francois'");
        elimina_tramite_nome("Francois", persone);

        System.out.println("Ricerca tramite il numero '6789' : ");
        ricerca_persona_tramite_numero("6789", persone);

        System.out.println("Ricerca tramite nome 'MartinoSempreBello' : ");
        ricerca_persona_tramite_nome("MartinoSempreBello", persone);

        System.out.println("Lista Chiavi / Valore : \n");
        stampa_tutti_i_contatti(persone);

    }

    public static void aggiungi_elemento(String Nome, String Telefono, HashMap<String, String> persone) {
        persone.put(Nome, Telefono);
    }

    public static void elimina_tramite_nome(String nome_da_eliminare, HashMap<String, String> persone) {
        if (persone.containsKey(nome_da_eliminare)) {
            persone.remove(nome_da_eliminare);
        }
    }

    public static void ricerca_persona_tramite_numero(String num_tel, HashMap<String, String> persone) {

        for (String nome : persone.keySet()) {
            if (persone.get(nome).equals(num_tel)) {
                System.out.println("Il numero di telefono appartiene a: " + nome + "\n");
            }
        }
    }

    public static void ricerca_persona_tramite_nome(String nome, HashMap<String, String> persone) {
        System.out.println("Il numero di telefono di " + nome + " e' = " + persone.get(nome) + '\n');
    }

    public static void stampa_tutti_i_contatti(HashMap<String, String> persone) {

        for (String nome : persone.keySet()) {
            System.out.println("Nome: " + "'" + nome + "'" + " \nNumero di telefono: " + persone.get(nome) + "\n");
        }

    }

}