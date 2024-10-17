let array_numeri = [];

for (let i = 1; i <= 76; i++) {
  array_numeri.push(i);
}

document.addEventListener("DOMContentLoaded", function () {
  let tabella_section = document.getElementById("tabella-section");
  let i = 0;

  let create_riga_table = function () {
    let riga = document.createElement("div");
    riga.classList.add("riga");

    for (let j = 0; j < 19 && i < array_numeri.length; j++, i++) {
      let cella = document.createElement("div");
      cella.classList.add("cella");
      cella.textContent = array_numeri[i];
      cella.id = `numero-${array_numeri[i]}`; 
      riga.appendChild(cella);
    }

    tabella_section.appendChild(riga);
  };

  for (let j = 0; j < 4; j++) {
    create_riga_table();
  }
});

const button_section = document.getElementById("button-section");
const generateButton = document.getElementById("generate-number");
let array_numeri_usciti = [];

generateButton.addEventListener("click", function () {
  if (array_numeri_usciti.length === array_numeri.length) {
    console.log("Tutti i numeri sono stati generati!");
    return;
  }

  let randomNumber;
  let randomIndex = Math.floor(Math.random() * array_numeri.length);
  randomNumber = array_numeri[randomIndex];

  while (array_numeri_usciti.includes(randomNumber)) {
    randomIndex = Math.floor(Math.random() * array_numeri.length);
    randomNumber = array_numeri[randomIndex];
  }

  array_numeri_usciti.push(randomNumber);
  console.log(randomNumber);

  const cella = document.getElementById(`numero-${randomNumber}`);
  if (cella) {
    cella.classList.add("rossa");
  }

  if (array_numeri_usciti.length === array_numeri.length) {
    console.log("Tutti i numeri sono stati generati!");
  }
});
