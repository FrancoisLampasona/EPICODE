const URL_API = "https://striveschool-api.herokuapp.com/api/product/";

const API_KEY = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MDM1ZThhZDEyOTAwMTU4NzZiYmQiLCJpYXQiOjE3MzE2NTg1OTAsImV4cCI6MTczMjg2ODE5MH0.Q9JBMKRSWjPTmhAPhxNwLcdyH0ZsX-roNsHiBLuRJ78",
  "Content-Type": "application/json",
};

class Prodotto {
  constructor(name, description, brand, imageUrl, price) {
    this.name = name;
    this.description = description;
    this.brand = brand;
    this.imageUrl = imageUrl;
    this.price = price;
  }
}

const selection_option = document.querySelectorAll("section");

selection_option.forEach((element, index) => {
  if (index > 0) element.classList.add("d-none");
});

const selection_button = document.querySelectorAll("section button");

selection_button[0].addEventListener("click", () => {
  selection_option[1].classList.remove("d-none");
  selection_option[2].classList.add("d-none");
});

selection_button[1].addEventListener("click", () => {
  selection_option[2].classList.remove("d-none");
  selection_option[1].classList.add("d-none");
});

let indexCard = 1;

const CreateCard = function () {
  const row_card = document.getElementsByClassName("row");
  row_card[2].innerHTML += `
  <div id = "CARD-ID-${indexCard}" class="col-12 col-md-6 col-lg-4 col-xl-3">
   <div class="card mb-5" style="width: 18rem">
          <div class="text-center d-flex flex-column align-items-center">
             <img
              id = "IMG-${indexCard}"
              src="./assets/img/Orange Juice SVG.svg"
              class="card-img-top"
              alt="New_Bevanda"
            />
            <button class="btn btn-outline-success w-50 my-2" onclick="AlbumAPI(${indexCard})">
              Aggiungi IMG
            </button>
          </div>
          <div class="card-body">
            <h5 class="card-title">
              <input
                id="Nome-${indexCard}"
                type="text"
                class="form-control"
                placeholder="Nome Prodotto"
              />
            </h5>
            <p class="card-text">
              <input
                id="Descrizione-${indexCard}"
                type="text"
                class="form-control"
                placeholder="Descrizione Prodotto"
              />
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <input
                id="Brand-${indexCard}"
                type="text"
                class="form-control"
                placeholder="Brand"
              />
            </li>
            <li class="list-group-item">
              <input
                id="Price-${indexCard}"
                type="number"
                class="form-control"
                placeholder="Price"
              />
            </li>
          </ul>
          <div class="card-body text-center">
            <button class="btn btn-outline-success" onclick="PushProduct(${indexCard})">Aggiungi</button>
            <button class="btn btn-outline-danger" onclick="RemoveCard()">Cancella</button>
          </div>
        </div>
        </div>`;
  indexCard++;
  console.log(indexCard);
};

const PushProduct = function (index) {
  let New_Product = new Prodotto(
    document.getElementById(`Nome-${index}`).value,
    document.getElementById(`Descrizione-${index}`).value,
    document.getElementById(`Brand-${index}`).value,
    document.getElementById(`IMG-${index}`).getAttribute("src"),
    document.getElementById(`Price-${index}`).value
  );

  fetch(URL_API, {
    method: "POST",
    headers: API_KEY,
    body: JSON.stringify(New_Product),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    })
    .then((data) => {
      alert("Prodotto inserito corretamente!");
      console.log("Risposta dal server:", data);
    })
    .catch((error) => {
      console.error("Si è verificato un errore:", error);
    });
};

const RemoveCard = function () {
  if (indexCard > 0) {
    console.log(indexCard);
    const card_da_rimuovere = document.getElementById(
      `CARD-ID-${indexCard - 1}`
    );
    card_da_rimuovere.remove();
    indexCard--;
  } else {
    console.log("Non ci sono Card prodotti");
  }
};

const row_card = document.getElementById("Modifica-Prodotto");

