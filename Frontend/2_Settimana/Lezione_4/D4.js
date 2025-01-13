/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

let base = 5;
let altezza = 8;

const area = function (l1, l2) {
  console.log(`L'area del rettangolo è ${l1 * l2}`);
};

area(base, altezza);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

let x = 400;
let y = 2;

const crazySum = function (x, y) {
  if (x == y) {
    return (x + y) * 3;
  } else {
    return x + y;
  }
};

console.log(`La somma è ${crazySum(x, y)}`);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const crazyDiff = function (x) {
  if (x > 19) {
    return Math.abs(x - 19) * 3;
  } else {
    return Math.abs(x - 19);
  }
};

console.log(`La differenza assoluta è ${crazyDiff(x)}`);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const boundary = function (n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return console.log(true);
  } else {
    return console.log(false);
  }
};

boundary(x);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

let stringa = "HelloWorld!";

const epify = function (stringa) {
  if (stringa.search("EPICODE") === -1) {
    stringa = "EPICODE" + stringa;
    return stringa;
  } else if (stringa.search("EPICODE") === 0) {
    return stringa;
  }
};

console.log(epify(stringa));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = function (x) {
  if (x % 3 === 0 || x % 7 === 0) {
    console.log(`Il numero ${x} è multiplo di 3 o di 7`);
  } else {
    console.log(`Il numero ${x} non è multiplo di 3 o di 7`);
  }
};

check3and7(x);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

const reverseString = function (stringa) {
  let tmp = "";

  for (let i = stringa.length - 1; i >= 0; i--) {
    tmp += stringa[i];
  }

  return tmp;
};

console.log(reverseString(stringa));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

let stringa_more_word = "cane gatto casa";

const upperFirst = function (stringa_more_word) {
  let result = "";

  for (let i = 0; i < stringa_more_word.length; i++) {
    if (i === 0 || stringa_more_word[i - 1] === " ") {
      result += stringa_more_word[i].toUpperCase();
    } else {
      result += stringa_more_word[i];
    }
  }

  console.log(result);
};

upperFirst(stringa_more_word);

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

const cutString = function (stringa_more_word) {
  return stringa_more_word.slice(1, -1);
};

console.log(`La stringa è "${cutString(stringa_more_word)}"`);

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

let n = 10;

const giveMeRandom = function (n) {
  let array = [];
  for (let i = 0; i < n; i++) {
    array.push(Math.floor(Math.random() * 11));
  }
  return array;
};

console.log(giveMeRandom(n));
