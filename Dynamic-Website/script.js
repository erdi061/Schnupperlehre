const filme =
    [
        {
            id: 1,
            titel: "Avatar",
            jahr: 2009,
            genre: "Science Fiction",
            beschreibung: "Ein Soldat wird auf den Planeten Pandora geschickt und muss zwischen der Menschheit und den Na'vi wählen.",
            bild: "./images/avatar.JPG"
        },
        {
            id: 2,
            titel: "Titanic",
            jahr: 1997,
            genre: "Drama/Romance",
            beschreibung: "Eine Liebesgeschichte auf dem berühmten Schiff, das im Nordatlantik sank.",
            bild: "./images/titanic.jpg"
        },
        {
            id: 3,
            titel: "Star Wars",
            jahr: 1977,
            genre: "Science Fiction",
            beschreibung: "Ein junger Held kämpft gegen das böse Imperium in einer weit entfernten Galaxie.",
            bild: "./images/startwars.jpg"
        }
    ]


function zeigeFilmeKacheln() {
    // Container für die Kacheln finden
    const container = document.getElementById('film-shop');

    // Container leeren
    container.innerHTML = '';

    filme.forEach(film => {
        // Neue Kachel erstellen
        const kachel = document.createElement('div');
        kachel.className = 'film-kachel';

        // Inhalt der Kachel
        kachel.innerHTML = `
            <img src="${film.bild}" alt="${film.titel}">
            <h3>${film.titel}</h3>
            <p>Jahr: ${film.jahr}</p>
            <p>Genre: ${film.genre}</p>
            <button onclick="zeigeFilmDetails(${film.id})">Details anzeigen</button>
        `;

        // Kachel zum Container hinzufügen
        container.appendChild(kachel);
    });
}

function zeigeFilmDetails(filmId) {
    // Film suchen
    const film = filme.find(f => f.id === filmId);

    const container = document.getElementById('film-shop');
    container.innerHTML = `
    <div id="detail-bereich">
            <h2 id="detail-titel">${film.titel}</h2>
            <img id="detail-bild" src="${film.bild}" alt="">
            <p id="detail-beschreibung">${film.beschreibung}</p>
            <p><strong>Jahr:</strong> <span id="detail-jahr">${film.jahr}</span></p>
            <p><strong>Genre:</strong> <span id="detail-genre">${film.genre}</span></p>
            <button onclick="zeigeFilmeKacheln()">Zurück zur Übersicht</button>
        </div>
    `;
}