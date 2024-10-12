// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

let array = [];

let n = 10;

const giveMeRandom = function (n) {
  let array = [];
  for (let i = 0; i < n; i++) {
    array.push(Math.floor(Math.random() * 11));
  }
  return array;
};

array = giveMeRandom(n);

const checkArray = function (array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 5) {
      sum += array[i];
      console.log(`L'elemento ${array[i]} è maggiore di 5`);
    }
  }
  return sum;
};

console.log(checkArray(array));

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

const shoppingCart = [
  { price: 10.99, name: "Articolo 1", id: 1, quantity: 2 },
  { price: 5.49, name: "Articolo 2", id: 2, quantity: 1 },
  { price: 15.0, name: "Articolo 3", id: 3, quantity: 3 },
];

const shoppingCartTotal = function (cart) {
  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    total += item.price * item.quantity;
  }

  return total;
};

const totaleDovuto = shoppingCartTotal(shoppingCart);
console.log(`Totale dovuto: €${totaleDovuto.toFixed(2)}`);

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

function isNotSpam(emailContent) {
  const upperCaseContent = emailContent.toUpperCase();

  if (upperCaseContent.includes("SPAM") || upperCaseContent.includes("SCAM")) {
    return false;
  }

  return true;
}

console.log(isNotSpam("This is a legitimate email."));
console.log(isNotSpam("Beware, this might be a SCAM."));
console.log(isNotSpam("SPAM ALERT: Special offer!"));

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

function daysSince(date) {
  const today = new Date();

  const pastDate = new Date(date);

  const differenceInTime = today - pastDate;

  const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));

  return differenceInDays;
}

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

let x = 3;
let y = 2;

const matrixGenerator = function (x, y) {
  let matrix = [];
  for (let i = 0; i < y; i++) {
    for (let k = 0; k < x; k++) {
      let element = String(i) + String(k);
      matrix.push(element);
    }
  }
  return matrix;
};

console.log(matrixGenerator(x, y));
