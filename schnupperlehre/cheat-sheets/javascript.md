# 📝 JavaScript-Spickzettel (Cheat Sheet)

## 📦 Variablen und Datentypen

### Variablen deklarieren

```javascript
let name = "Alex"; // Kann später geändert werden
const age = 12; // Kann NICHT geändert werden
var school = "Lincoln"; // Alte Schreibweise (nutze besser let oder const)
```

### Datentypen

```javascript
// Zahlen
let count = 10;
let price = 9.99;
let age = parseInt("16"); // String in Zahl umwandeln

// Zeichenketten (Strings)
let greeting = "Hallo, Welt!";
let name = "Sarah";
let age = String(16); // Zahl in String umwandeln

// Wahrheitswerte (Booleans)
let isRaining = true;
let isHoliday = false;

// Arrays (Listen)
let colors = ["rot", "grün", "blau"];
let numbers = [1, 2, 3, 4, 5];

// Objekte (Daten mit Eigenschaften)
let person = {
  name: "Jamie",
  age: 11,
  likesCoding: true,
};

// Datentyp überprüfen
let numberType = typeof 5; // Gibt "number" zurück
let stringType = typeof "Hallo"; // Gibt "string" zurück
```

## ➕ Operatoren

### Mathematische Operatoren

```javascript
let a = 5 + 3; // Addition: a = 8
let b = 10 - 4; // Subtraktion: b = 6
let c = 3 * 7; // Multiplikation: c = 21
let d = 20 / 5; // Division: d = 4
let e = 10 % 3; // Restwert (Modulo): e = 1
```

### Vergleichsoperatoren

```javascript
let result1 = 5 > 3; // Größer als: true
let result2 = 5 < 3; // Kleiner als: false
let result3 = 5 >= 5; // Größer oder gleich: true
let result4 = 5 <= 4; // Kleiner oder gleich: false
let result5 = 5 === 5; // Exakt gleich: true
let result6 = 5 !== 3; // Ungleich: true
```

## 💬 Konsole

### Ausgabe

```javascript
// Text in der Konsole ausgeben (praktisch zum Testen)
console.log("Hallo, Welt!");
console.log(2 + 2);
console.log("Mein Name ist " + name);
```

### Eingabe

```javascript
// Benutzereingabe über Konsole (Node.js)
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Wie heißt du? ", (name) => {
  console.log("Mein Name ist " + name);
  rl.close();
});
```

## 🔗 Zeichenketten verbinden

```javascript
// Strings verketten (zusammenfügen)
let firstName = "Alex";
let lastName = "Smith";
let fullName = firstName + " " + lastName; // "Alex Smith"

// Template-Strings (moderne, übersichtliche Schreibweise)
let greeting = `Hallo, ${firstName}!`; // "Hallo, Alex!"
```

## 🔀 Bedingte Anweisungen

### If-Else

```javascript
let age = 12;

if (age < 10) {
  console.log("Du bist ein Kind");
} else if (age < 18) {
  console.log("Du bist ein Teenager");
} else {
  console.log("Du bist ein Erwachsener");
}
```

## ⚙️ Funktionen

### Funktionen definieren und aufrufen

```javascript
// Funktion definieren
function sayHello(name) {
  return "Hallo, " + name + "!";
}

// Funktion aufrufen
let greeting = sayHello("Jamie");
console.log(greeting);

// Funktion mit mehreren Parametern
function add(a, b) {
  return a + b;
}

let sum = add(5, 3); // sum = 8
```

## 🔁 Schleifen

### For-Schleife

```javascript
// Von 1 bis 5 zählen
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

### While-Schleife

```javascript
// Alternative Zählweise von 1 bis 5
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

## 🧺 Arbeiten mit Arrays

### Grundlagen zu Arrays

