# Aufgabe 6 

✅ **Lösung:**

```javascript
const readline = require("readline-sync");

let punktzahl = 0;

// Frage 1
let frage1 = readline.question("Was ist 2 + 2? ");
if (frage1 === "4") {
  console.log("Richtig!");
  punktzahl++;
} else {
  console.log("Falsch!");
}

// Frage 2
let frage2 = readline.question("Wie heißt die Hauptstadt von Deutschland? ");
if (frage2.toLowerCase() === "berlin") {
  console.log("Richtig!");
  punktzahl++;
} else {
  console.log("Falsch!");
}

// Frage 3
let frage3 = readline.question("Was ist das Gegenteil von 'heiß'? ");
if (frage3.toLowerCase() === "kalt") {
  console.log("Richtig!");
  punktzahl++;
} else {
  console.log("Falsch!");
}

console.log("Du hast " + punktzahl + " von 3 Punkten erreicht.");
```

Aufgabe 7

✅ **Lösung:**

```javascript
const readline = require("readline-sync");

function begruessung(name) {
  console.log("Hallo, " + name + "!");
  if (name === "Fritz") {
    console.log("Willkommen zurück, Fritz!");
  }
}

let name = readline.question("Wie heißt du? ");

for (let i = 1; i <= 3; i++) {
  begruessung(name);
}
```
# Aufgabe 8


✅ **Lösung:**

```javascript
const readline = require("readline-sync");

let name = readline.question("Wie heißt du? ");
let alter = parseInt(readline.question("Wie alt bist du? "));

let person = {
  name: name,
  alter: alter
};

console.log("Name: " + person.name);
console.log("Alter: " + person.alter);
```

# Aufgabe 9

✅ **Lösung:**

```javascript
const readline = require("readline-sync");

let summe = 0;

while (true) {
  let eingabe = readline.question("Gib eine Zahl ein (oder 'stop' zum Beenden): ");
  
  if (eingabe.toLowerCase() === "stop") {
    break;
  }

  let zahl = parseFloat(eingabe);
  if (!isNaN(zahl)) {
    summe += zahl;
  } else {
    console.log("Bitte gib eine gültige Zahl ein.");
  }
}

console.log("Gesamtsumme: " + summe);
```