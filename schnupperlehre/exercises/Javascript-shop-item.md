# 🛠️ JavaScript für deinen HTML-Shop-Artikel

## 🧩 Teil 1: Tutorial Mini-Filmwebseite

**✅ Ziel**: Du baust eine einfache, dynamische Webseite, auf der Filme als Kacheln angezeigt werden. Mit einem Klick auf „Details anzeigen“ siehst du weitere Informationen zum jeweiligen Film.

---

### Step 1: Erstelle alle Dateine und verlinke diese

1. Erstelle einen neuen Ordner – z. B. `dynamische-filme`.
2. Erstelle darin folgende Dateien:
   - `index.html` → deine HTML-Seite
   - `style.css` → dein CSS-Styling
   - `script.js` → dein JavaScript-Code
3. Lege einen Unterordner `images` an und speichere drei Bilder ab:
   - `avatar.jpg`
   - `titanic.jpg`
   - `starwars.jpg`

> #### 📝 **Tipp:**
>
> Du kannst Bilder z. B. über Google Bilder herunterladen (rechte Maustaste → "Bild speichern unter"). Achte darauf, dass:
>
> - Die Datei genau so benannt ist (avatar.jpg, …)
> - Die Bilder wirklich im images-Ordner gespeichert werden

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <title>Filme</title>
  </head>
  <body>
    <div id="film-shop"></div>
  </body>
