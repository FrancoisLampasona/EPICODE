const getBooks = function () {
  fetch("https://striveschool-api.herokuapp.com/books", {
    method: "GET",
  })
    .then((response) => {
      if (response.ok === true) {
        console.log("SIAMO NEL THEN FUNZIONA TUTTO");
        return response.json();
      } else {
        console.log("SIAMO NEL THEN MA NON FUNZIONA");
        throw new Error("La risposta del sever non è ok");
      }
    })
    .then((data) => {
      console.log(data);
      
    })
    .catch((error) => {
      console.log("C'è un errore" + error);
    });
};

getBooks();
