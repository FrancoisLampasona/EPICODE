// 1) Quali sono i tipi primitivi principali in TypeScript?

// String , Any , Undefined , Number , Boolean , Null

// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.

const Nome: string = "Francois";
const Numero: number = 24;
const Età: number = 24;

// 3) Tipizza il parametro della seguente funzione: const greet = (name) => {  return "Ciao " + name }

const greet = (name: string) => {
  return "Ciao" + name;
};

console.log(greet("Stefano"));

// 4) Specifica il tipo di ritorno della seguente funzione: const sum = (a: number, b: number) => {  return a + b }

const sum = (a: number, b: number): number => {
  return a + b;
};

// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.

let prezzo: number = 5000;
const iva: number = 0.22;

prezzo = prezzo * 0.22 + prezzo;

// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.

const stringa1: string = "ciao";
const stringa2: string = "comeva?";

const concatena = (stringa1: string, stringa2: string): number => {
  const risultato = stringa1 + stringa2;
  return risultato.length;
};

const lunghezzaTotale = concatena(stringa1, stringa2);
console.log(lunghezzaTotale);

// 7) Cos'è un Type Union e come si scrive?

let variabile: string | number;
let dato: string | number;
dato = "ciao"; // Valido
dato = 42; // Valido
// dato = true; // Errore: il tipo 'boolean' non è assegnabile a 'string | number'.

// 8) Crea una variabile che possa contenere un numero, null o undefined.

let variabile2: string | number | null | undefined;

// 9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.

type GiorniDellaSettimana =
  | "Lunedì"
  | "Martedì"
  | "Mercoledì"
  | "Giovedì"
  | "Venerdì"
  | "Sabato"
  | "Domenica";

const oggi: GiorniDellaSettimana = "Lunedì";

// 10) Tipizza il seguente array di numeri nei due modi possibili: const numbers = [1, 2, 3]

const numbers: Array<number> = [1, 2, 3];

// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.

// Definizione della tupla
type MyTuple = [string, string, string, number, number];

// Uso della tupla
const array: MyTuple = ["uno", "due", "tre", 4, 5]; // Valido
// const arrayNonValido: MyTuple = ["uno", "due", 3, 4, 5]; // Errore: il terzo elemento non è una stringa

// 12) Qual è la differenza tra type e interface?

type StringOrNumber = string | number;
type Persona1 = {
  nome: string;
  età: number;
};

interface Persona2 {
  nome: string;
  età: number;
}

// 13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".

interface Persona3 {
  firstname: string;
  lastname: number;
  age: number;
}

// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.

interface Utente {
  email: string;
  telefono?: string;
}

// const utente1: Utente = { email: "test@example.com" };
// const utente2: Utente = { email: "test@example.com", telefono: "123456789" };

// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.

type Studente = {
  nome: string;
  voto: number;
};

const studenti: Studente[] = [
  { nome: "Mario", voto: 28 },
  { nome: "Lucia", voto: 30 },
];

// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".

interface Veicolo {
  marca: string;
  modello: string;
}

interface Auto extends Veicolo {
  numeroPorte: number;
}

// 17) Crea un oggetto che implementi l'interfaccia Auto.

const miaAuto: Auto = {
  marca: "Toyota",
  modello: "Corolla",
  numeroPorte: 4,
};

// 18) Cosa sono i Generics in TypeScript?

function identity<T>(value: T): T {
  return value;
}

const numero = identity<number>(10);
const testo = identity<string>("Hello");

// 19) È possibile avere più tipi generici in un'interfaccia?

interface Coppia<T, U> {
  primo: T;
  secondo: U;
}

const coppia: Coppia<string, number> = { primo: "Hello", secondo: 42 };

// 20) Crea un'interfaccia generica per una risposta API.

interface ApiResponse<T> {
  data: T;
  success: boolean;
  error?: string; 
}


interface Utente {
  id: number;
  nome: string;
}

// const risposta: ApiResponse<Utente> = {
//   data: { id: 1, nome: "Mario" },
//   success: true,
// };
