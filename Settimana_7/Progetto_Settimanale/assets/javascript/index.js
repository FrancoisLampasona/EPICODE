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
          <li class="list-group-item">Price: ${element.price} $</li>
        </ul>
      </div>
    </div>
  `;

  row_card[0].innerHTML += cardHTML;
};
