const API_KEY = "dvVOZ9Pa1H3GM0mJcBfQUA8ukrp2DVD82hmIpvyP1kyGo2nxYXG1FBXH";
const row_img = document.getElementById("row_img");
const contenitore_max = document.getElementById("contenitore_max");

const AlbumAPI = function (tipologia) {
  row_img.innerHTML = "";

  fetch(`https://api.pexels.com/v1/search?query=${tipologia}&per_page=9`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: API_KEY,
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
      console.log(data);
      console.log(data.total_results);
      if (data.total_results > 0) {
        data.photos.forEach((element) => {
          create_card(element);
        });
      } else {
        row_img.style.display = "none";
        contenitore_max.innerHTML = `
        <div
            class="d-flex flex-column justify-content-center align-items-center"
          >
            <h1 class="mb-5">Non ci sono elementi, non è andata come speravi ...</h1>
            <img
              class="w-50"
              src="./massimo_aspetta.jpg"
              alt="massimo aspetta"
            />
          </div>
        `;
      }
    })
    .catch((error) => {
      console.error("Errore:", error);
    });
};

function create_card(dati) {
  row_img.innerHTML += `     
      <div class="col-md-4" id="card-${dati.id}">
       <div class="card mb-4 shadow-sm">
         <img
           src="${dati.src.medium}"
           class="bd-placeholder-img card-img-top"
           alt="Image"
           style="cursor: pointer;"
           onclick="viewImageDetails('${dati.src.medium}', '${dati.alt}', '${
    dati.photographer
  }', '${dati.photographer_url}')"/>
         <div class="card-body">
           <h5 class="card-title" style="cursor: pointer;" onclick="viewImageDetails('${
             dati.src.medium
           }', 
           '${dati.alt}', '${dati.photographer}', 
           '${dati.photographer_url}')">
             ${dati.alt || "Lorem Ipsum"}
           </h5>
           <p class="card-text">
             This is a wider card with supporting text below as a natural
             lead-in to additional content. This content is a little bit
             longer.
           </p>
           <div class="d-flex justify-content-between align-items-center">
             <div class="btn-group">
             <button type="button" class="btn btn-sm btn-outline-secondary" onclick="viewImage('${
               dati.src.medium
             }')">View</button>
               <button type="button" class="btn btn-sm btn-outline-secondary" onclick="hideCard('${
                 dati.id
               }')">Hide</button>
             </div>
             <small class="text-muted">ID : ${dati.id}</small>
           </div>
         </div>
       </div>
     </div>`;
}

function viewImageDetails(imageUrl, imageTitle, artistName, artistUrl) {
  const detailUrl = `detail.html?imageUrl=${encodeURIComponent(
    imageUrl
  )}&imageTitle=${encodeURIComponent(
    imageTitle
  )}&artistName=${encodeURIComponent(
    artistName
  )}&artistUrl=${encodeURIComponent(artistUrl)}`;
  window.location.href = detailUrl;
}

function hideCard(cardId) {
  const card = document.getElementById(`card-${cardId}`);
  if (card) {
    card.style.display = "none";
  }
}

function searchFunction() {
  const query = document.getElementById("searchInput").value;

  if (query.trim() !== "") {
    console.log("Cercando:", query);
    AlbumAPI(query);
  } else {
    alert("Inserisci una parola da cercare!");
  }
}

function viewImage(imageUrl) {

  const modalImage = document.getElementById(`modalImage`);
  modalImage.src = imageUrl;

  const modalElement = document.getElementById("imageModal");

  const myModal = new bootstrap.Modal(modalElement);

  myModal.show();
}