```javascript
let fruits = ["Apfel", "Banane", "Orange"];

// Auf Elemente zugreifen (Index beginnt bei 0)
console.log(fruits[0]); // "Apfel"
console.log(fruits[1]); // "Banane"

// Länge des Arrays
console.log(fruits.length); // 3

// Element am Ende hinzufügen
fruits.push("Traube");

// Letztes Element entfernen
let lastFruit = fruits.pop();

// Mit Schleife durch das Array gehen
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Einfachere Methode
fruits.forEach(function (fruit) {
  console.log(fruit);
});
```

## Website Dynamisch Gestalten

Stell dir vor, eine Webseite ist wie Lego:
HTML‑Bausteine (HTML-Tags) sind schon da, JavaScript (JS) ist deine Hand, die neue Steine dazu­steckt oder umbaut, während die Seite offen ist.

---

### 1. Wie finde ich einen Baustein?

| Befehl                   | Bedeutet                                             | Kleines Beispiel                                 |
| ------------------------ | ---------------------------------------------------- | ------------------------------------------------ |
| `getElementById("wort")` | Gib mir den HTML Tag mit der ID Wort.                | `const titel = document.getElementById("kopf");` |
| `querySelector("regel")` | Gib mir den ersten css class name welcher regel ist. | `const knopf = document.querySelector(".rot");`  |

---

### 2. Inhalt ändern

| Befehl                              | Bedeutet                                 | Beispiel                            |
| ----------------------------------- | ---------------------------------------- | ----------------------------------- |
| `element.textContent = "Hallo"`     | Schreibe reinen Text in diesen HTML-Tag. | `titel.textContent = "Willkommen";` |
| `element.innerHTML = "<b>Fett</b>"` | Ersetze den Inhalt durch HTML‑Text.      | `titel.innerHTML = "<i>Hi!</i>";`   |

---

### 3. Neuen Baustein bauen & ankleben

| Schritt                    | Code                                        | Was passiert                               |
| -------------------------- | ------------------------------------------- | ------------------------------------------ |
| **a) Baustein herstellen** | `const neu = document.createElement("li");` | es wird ein neues `<li>` hinzugefügt.      |
| **b) Text draufschreiben** | `neu.textContent = "Äpfel";`                | Auf dem `<li>` wird „Äpfel” gedruckt.      |
| **c) Stein einklicken**    | `liste.appendChild(neu);`                   | Der neue Text wird dem `<li>` hinzugefügt. |

Wichtig: **Ohne Schritt c sieht man nichts!** Erst `appendChild` zeigt das Element auf der Seite.

---

### 4. Auf Aktionen reagieren (Klick u. a.)

```js
knopf.addEventListener("click", () => {
  /* Code, der beim Klick laufen soll */
});
```

---

## Alert

```Javascript
//  Pop up mit dem Text Hallo! Willkommen!
alert("Hallo! Willkommen!");

```

---

## Mehr Tips und Tricks:

https://www.w3schools.com/js

## Mini‑Beispiel – alles zusammen

```html
<!DOCTYPE html>
<html>
  <body>
    <h2 id="kopf">Einkaufsliste</h2>

    <ul id="liste">
      <li>Brot</li>
      <li>Milch</li>
    </ul>

    <button id="plus">Neues Item</button>

    <script>
      // Steine finden
      const liste = document.getElementById("liste");
      const knopf = document.getElementById("plus");

      // Wenn der Button geklickt wird …
      knopf.addEventListener("click", () => {
        // 1. neuen <li>-Tag erstellen
        const li = document.createElement("li");
        li.textContent = "Neues Produkt";

        // 2. zur Liste hinzugefügt
        liste.appendChild(li);

        // 3. kurze Meldung anzeigen
        const p = document.createElement("p");
        p.textContent = "Item hinzugefügt!";
        document.body.appendChild(p);
      });
    </script>
  </body>
</html>
```

### Was passiert im Beispiel?

1. **Button gedrückt** → JS merkt das durch `addEventListener`.
2. JS **baut** einen neuen Listen‑Eintrag (`createElement`).
3. JS **fügt** ihn unten in die Liste ein (`appendChild`).
4. JS **schreibt** noch eine kleine Bestätigung auf die Seite.
