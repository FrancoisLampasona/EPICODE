document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("checkbox");

  const bottone = document.getElementById("bottone");

  const bottone_2 = document.getElementById("bottone_2");

  const modal = document.getElementById("difficulty-modal");

  const closeModal = document.getElementById("close-modal");

  const options = document.querySelectorAll(".option");

  const video = document.getElementById("video_stupido");

  const row = document.getElementById("riga");

  const spostamento_meme = document.getElementById("spostamento_meme");

  video.style.display = "none";

  let selectedDifficulty = null;

  function updateProceedButton() {
    if (checkbox.checked && selectedDifficulty) {
      bottone.classList.remove("spento");
      bottone.removeAttribute("disabled");
      bottone.classList.add("acceso");
    } else {
      bottone.classList.add("spento");
    }
  }

  checkbox.addEventListener("change", function () {
    updateProceedButton();
  });

  bottone_2.addEventListener("click", function () {
    modal.classList.remove("hidden");
  });

  closeModal.addEventListener("click", function () {
    modal.classList.add("hidden");
  });

  options.forEach((option) => {
    option.addEventListener("click", function () {
      selectedDifficulty = this.getAttribute("data-difficulty");
      console.log("Difficoltà scelta:", selectedDifficulty);
      modal.classList.add("hidden");

      if (selectedDifficulty === "easy") {
        bottone_2.innerText = "Valter - Easy";
      } else if (selectedDifficulty === "medium") {
        bottone_2.innerText = "Franzu - Medium";
      } else if (selectedDifficulty === "hard") {
        bottone_2.innerText = "Martino - Hard";
      }
      updateProceedButton();
    });
  });

  console.log(selectedDifficulty);

  bottone.addEventListener("click", function () {
    if (checkbox.checked && selectedDifficulty) {
      localStorage.setItem(
        "selectedDifficulty",
        JSON.stringify(selectedDifficulty)
      );
      setTimeout(function () {
        window.location.href = "./benchmark_page.html";
      }, 100);
    } else if (!checkbox.checked && !selectedDifficulty) {
      alert("Seleziona una difficoltà e spunta la checkbox");
      video.style.display = "block";
      spostamento_meme.style.marginBottom = "50px";
      row.style.marginLeft = "11%";
    } else if (!selectedDifficulty && checkbox.checked) {
      alert("Seleziona una difficoltà se vuoi giocare con Martino !!");
    } else if (selectedDifficulty && !checkbox.checked) {
      alert("Metti una x sulla CheckBox fallo per i futuri figli di Martino !");
      video.style.display = "block";
      spostamento_meme.style.marginBottom = "50px";
      row.style.marginLeft = "11%";
    }
  });
});