</html>
```

> #### 📝 **Tipp:**
>
> - Der `<div id="film-shop">` ist der Platzhalter – JavaScript fügt dort später den sichtbaren Inhalt ein.
> - Das `<script src="...">` lädt deinen Code.

3. Verlinke deine JavaScript-Datei am Ende der HTML-Datei (direkt vor dem schliessenden </body>):

```html
<script src="./script.js"></script>
```

4. Verlinke deine CSS-Datei am Anfang der HTML-Datei (direkt vor dem schliessenden </head>):

```html
<link rel="stylesheet" href="style.css" />
```

> 📝 **Tipp:** Nun sind deine drei Dateien miteinander verknüpft. Du musst also nicht mehr alles in einer Datei schreiben und behältst so eine bessere Übersicht.

---

### Step 2: Styles hinzufügen

1. Öffne `style.css`
2. Kopiere den Style aus der Beispiel-Datei (`example/Dynamic-Website/style.css`) in deine `style.css`

> 📝 **Tipp:** Du musst das Design nicht selbst schreiben – wichtig ist, dass du dich jetzt auf JavaScript konzentrierst. CSS macht später das Layout hübsch.

---

### Step 3: Daten hinzufügen

1. Öffne das zuvor erstellte script.js file
2. Füge eine Variable filme mit einem leeren Array ein:

```js
const filme = [];
```

> #### 📝 Tipp:
>
> - Eine Variable (**const filme**) ist ein benannter Speicherplatz für Daten.
> - Ein Array (**[ {_Wert1_}, {_Wert2_} ]**) ist eine geordnete Liste von Werten (z. B. mehrere Filme).

3. Füge deinem Array jetzt ein erstes Objekt (einen Film) hinzu.

```js
const filme = [
  {
    id: 1,
    titel: "Avatar",
    jahr: 2009,
    genre: "Science Fiction",
    beschreibung: "Ein Soldat wird auf den Planeten Pandora geschickt.",
    bild: "./images/avatar.jpg",
  },
];
```

> #### 📝 Tipp:
>
> - Ein Objekt ist wie ein kleiner Datensatz – du beschreibst einen Film mit `titel`, `jahr`, `bild` usw.
> - Die geschweiften Klammern `{}` umschliessen die Eigenschaften des Films.
> - Jeder Film hat eine einzigartige `id` – das ist später wichtig, wenn du Details anzeigen willst.

4. Füge jetzt zwei weitere Filme („Titanic“ und „Star Wars“) zum Array hinzu.

---

### Step 4: JavaScript-Funktionalität - Kachelübersicht

**✅ Ziel**: Als Nächstes kümmern wir uns um die Funktion zeigeFilmeKacheln(). Ihr Ziel ist es, die Filmübersicht in Form von Kacheln auf der Seite anzuzeigen.

1. Erstelle unter deiner filme-Variable zwei neue Funktionen:

```js
const filme = [...deine daten];
function zeigeFilmeKacheln() {}
function zeigeFilmDetails(filmId) {}
```

> #### 📝 Tipp:
>
> - Eine **Funktion** ist ein Block von Code, der bestimmte Aufgaben ausführt – man kann ihn so oft nutzen wie man möchte.
> - Wenn du später `zeigeFilmeKacheln()` schreibst, wird dieser Codeblock ausgeführt.
> - Die Funktion `zeigeFilmDetails(filmId)` bekommt beim Aufruf eine Zahl übergeben – das ist die **ID** des Films, den man anzeigen möchte. Das nennt man einen **Parameter**.

2. Wir arbeiten nun innerhalb der `zeigeFilmeKachln()`-Funktion. Hol dir zuerst das div-Element mit der **ID** film-shop und speichere es in einer Variable:

```js
function zeigeFilmeKacheln() {
  const container = document.getElementById("film-shop");
}
```

> #### 📝 Tipp:
>
> - `document.getElementById('film-shop')` sucht in deiner HTML-Datei nach dem Element mit der ID film-shop.
> - Dieses `<div>` ist später der Bereich, in dem alle Filmkacheln eingefügt werden.
> - Die `ID` muss einmalig sein – es darf sie im Dokument nur ein einziges Mal geben.

3. Bevor neue Inhalte angezeigt werden, löschst du den bisherigen Inhalt des Containers:

```js
container.innerHTML = "";
```

> **Tipp:** Damit verhinderst du, dass die Kacheln doppelt erscheinen, falls die Funktion mehrmals aufgerufen wird. `innerHTML = ''` bedeutet: „Leere diesen Bereich komplett“.

4. Iteriere (durchlaufe) das `filme`-Array mit einer `forEach`-Schleife:

```js
filme.forEach((film) => {
  // hier kommt der Code für jede einzelne Kachel
});
```

> #### 📝 Tipp:
>
> - Das `filme`-Array enthält alle Filmobjekte.
> - `forEach()` sorgt dafür, dass dein Code für jeden einzelnen Film im Array ausgeführt wird.
> - `film` ist dabei eine Art Platzhalter für jeweils ein Filmobjekt aus dem Array

5. Erstelle für jeden Film ein div-Element:

```js
filme.forEach((film) => {
  const kachel = document.createElement("div");
  kachel.className = "film-kachel";
});
```

> #### 📝 Tipp:
>
> - Mit `document.createElement('div')` erzeugst du ein neues HTML-Element im JavaScript-Code.
> - Mit `className = 'film-kachel'` gibst du diesem Element eine CSS-Klasse, damit du es später gestalten kannst.

6. Füge das HTML der Kachel mit `innerHTML` hinzu:

```js
kachel.innerHTML = `
 " <img src="anpassen.bild" alt="anpassen.titel">
  <h3>anpassen.titel</h3>
  <p>Jahr: anpassen.jahr</p>
  <p>Genre: anpassen.genre</p>
  <button onclick="zeigeFilmDetails(anpassen.id)">Details anzeigen</button>"
`;
```

7. Jetzt musst du die Platzhalter wie `anpassen.bild` durch den tatsächlichen Zugriff auf die Film-Daten ersetzen:

> #### 📝 Tipp:
>
> - Dafür nutzt man die sogenannte Template Literal-Syntax: `${film.attribut}`
> - Beispiel: `${film.titel}` greift auf den Titel des aktuellen Films zu.
> - Alles, was du innerhalb von `${...}` schreibst, wird automatisch durch den entsprechenden Wert ersetzt.

💡 So sieht der korrigierte Code für den Inhalt jeder Kachel aus:

```js
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
});
```

> **Tipp:** Mit `onclick="zeigeFilmDetails(${film.id})"` wird beim Klick auf den Button die Detailansicht des Films geöffnet.

8. Füge die Kachel dem Container hinzu:

```js
container.appendChild(kachel);
```

> **Tipp:**
>
> - `appendChild()` fügt das neue Element (hier: kachel) in das bestehende Element (hier: container) ein.
> - So wird jede Kachel am Ende des Bereichs `film-shop` eingefügt.

✅ Deine komplette Funktion sieht nun so aus:

```js
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
```

9. Wechsle zu deiner **index.html**-Datei und rufe die Funktion beim Laden der Seite in deiner index.html auf (ganz unten, vor `</body>`):

```html
<script>
  zeigeFilmeKacheln();
