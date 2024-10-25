// DOMANDE EASY
const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++. ",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

// DOMANDE FRANCOIS CULTURA POP

const questionsPopCulture = [
  {
    category: "Pop Culture",
    type: "multiple",
    difficulty: "normal",
    question: 'Qual è il nome del protagonista di "The Legend of Zelda"?',
    correct_answer: "Link",
    incorrect_answers: ["Zelda", "Ganondorf", "Tingle"],
  },
  {
    category: "Pop Culture",
    type: "multiple",
    difficulty: "normal",
    question: "In quale anime appare il personaggio di Goku?",
    correct_answer: "Dragon Ball",
    incorrect_answers: ["Naruto", "One Piece", "Attack on Titan"],
  },
  {
    category: "Pop Culture",
    type: "boolean",
    difficulty: "normal",
    question: "Il Pokémon Pikachu è di tipo acqua.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Pop Culture",
    type: "multiple",
    difficulty: "normal",
    question: 'Qual è il nome del famoso scavenger di tesori in "Tomb Raider"?',
    correct_answer: "Lara Croft",
    incorrect_answers: ["Nathan Drake", "Samus Aran", "Aloy"],
  },
  {
    category: "Pop Culture",
    type: "multiple",
    difficulty: "normal",
    question: "Quale di questi manga è stato scritto da Eiichiro Oda?",
    correct_answer: "One Piece",
    incorrect_answers: ["Naruto", "Attack on Titan", "My Hero Academia"],
  },
  {
    category: "Pop Culture",
    type: "boolean",
    difficulty: "normal",
    question: 'La serie "Friends" è ambientata a Tokyo.',
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Pop Culture",
    type: "multiple",
    difficulty: "normal",
    question:
      'Quale console di gioco è nota per il suo controller a forma di "X"?',
    correct_answer: "Xbox",
    incorrect_answers: ["PlayStation", "Nintendo Switch", "Sega Genesis"],
  },
  {
    category: "Pop Culture",
    type: "multiple",
    difficulty: "normal",
    question: 'Chi è il creatore di "Naruto"?',
    correct_answer: "Masashi Kishimoto",
    incorrect_answers: ["Akira Toriyama", "Eiichiro Oda", "Hajime Isayama"],
  },
  {
    category: "Pop Culture",
    type: "boolean",
    difficulty: "normal",
    question: 'Mario è il personaggio principale di "The Legend of Zelda".',
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Pop Culture",
    type: "multiple",
    difficulty: "normal",
    question: 'Qual è il nome del Drago d’Oro in "Dragon Ball"?',
    correct_answer: "Shenron",
    incorrect_answers: ["Porunga", "Demon King", "Goku"],
  },
  {
    category: "Pop Culture",
    type: "multiple",
    difficulty: "normal",
    question:
      "Quale serie di videogiochi presenta il personaggio di Master Chief?",
    correct_answer: "Halo",
    incorrect_answers: ["Gears of War", "Call of Duty", "Doom"],
  },
  {
    category: "Pop Culture",
    type: "multiple",
    difficulty: "normal",
    question:
      "Qual è il titolo del manga che racconta le avventure di un gruppo di pirati? ",
    correct_answer: "One Piece",
    incorrect_answers: ["Bleach", "Fairy Tail", "Death Note"],
  },
  {
    category: "Pop Culture",
    type: "boolean",
    difficulty: "normal",
    question:
      'In "Attack on Titan", gli umani devono combattere contro i giganti.',
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Pop Culture",
    type: "multiple",
    difficulty: "normal",
    question: 'Qual è il nome della famosa città in "Pokémon"?',
    correct_answer: "Pallet Town",
    incorrect_answers: ["Viridian City", "Cerulean City", "Lavender Town"],
  },
  {
    category: "Pop Culture",
    type: "boolean",
    difficulty: "normal",
    question: "Sonic è un personaggio della Nintendo.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
];

// DOMANDE SU MARTINO :
const questionsHard = [
  {
    category: "People: Martino",
    type: "multiple",
    difficulty: "hard",
    question: "Qual è la citazione preferita di Martino?",
    correct_answer: "Carpe Diem",
    incorrect_answers: [
      "Cogito, ergo sum",
      "Et tu, Brute?",
      "To be or not to be",
    ],
  },
  {
    category: "People: Martino",
    type: "multiple",
    difficulty: "hard",
    question: "Quale lingua straniera Martino vorrebbe imparare?",
    correct_answer: "Giapponese",
    incorrect_answers: ["Francese", "Spagnolo", "Tedesco"],
  },
  {
    category: "People: Martino",
    type: "boolean",
    difficulty: "hard",
    question: "Martino ha scalato una montagna.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "People: Martino",
    type: "multiple",
    difficulty: "hard",
    question: "Qual è il libro che Martino consiglia di leggere?",
    correct_answer: "1984 di George Orwell",
    incorrect_answers: [
      "Il nome della rosa",
      "Il piccolo principe",
      "Don Quijote",
    ],
  },
  {
    category: "People: Martino",
    type: "multiple",
    difficulty: "hard",
    question: "Quale piatto Martino cucina meglio?",
    correct_answer: "Ragù alla bolognese",
    incorrect_answers: ["Lasagna", "Risotto", "Pollo al curry"],
  },
  {
    category: "People: Martino",
    type: "multiple",
    difficulty: "hard",
    question: "Qual è il viaggio dei sogni di Martino?",
    correct_answer: "Giappone",
    incorrect_answers: ["Australia", "Stati Uniti", "Sudafrica"],
  },
  {
    category: "People: Martino",
    type: "boolean",
    difficulty: "hard",
    question: "Martino ha fatto un viaggio in solitaria.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "People: Martino",
    type: "multiple",
    difficulty: "hard",
    question: "Quale attività all’aperto preferisce Martino?",
    correct_answer: "Escursionismo",
    incorrect_answers: ["Ciclismo", "Canoa", "Ski"],
  },
  {
    category: "People: Martino",
    type: "multiple",
    difficulty: "hard",
    question: "Qual è la sua serie TV preferita?",
    correct_answer: "Breaking Bad",
    incorrect_answers: ["Game of Thrones", "Stranger Things", "Friends"],
  },
  {
    category: "People: Martino",
    type: "boolean",
    difficulty: "hard",
    question: "Martino ha mai provato il bungee jumping.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "People: Martino",
    type: "multiple",
    difficulty: "hard",
    question: "Qual è il suo attore preferito?",
    correct_answer: "Leonardo DiCaprio",
    incorrect_answers: ["Brad Pitt", "Johnny Depp", "Tom Hanks"],
  },
  {
    category: "People: Martino",
    type: "multiple",
    difficulty: "hard",
    question: "In quale continente Martino vorrebbe vivere?",
    correct_answer: "Asia",
    incorrect_answers: ["Europa", "America", "Africa"],
  },
  {
    category: "People: Martino",
    type: "boolean",
    difficulty: "hard",
    question: "Martino è allergico ai gatti.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "People: Martino",
    type: "multiple",
    difficulty: "hard",
    question: "Quale app di social media usa più frequentemente Martino?",
    correct_answer: "Instagram",
    incorrect_answers: ["Facebook", "Twitter", "TikTok"],
  },
  {
    category: "People: Martino",
    type: "multiple",
    difficulty: "hard",
    question: "Qual è il suo supereroe preferito?",
    correct_answer: "Spider-Man",
    incorrect_answers: ["Batman", "Iron Man", "Superman"],
  },
  {
    category: "People: Martino",
    type: "boolean",
    difficulty: "hard",
    question: "Martino è un esperto di informatica.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "People: Martino",
    type: "multiple",
    difficulty: "hard",
    question: "Quale dessert Martino ama di più?",
    correct_answer: "Tiramisù",
    incorrect_answers: ["Panna cotta", "Gelato", "Cheesecake"],
  },
  {
    category: "People: Martino",
    type: "boolean",
    difficulty: "normal",
    question: "Martino ha una sorella.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "People: Martino",
    type: "multiple",
    difficulty: "normal",
    question: "Qual è il hobby di Martino?",
    correct_answer: "Stalking",
    incorrect_answers: ["Giardinaggio", "Lettura", "Escursionismo"],
  },
  {
    category: "People: Martino",
    type: "multiple",
    difficulty: "normal",
    question: "Martino è bello ?",
    correct_answer: "Si",
    incorrect_answers: ["No", "No", "No"],
  },
];

const meme = document.getElementById("meme_cage");

const music_appluasi = document.getElementById("applausi");
const music_1 = document.getElementById("franzu");
const music_2 = document.getElementById("martin_music");
const music_3 = document.getElementById("valter");

music_appluasi.pause();

let benchmarkfunction = function (questions, duration) {
  let section_html_domande = document.getElementById("domande");

  let indice = 0;
  let intern_duration = duration;

  let all_correct_answer = [];

  for (let i = 0; i < questions.length; i++) {
    all_correct_answer.push(questions[i].correct_answer);
  }

  let user_answer = [];
  let interval;

  let costruttore_domande = function (indice) {
    // const duration = 15;
    let remainingTime = intern_duration;

    const timerElement = document.getElementById("seconds");
    const circle = document.querySelector(".progress-ring-circle");
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;

    timerElement.textContent = remainingTime;

    function setProgress(percent) {
      const offset = circumference - (percent / 100) * circumference;
      circle.style.strokeDashoffset = offset;
    }

    function startCountdown() {
      clearInterval(interval);
      remainingTime = intern_duration;
      timerElement.textContent = remainingTime;

      setProgress(100);

      interval = setInterval(() => {
        if (remainingTime >= 0) {
          timerElement.textContent = remainingTime;
          const progressPercent = (remainingTime / intern_duration) * 100;
          setProgress(progressPercent);
          remainingTime--;
        } else {
          mostra_risultato();
          user_answer.push(selected_answer);

          if (!selected_answer) {
            selected_answer = "Non risposto";
          }

          setTimeout(() => {
            clearInterval(interval);
            costruttore_domande(indice + 1);
          }, 500);
        }
      }, 1000);
    }

    section_html_domande.innerHTML = "";

    if (indice >= questions.length) {
      clearInterval(interval);
      const finale = document.createElement("h1");
      const container_timer = document.getElementById("container-timer");
      container_timer.innerHTML = "";
      finale.id = "finish";
      finale.textContent = "Hai completato il quiz !";

      let result_button = document.createElement("button");
      result_button.innerText = "VAI AI RISULTATI";
      result_button.id = "result_button";
      meme.style.display = "block";
      section_html_domande.appendChild(finale);
      section_html_domande.appendChild(result_button);
      console.log(user_answer);
      console.log(all_correct_answer);

      music_appluasi.play();

      setTimeout(() => {
        music_1.pause();
        music_2.pause();
        music_3.pause();
      }, 1000);

      result_button.addEventListener("click", () => {
        localStorage.setItem(
          "all_correct_answer",
          JSON.stringify(all_correct_answer)
        );
        localStorage.setItem("user_answer", JSON.stringify(user_answer));
        setTimeout(function () {
          window.location.href = "./result_page.html";
        }, 500);
      });
      return;
    }

    const h1 = document.createElement("h1");
    h1.textContent = `${questions[indice].question}`;
    console.log(h1);
    section_html_domande.appendChild(h1);

    let div_questions = document.createElement("div");
    div_questions.id = "div-questions";

    let all_answers = [
      questions[indice].correct_answer,
      ...questions[indice].incorrect_answers,
    ];

    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    all_answers = shuffle(all_answers);

    let buttons = [];
    let selected_answer = null;

    let deselezione_button = function () {
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("selected_button_domande");
      }
      selected_answer = null;
    };

    for (let j = 0; j < all_answers.length; j++) {
      let button = document.createElement("button");
      button.classList.add("button_domande");
      button.textContent = all_answers[j];
      button.addEventListener("click", () => {
        deselezione_button();
        button.classList.add("selected_button_domande");
        selected_answer = all_answers[j];
      });
      buttons.push(button);
      div_questions.appendChild(button);
    }

    section_html_domande.appendChild(div_questions);

    const next_button = document.createElement("button");
    next_button.id = "next_button";
    next_button.textContent = "NEXT";

    next_button.addEventListener(
      "click",
      () => {
        mostra_risultato();
        user_answer.push(selected_answer);
        setTimeout(() => {
          clearInterval(interval);
          costruttore_domande(indice + 1);
        }, 1000);
      },
      { once: true }
    );

    section_html_domande.appendChild(next_button);

    const paragraph_questions = document.createElement("p");
    const span_questions = document.createElement("span");

    span_questions.id = "span_questions";
    span_questions.innerText = questions.length;

    paragraph_questions.innerHTML = `QUESTION  ${indice + 1}  / `;
    paragraph_questions.appendChild(span_questions);
    section_html_domande.appendChild(paragraph_questions);

    startCountdown();

    let mostra_risultato = function () {
      if (selected_answer === all_correct_answer[indice]) {
        const selected_button = buttons.find(
          (btn) => btn.textContent === selected_answer
        );
        selected_button.style.color = "green";
      } else {
        const selected_button = buttons.find(
          (btn) => btn.textContent === selected_answer
        );
        if (selected_button) {
          selected_button.style.color = "red";
        }
        const correctButton = buttons.find(
          (btn) => btn.textContent === all_correct_answer[indice]
        );
        if (correctButton) {
          correctButton.style.color = "green";
          correctButton.style.fontWeight = "bold";
        }
      }
    };
  };

  costruttore_domande(indice, duration);
};

const selectedDifficulty = JSON.parse(
  localStorage.getItem("selectedDifficulty")
);

console.log(selectedDifficulty);

if (selectedDifficulty == "easy") {
  const duration = 15;

  music_1.pause();
  music_2.pause();

  benchmarkfunction(questions, duration);
} else if (selectedDifficulty === "medium") {
  const duration = 20;

  music_2.pause();
  music_3.pause();

  benchmarkfunction(questionsPopCulture, duration);
} else {
  const duration = 25;

  music_1.pause();
  music_3.pause();

  benchmarkfunction(questionsHard, duration);
}
