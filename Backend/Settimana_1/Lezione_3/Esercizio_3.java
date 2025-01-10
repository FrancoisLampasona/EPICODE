/*
 * Esercizio #3 
 * Scrivere un'applicazione che simula il funzionamento di un e-commerce.
 * Si devono quindi rappresentare i dati relativi i seguenti elementi :
 * Articolo : "Codice Articolo , Descrizione Articolo , Prezzo, Numero pezzi disponibili a magazino"
 * Cliente : "Codice Cliente , Nome e Cognome, Email, Data Iscrizione"
 * Carrello : "Cliente associato, elenco articoli (Articolo[]), totale costo Articoli"
 */

package Lezione_3;


class Articolo{
    private int codiceArticolo;
    private String descrizioneArticolo;
    private double prezzoArticolo;
    private int numeroPezziDisponibili; 

}

class Cliente {

    private int codiceCliente;
    private String nome;
    private String cognome;
    private String email;
    private String dataIscrizione;

}

class Carrello {
    private Cliente clienteAssociato;
    private Articolo [] listaArticoli;
    private int costoTotale;

}



public class Esercizio_3 {
    
}
