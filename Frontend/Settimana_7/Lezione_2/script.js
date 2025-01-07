const input = document.getElementById("name");
const nomeIniziale = document.getElementsByTagName("h1")[1];
const buttons = document.getElementsByTagName("button");

class Persona {
  constructor(name) {
    this.name = name;
  }
}

buttons[0].addEventListener("click", (e) => {
  e.preventDefault();

  const nome = input.value;

  if (nome) {
    const persona = new Persona(nome);

    console.log(persona.name);

    localStorage.setItem(`Persona`, JSON.stringify(persona));

    nomeIniziale.textContent = `Ciao, ${persona.name}!`;
  } else {
    alert("Inserisci un nome !");
  }
});

buttons[1].addEventListener("click", (e) => {
  e.preventDefault();

  const nome = input.value;

  if (nome) {
    const persona = new Persona(nome);

    console.log(persona.name);

    localStorage.removeItem(`Persona`, JSON.stringify(persona));

    nomeIniziale.textContent = `Arrivederci, ${persona.name}!`;
  } else {
    alert("Inserisci un nome !");
  }
});

let secondi = 0;

sessionStorage.getItem("tempo") > 0
  ? (secondi = sessionStorage.getItem("tempo"))
  : (secondi = 0);

const html_timer = document.getElementById("timer");

const timer = setInterval(() => {
  secondi++;
  let conserva_secondi = sessionStorage.setItem(
    "tempo",
    JSON.stringify(secondi)
  );
  html_timer.innerHTML = `TIMER : ${secondi}`;
  console.log(`Secondi passati: ${secondi}`);
}, 1000);
