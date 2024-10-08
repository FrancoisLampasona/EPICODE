/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let num1 = 10;
let num2 = 20;
if (num1 > num2) {
  console.log(num1 + " è maggiore di " + num2);
} else if (num1 < num2) {
  console.log(num2 + " è maggiore di " + num1);
} else {
  console.log("I numeri sono uguali");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let number = 3;
if (number !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5.
*/

let num = 25;
if (num % 5 === 0) {
  console.log("divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let a = 5;
let b = 3;
if (a === 8 || b === 8 || a + b === 8 || Math.abs(a - b) === 8) {
  console.log("Una delle condizioni è verificata");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 60;
let shippingCost = totalShoppingCart > 50 ? 0 : 10;
let totalToPay = totalShoppingCart + shippingCost;
console.log("Totale da pagare: " + totalToPay);

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let blackFridayDiscount = 0.2;
totalShoppingCart = totalShoppingCart - totalShoppingCart * blackFridayDiscount;
shippingCost = totalShoppingCart > 50 ? 0 : 10;
totalToPay = totalShoppingCart + shippingCost;
console.log("Totale da pagare con sconto Black Friday: " + totalToPay);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let x = 15,
  y = 10,
  z = 25;
if (x >= y && x >= z) {
  if (y >= z) {
    console.log(x, y, z);
  } else {
    console.log(x, z, y);
  }
} else if (y >= x && y >= z) {
  if (x >= z) {
    console.log(y, x, z);
  } else {
    console.log(y, z, x);
  }
} else {
  if (x >= y) {
    console.log(z, x, y);
  } else {
    console.log(z, y, x);
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let value = "hello";
if (typeof value === "number") {
  console.log(value + " è un numero");
} else {
  console.log(value + " non è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let checkNum = 4;
if (checkNum % 2 === 0) {
  console.log(checkNum + " è pari");
} else {
  console.log(checkNum + " è dispari");
}

/* ESERCIZIO 10
  Correggi l'algoritmo per mostrare il messaggio corretto.
*/

let val = 7;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let numbersArray = [];
for (let i = 1; i <= 10; i++) {
  numbersArray.push(i);
}
console.log(numbersArray);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

numbersArray[numbersArray.length - 1] = 100;
console.log(numbersArray);
