const URL_API = "https://striveschool-api.herokuapp.com/api/product/";

const API_KEY = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MDM1ZThhZDEyOTAwMTU4NzZiYmQiLCJpYXQiOjE3MzE2NTg1OTAsImV4cCI6MTczMjg2ODE5MH0.Q9JBMKRSWjPTmhAPhxNwLcdyH0ZsX-roNsHiBLuRJ78",
  "Content-Type": "application/json",
};

const row_card = document.getElementsByClassName("row");

if (row_card.length === 0) {
  console.error("Elemento con classe 'row' non trovato.");
} else {
  row_card[0].innerHTML = `
    <div class="d-flex justify-content-center my-4">
      <div class="spinner-border text-primary" role="status" style="width: 3rem; height: 3rem;">
        <span class="visually-hidden">Caricamento...</span>
      </div>
    </div>
  `;

  fetch(URL_API, {
    method: "GET",
    headers: API_KEY,
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Non è stato possibile trovare i dati");
      }
    })
    .then((data) => {
      if (data.length > 0) {
        row_card[0].innerHTML = "";
        data.forEach((element) => {
          VisualCard(element);
        });
      } else {
        row_card[0].innerHTML = `
          <h1 class="text-center my-4">NON CI SONO ELEMENTI DISPONIBILI!</h1>
        `;
      }
    })
    .catch((error) => {
      console.error("Errore:", error);
      row_card[0].innerHTML = `
        <h1 class="text-center text-danger my-4">Errore nel caricamento dei dati!</h1>
      `;
    });
}

const VisualCard = function (element) {
  const cardHTML = `
  <div id="CARD-ID-${element.name}" class="col-12 col-md-6 col-lg-4 col-xl-3">
    <div class="card mb-5" style="width: 18rem">
      <div class="text-center d-flex flex-column align-items-center">
         <img
          src="${element.imageUrl || "./assets/img/Orange Juice SVG.svg"}"
          class="card-img-top"
          alt=""
        />
      </div>
      <div class="card-body">
        <h5 class="card-title">Prodotto: ${element.name}</h5>
        <p class="card-text">Descrizione: ${element.description}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Brand: ${element.brand}</li>
        <li class="list-group-item">Price: ${element.price} €
        <button
            style="margin-left:85px;"
            id="section-creazione"
            type="button"
            onclick='AddToCart("${element.name}", "${element.price}")'
            class="btn btn-outline-warning"
          >
            Acquista
          </button>
        </li>
      </ul>
    </div>
  </div>
`;

  row_card[0].innerHTML += cardHTML;
};

let totale_cart = 0;
const bottone_pagamento = document.getElementById("bottone-pagamento");
const list_group = document.getElementById("list-carrello");
const totale_shop = document.getElementById("totale");
bottone_pagamento.style.visibility = "hidden";

if (totale_cart <= 0) {
  const nessun_prodotto = document.createElement("li");
  nessun_prodotto.id = "vuoto";
  nessun_prodotto.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  nessun_prodotto.innerText = "Non ci sono prodotti nel carrello !";
  list_group.appendChild(nessun_prodotto);
}

const AddToCart = function (nome, prezzo) {
  const listItem = document.createElement("li");
  listItem.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  listItem.innerHTML = `${nome} <span class="badge bg-primary rounded-pill">€ ${prezzo}</span>`;
  list_group.appendChild(listItem);

  totale_cart += Number(prezzo);
  console.log(totale_cart);

  if (totale_cart > 0) {
    const vuoto = document.getElementById("vuoto");
    if (vuoto) vuoto.remove();
    bottone_pagamento.style.visibility = "visible";
  }

  totale_shop.innerHTML = `Totale: € ${totale_cart.toFixed(2)}`;
};
