# ✅ Lösungen: JavaScript Übungen

---

## 🖥 **Teil 1: Konsole (Node.js)**

### Aufgabe 1: Hallo Welt

```javascript
console.log("Hallo Welt");
```

---

### Aufgabe 2: Einfache Addition

```javascript
console.log("1 + 1 =", 1 + 1);
```

---

### Aufgabe 3: Variablen verwenden

```javascript
let a = 5;
let b = 10;
let summe = a + b;
console.log("Summe:", summe);
```

---

### Aufgabe 4: Eine Funktion schreiben

```javascript
function greet(name) {
  console.log("Hallo, " + name + "!");
}

greet("Max");
```

---

### Aufgabe 5: Eine Schleife verwenden

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

---

## 🌐 **Teil 2: Im Browser (HTML + JavaScript)**

### Aufgabe 6: Benutzerdaten abfragen

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <title>Benutzerdaten</title>
  </head>
  <body>
    <h2>Deine Daten</h2>
    <input id="vorname" placeholder="Vorname" /><br />
    <input id="nachname" placeholder="Nachname" /><br />
    <input id="adresse" placeholder="Adresse" /><br />
    <input id="farbe" placeholder="Lieblingsfarbe" /><br />
    <button onclick="zeigeDaten()">Absenden</button>
    <p id="ausgabe"></p>

    <script>
      function zeigeDaten() {
        let vorname = document.getElementById("vorname").value;
        let nachname = document.getElementById("nachname").value;
        let adresse = document.getElementById("adresse").value;
        let farbe = document.getElementById("farbe").value;

        document.getElementById("ausgabe").innerText =
          "Name: " +
          vorname +
          " " +
          nachname +
          ", Adresse: " +
          adresse +
          ", Lieblingsfarbe: " +
          farbe;
      }
    </script>
  </body>
</html>
```

---

### Aufgabe 7: Lieblingsstadt

```html
<body>
  <h2>Lieblingsstadt</h2>
  <input id="stadt" placeholder="Deine Stadt" />
  <button onclick="zeigeStadt()">Abschicken</button>
  <p id="stadtAusgabe"></p>

  <script>
    function zeigeStadt() {
      let stadt = document.getElementById("stadt").value;
      let text = "Deine Lieblingsstadt ist: " + stadt;

      if (stadt === "Berlin") {
        text += " – Das ist auch meine Lieblingsstadt!";
      }

      document.getElementById("stadtAusgabe").innerText = text;
    }
  </script>
</body>
```

---

### Aufgabe 8: Funktion `myCity`

```html
<body>
  <h2>Lieblingsstadt (mit Funktion)</h2>
  <input id="stadt" placeholder="Deine Stadt" />
  <button onclick="myCity()">Zeig mir was!</button>
  <p id="stadtOut"></p>

  <script>
    function myCity() {
      let stadt = document.getElementById("stadt").value;
      let text = "Du magst: " + stadt;
      if (stadt.toLowerCase() === "berlin") {
        text += " – Ich auch!";
      }
      document.getElementById("stadtOut").innerText = text;
    }
  </script>
</body>
```

---

### Aufgabe 9: Zahlenschleife im Browser

```html
<body>
  <h2>Zahlen von 1 bis 10</h2>
  <button onclick="zeigeZahlen()">Los!</button>
  <ul id="zahlenListe"></ul>

  <script>
    function zeigeZahlen() {
      let ul = document.getElementById("zahlenListe");
      ul.innerHTML = ""; // Liste leeren
      for (let i = 1; i <= 10; i++) {
        let li = document.createElement("li");
        li.innerText = i;
        ul.appendChild(li);
      }
    }
  </script>
</body>
```

---

### Aufgabe 10: Dynamisches Styling (Lieblingsfarbe)

```html
<body>
  <h2>Hintergrundfarbe wählen</h2>
  <input id="colorInput" placeholder="z. B. lightblue" />
  <button onclick="setColor()">Farbe ändern</button>

  <script>
    function setColor() {
      let farbe = document.getElementById("colorInput").value;
      document.body.style.backgroundColor = farbe;
    }
  </script>
</body>
```
