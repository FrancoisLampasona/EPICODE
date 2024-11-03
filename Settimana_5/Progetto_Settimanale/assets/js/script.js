window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const trendingContent = document.getElementById("trending");
  const button = document.getElementById("bottone");

  const headerHeight = header.offsetHeight;
  const contentTop = trendingContent.getBoundingClientRect().top;

  if (contentTop <= headerHeight) {
    header.classList.add("scrolled");
    button.classList.add("bottone_cambiato");
  } else {
    header.classList.remove("scrolled");
    button.classList.remove("bottone_cambiato");
  }
});

const generaArrayCasuale = (elementi, quantita) => {
  let arrayCasuale = [];
  for (let i = 0; i < quantita; i++) {
    const indiceCasuale = Math.floor(Math.random() * elementi.length);
    arrayCasuale.push(elementi[indiceCasuale]);
  }
  return arrayCasuale;
};

window.addEventListener("load", function () {
  const elementi = document.querySelectorAll("g[stroke-linecap=butt]");
  setInterval(() => {
    const indiceCasuale = Math.floor(Math.random() * elementi.length);
    const elemento = elementi[indiceCasuale];
    const opacity = elemento.getAttribute("opacity") === "1" ? "0" : "1";
    elemento.setAttribute("opacity", opacity);
  }, 100);
});
