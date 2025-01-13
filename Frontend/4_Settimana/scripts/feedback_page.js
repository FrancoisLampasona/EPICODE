const review = document.querySelectorAll(".star");
review.forEach((star, index1) => {
  star.addEventListener("click", () => {
    review.forEach((star, index2) => {
      const icone = star.querySelector("i");
      if (index2 <= index1) {
        icone.classList.add("attiva");
      } else {
        icone.classList.remove("attiva");
      }
    });
  });
});

const form = document.getElementById("button");

const selectedDifficulty = JSON.parse(
  localStorage.getItem("selectedDifficulty")
);

const classe_martino = document.getElementsByClassName("martino");
classe_martino[2].style.display = "none";

if (selectedDifficulty === "hard") {
  const classe_martino = document.getElementsByClassName("martino");
  classe_martino[0].innerText = "PARLA CON MARTINO LUI ASCOLTA...";
  classe_martino[1].innerText =
    "DIVENTA COME LUI ! NESSUNO TI FA SENTIRE CULLATO COME LUI !";
  classe_martino[2].style.display = "inline";
  classe_martino[3].innerText =
    "Metti una stella per il tuo ' PIU' CHE AMICO ' Martino";
  classe_martino[4].innerText =
    "Scrivi un messaggio a Martino ti rispondera al più presto !";
  classe_martino[5].setAttribute(
    "placeholder",
    "Raccontaci di te e lui. Io e Martino..."
  );
  classe_martino[6].innerText = "Go Martino !";
}

form.addEventListener("click", (event) => {
  event.preventDefault();
  setTimeout(function () {
    window.location.href = "./welcome_page.html";
  }, 500);
});
