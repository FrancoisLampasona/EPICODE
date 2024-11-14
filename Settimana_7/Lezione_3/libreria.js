const getBooks = function () {
  fetch("https://striveschool-api.herokuapp.com/books", {
    method: "GET",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("La risposta del server non è ok");
      }
    })
    .then((data) => {
      data.forEach((book) => {
        inserisci_book(book);
      });
    })
    .catch((error) => {
      console.log("C'è un errore: " + error);
    });
};

const inserisci_book = function (book) {
  const contenitore = document.getElementById("contenitore-card");
  contenitore.innerHTML += `
   <div class="col-12 col-md-6 col-lg-3 mb-4 d-flex align-items-stretch" id="book-${book._id}" data-book-id="${book._id}">        
    <div class="card" style="width: 20rem;">
     <div class="continer-img" style="height: 450px; overflow: hidden;"> 
     <img src="${book.img}" class="card-img-top" style="width: 100%; height: 100%; object-fit: 100%;" alt="${book.title}" />
     </div> 
      <div class="card-body">
        <h5 class="card-title">${book.title}</h5>
        <p class="card-text">${book.price} €</p>
       <button type="button" class="btn btn-success btn-lg" onclick="aggiungi('${book.title}', '${book.price}')">Compra</button>
       <button type="button" class="btn btn-danger btn-lg" onclick="rimuovi(event)">Rimuovi</button>
      </div>
    </div>
    </div>
  `;
};

const rimuovi = function (event) {
  const button = event.target; // Ottieni il pulsante su cui è stato cliccato
  const card = button.closest(".col-12"); // Trova il genitore più vicino, che è la card
  const id = card.getAttribute("data-book-id"); // Ottieni l'ID del libro dalla card

  // Rimuovi la card dal DOM
  if (card) {
    card.remove();
  }

  // Rimuovi l'elemento dal carrello
  carrello = carrello.filter((item) => item.title !== id);
  aggiornaCarrello();
};

let carrello = [];

const aggiungi = function (title, price) {
  const libro = { title, price };
  carrello.push(libro);
  aggiornaCarrello();
};

const aggiornaCarrello = function () {
  const carrelloElement = document.querySelector(".offcanvas-body");
  carrelloElement.innerHTML = "";

  if (carrello.length === 0) {
    carrelloElement.innerHTML = "<p>Il carrello è vuoto</p>";
  } else {
    let total = 0;
    carrello.forEach((item) => {
      carrelloElement.innerHTML += `
        <p>${item.title} - ${item.price} €</p>
      `;
      total += parseFloat(item.price);
    });
    carrelloElement.innerHTML += `<hr><p>Total: ${total.toFixed(2)} €</p>`;
  }
};

document.addEventListener("DOMContentLoaded", function () {
  getBooks();
});