</script>
```

🎉 **Glückwunsch** – deine Übersichtsseite ist jetzt dynamisch. Es sollten drei Kacheln erscheinen.

---

### Step 5: JavaScript-Funktionalität - Kacheldetail

✅ Ziel: Jetzt bauen wir die Funktion `zeigeFilmDetails(filmId)`.
Sie sorgt dafür, dass beim Klick auf „Details anzeigen“ eine Detailansicht des Films angezeigt wird – mit Titel, Bild, Beschreibung, Jahr und Genre.

1. Wechsle zur Funktion `zeigeFilmDetails(filmId)` und finde den Film mit der passenden ID im filme-Array.

```js
const film = filme.find((f) => f.id === filmId);
```

> **Tipp:**
>
> - `find()` durchsucht das Array und gibt das erste Element zurück, bei dem die Bedingung passt.
> - In diesem Fall: den Film, dessen ID mit filmId übereinstimmt.

2. Hol dir wieder den film-shop-Container aus dem HTML:

```js
function zeigeFilmDetails(filmId) {
  const film = filme.find((f) => f.id === filmId);
  const container = document.getElementById("film-shop");
}
```

> **Tipp:**
>
> - In diesen Container schreiben wir gleich das komplette HTML der Detailansicht.
> - Dadurch wird die vorherige Kachelübersicht ersetzt.

3. Fülle den Container via ìnnerHTML` mit dem Detail-HTML des Films:

```html
<div id="detail-bereich">
  <h2 id="detail-titel">anpassen.titel</h2>
  <img id="detail-bild" src="anpassen.bild" alt="" />
  <p id="detail-beschreibung">anpassen.beschreibung</p>
  <p><strong>Jahr:</strong> <span id="detail-jahr">anpassen.jahr</span></p>
  <p><strong>Genre:</strong> <span id="detail-genre">anpassen.genre</span></p>
  <button onclick="zeigeFilmeKacheln()">Zurück zur Übersicht</button>
</div>
```

5. Auch hier musst du die korrekt Template Literals `${film.attribut}` verwenden und die Platzhalter wie `anpassen.bild` durch den tatsächlichen Zugriff auf die Film-Daten ersetzen.

✅ Die vollständige Funktion sieht so aus:

```js
function zeigeFilmDetails(filmId) {
  const film = filme.find((f) => f.id === filmId);

  const container = document.getElementById("film-shop");
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
```

🎉 **Glückwunsch** – du hast jetzt eine dynamische Filmübersicht mit Kacheln und Detailansicht programmiert!

---

## 🧩 Teil 2: Eigene Webanwendung ergänzen

**✅ Ziel:**  
Setze jetzt dein erlerntes Wissen ein, um **deine eigene dynamische Webapplikation** zu erweitern.  
Nutze dabei zentrale JavaScript-Techniken wie:

- `getElementById()` – um HTML-Elemente auszuwählen
- `createElement()` – um neue HTML-Elemente per JavaScript zu erzeugen
- `innerHTML` – um Inhalte in HTML einzufügen oder zu verändern
- `appendChild()` – um neue Elemente ins Dokument einzufügen

Halte ausserdem dein **JavaScript-Cheat-Sheet** bereit – es hilft dir beim Erinnern wichtiger Befehle und Strukturen.

---

1. **Strukturiere dein Projekt sauber:**

   - Lege deine HTML-Datei (`index.html`), CSS-Datei (`style.css`) und JavaScript-Datei (`script.js`) **in separaten Dateien** an.
   - Verlinke sie richtig miteinander, damit alles zusammen funktioniert.

2. **Schreibe den JavaScript-Code in deiner `script.js`:**

   - Implementiere die dynamische Kachelansicht und Detailansicht, ähnlich wie im vorherigen Beispiel mit den Filmen.

3. **🌟 Für Fortgeschrittene:**  
   Baue zusätzliche Funktionen ein, wie z. B.:
   - Elemente **hinzufügen**
   - Elemente **löschen**
   - Elemente **bearbeiten**