const ModificaProdotti = function () {
  console.log(row_card);

  row_card.innerHTML = `
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
        console.log("Prodotti trovati:", data);
        row_card.innerHTML = "";
        data.forEach((element) => {
          ModifyCard(element);
        });
      } else {
        row_card.innerHTML = `
          <h1 class="text-center my-4">NON CI SONO ELEMENTI DISPONIBILI!</h1>
        `;
      }
    })
    .catch((error) => {
      console.error("Errore:", error);
      row_card.innerHTML = `
        <h1 class="text-center text-danger my-4">Errore nel caricamento dei dati!</h1>
      `;
    });
};

const ModifyCard = function (element) {
  const cardHTML = `
    <div id="CARD-ID-${element._id}" class="col-12 col-md-6 col-lg-4 col-xl-3">
      <div class="card mb-5" style="width: 18rem">
        <div class="text-center d-flex flex-column align-items-center">
          <img
            id = "IMG-${element._id}"
            src="${element.imageUrl || "./assets/img/Orange Juice SVG.svg"}"
            class="card-img-top"
            alt=""
          />
        <button class="btn btn-outline-success w-75 my-2" onclick="AlbumAPI('${
          element.imageUrl || ""
        }', '${element._id}')">
            Cambia Immagine
         </button>
        </div>
        <div class="card-body">
          <h5 class="card-title">
            Nome: <input
              id="Name-${element._id}"
              type="text"
              class="form-control"
              value="${element.name}"
            />
          </h5>
          <p class="card-text">
            Descrizione: <input
              id="Description-${element._id}"
              type="text"
              class="form-control"
              value="${element.description}"
            />
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            Brand: <input
              id="Brand-${element._id}"
              type="text"
              class="form-control"
              value="${element.brand}"
            />
          </li>
          <li class="list-group-item">
            Prezzo: <input
              id="Price-${element._id}"
              type="number"
              class="form-control"
              value="${element.price}"
            />
          </li>
        </ul>
        <div class="card-body text-center">
          <button class="btn btn-outline-success" onclick="SaveChanges('${
            element._id
          }')">Salva</button>
          <button class="btn btn-outline-danger" onclick="DeleteProduct('${
            element._id
          }')">Elimina</button>
        </div>
      </div>
    </div>
  `;

  row_card.innerHTML += cardHTML;
};

const SaveChanges = function (id) {
  let updatedProduct = new Prodotto(
    document.getElementById(`Name-${id}`).value,
    document.getElementById(`Description-${id}`).value,
    document.getElementById(`Brand-${id}`).value,
    parseFloat(document.getElementById(`Price-${id}`).value)
  );

  fetch(`${URL_API}${id}`, {
    method: "PUT",
    headers: API_KEY,
    body: JSON.stringify(updatedProduct),
  })
    .then((response) => {
      if (response.ok) {
        alert("Prodotto aggiornato con successo!");
      } else {
        throw new Error("Errore nell'aggiornamento del prodotto.");
      }
    })
    .catch((error) => {
      console.error("Errore:", error);
    });
};

const DeleteProduct = function (id) {
  fetch(`${URL_API}${id}`, {
    method: "DELETE",
    headers: API_KEY,
  })
    .then((response) => {
      if (response.ok) {
        alert("Prodotto eliminato!");
        document.getElementById(`CARD-ID-${id}`).remove();
      } else {
        throw new Error("Errore nell'eliminazione del prodotto.");
      }
    })
    .catch((error) => {
      console.error("Errore:", error);
    });
};

const API_IMAGE_KEY =
  "dvVOZ9Pa1H3GM0mJcBfQUA8ukrp2DVD82hmIpvyP1kyGo2nxYXG1FBXH";

const tipologia = "OrangeJuice";

const AlbumAPI = function (index, modify) {
  fetch(`https://api.pexels.com/v1/search?query=${tipologia}&per_page=19`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: API_IMAGE_KEY,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Non è stato possibile trovare i dati");
      }
    })
    .then((data) => {
      console.log(modify);
      console.log(data);
      const randomIndex = Math.floor(Math.random() * data.photos.length);
      const randomElement = data.photos[randomIndex];
      if (modify) {
        const img_change = document.getElementById(`IMG-${modify}`);
        img_change.setAttribute("src", `${randomElement.src.portrait}`);
      } else {
        const img_change = document.getElementById(`IMG-${index}`);
        img_change.setAttribute("src", `${randomElement.src.portrait}`);
      }
    })
    .catch((error) => {
      console.error("Errore:", error);
    });
};
