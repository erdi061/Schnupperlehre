const filme = [
  {
    id: 1,
    titel: "Top Gun: Maverick",
    jahr: 2022,
    genre: "Action, Adventure",
    preis: "10.50",
    beschreibung:
      "Ein früheriger Top Gun Absolvent trainiert die zurzeitige Leute in Top Gun um einen fast unmöglichen Mission durchzuführen.",
    bild: "./topgunmaverick.jpg",
    URL: "https://www.youtube.com/watch?v=qSqVVswa420",
  },
  {
    id: 2,
    titel: "Whiplash",
    jahr: 2014,
    genre: "Music, Drama",
    preis: "8.50",
    beschreibung:
      "Ein 19-jähriger Schlagzeugspieler wird in einem professionellem Band aufgenommen mit einem strengen Mentor,der das Potenzial des Schülers sieht und darum keine, auch die kleinsten, Fehler durchlässt.",
    bild: "./whiplash.jpg",
    URL: "https://www.youtube.com/watch?v=7d_jQycdQGo",
  },
  {
    id: 3,
    titel: "Gran Turismo",
    jahr: 2023,
    genre: "Drama",
    preis: "11",
    beschreibung:
      " Ein junger Mann wollte schon seit seiner Kindheit etwas mit Autos unternehmen, am besten Rennautos. Er spielte das Spiel Gran Turismo als er eines Tages zu einer seiner Lieblingsrennauto Marke aufgenommen wurde,um gegen andere Auto Fanatiker zu wettkämpfen.",
    bild: "./granturismo.jpeg",
    URL: "https://www.youtube.com/watch?v=GVPzGBvPrzw&pp=0gcJCfwAo7VqN5tD",
  },
];

function zeigeFilmeKacheln() {
  const container = document.getElementById("movie-shop");
  container.innerHTML = "";
  filme.forEach((film) => {
    const kachel = document.createElement("sl-card");
    kachel.className = "card-image";
    kachel.innerHTML = `
    <img 
    slot="image"
    src="${film.bild}" 
    alt="${film.titel}"
  />
  <sl-card class="card-footer">
  Ein früheriger Top Gun Absolvierender trainiert die zurzeitige Leute in Top Gun um einen fast unmöglichen Mission durchzuführen.<br>
  <p class="Preis">${film.preis} Fr.</p>

  <div slot="footer">
    <sl-rating></sl-rating>
    <sl-button onclick=rating("${film.titel}")>Rate this movie!</sl-button><br>
  </div>
  <div slot="footer">
    <sl-divider></sl-divider>
    <sl-button variant="success">Buy Now</sl-button>
    <sl-button variant="warning">Put into basket</sl-button>
    <sl-button variant="primary" onClick="zeigeFilmDetails(${film.id})">More Info</sl-button> 
    <sl-button variant="primary">Leave a written review</sl-button>
  </div>
</sl-card>
    `;
    container.appendChild(kachel);
  });
}

function zeigeFilmDetails(filmId) {
  const film = filme.find((f) => f.id === filmId);
  const container = document.getElementById("movie-shop");
  container.innerHTML = `
    <div id="detail-bereich">
  <h2 id="detail-titel">${film.titel}</h2>
  <img id="detail-bild" src="${film.bild}" alt="" />
  <p id="detail-beschreibung">${film.beschreibung}</p>
  <p><strong>Jahr:</strong> <span id="detail-jahr">${film.jahr}</span></p>
  <p><strong>Genre:</strong> <span id="detail-genre">${film.genre}</span></p>
  <p><strong>Trailer:</strong> <span id="detail-genre"> <a href="${film.URL}">Hier klicken um den Trailer zu sehen!</a></span></p>
  <button onclick="zeigeFilmeKacheln()">Zurück zur Übersicht</button>
</div>
    `;
}

function rating(film) {
  alert(`Thanks for rating: ${film}!`);
}
