const filme = [
  {
    id: 1,
    titel: "Avatar",
    jahr: 2009,
    genre: "Science Fiction",
    beschreibung: "Ein Soldat wird auf den Planeten Pandora geschickt.",
    bild: "./images/avatar.JPG",
  },
  {
    id: 2,
    titel: "Star Wars",
    jahr: 1989,
    genre: "Sci-Fi",
    beschreibung: "Ein cooler Film.",
    bild: "./images/startwars.jpg",
  },
  {
    id: 3,
    titel: "Titanic",
    jahr: 2003,
    genre: "Drama",
    beschreibung: "Schiff sinkt.",
    bild: "./images/titanic.jpg",
  },
];

function zeigeFilmeKacheln() {
  const container = document.getElementById("film-shop");
  container.innerHTML = "";
  filme.forEach((film) => {
    const kachel = document.createElement("div");
    kachel.className = "film-kachel";
    kachel.innerHTML = `
     <img src="${film.bild}" alt="${film.titel}">
    <h3>${film.titel}</h3>
    <p>Jahr: ${film.jahr}</p>
    <p>Genre: ${film.genre}</p>
    <button onclick="zeigeFilmDetails(${film.id})">Details anzeigen</button>
    `;
    container.appendChild(kachel);
  });
}
function zeigeFilmDetails(filmId) {
  const film = filme.find((f) => f.id === filmId);
  const container = document.getElementById("film-shop");
  container.innerHTML = `
    <div id="detail-bereich">
  <h2 id="detail-titel">${film.titel}</h2>
  <img id="detail-bild" src="${film.bild}" alt="" />
  <p id="detail-beschreibung">${film.beschreibung}</p>
  <p><strong>Jahr:</strong> <span id="detail-jahr">${film.jahr}</span></p>
  <p><strong>Genre:</strong> <span id="detail-genre">${film.genre}</span></p>
  <button onclick="zeigeFilmeKacheln()">Zurück zur Übersicht</button>
</div>
    `;
}
