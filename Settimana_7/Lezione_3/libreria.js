const getBooks = function () {
  fetch("https://striveschool-api.herokuapp.com/books", {
    method: "GET",
  })
    .then((response) => {
      if (response.ok) {
        console.log("SIAMO NEL THEN FUNZIONA TUTTO");
        return response.json();
      } else {
        console.log("SIAMO NEL THEN MA NON FUNZIONA");
        throw new Error("La risposta del server non è ok");
      }
    })
    .then((data) => {
      console.log(data);
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
   <div class="col-12 col-md-6 col-lg-3 mb-4 d-flex align-items-stretch">        
    <div class="card" style="width: 20rem;">
     <div class="continer-img" style="height: 450px; overflow: hidden;"> 
     <img src="${book.img}" class="card-img-top" style="width: 100%; height: 100%; object-fit: 100%;" alt="${book.title}" />
     </div> 
      <div class="card-body">
        <h5 class="card-title">${book.title}</h5>
        <p class="card-text">${book.price} €</p>
       <button type="button" class="btn btn-success btn-lg" onclick="aggiungi(this)">Compra</button>
       <button type="button" class="btn btn-danger btn-lg" onclick="cacella(this)">Rimuovi</button>
      </div>
    </div>
    </div>
  `;
};

getBooks();
