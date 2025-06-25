# 📘 Programmieren mit JavaScript – Einführung mit Erklärungen

## ✅ Erstes Script

1. Öffne **Visual Studio Code**
2. Erstelle eine neue Datei mit dem Namen `hello.js`
3. Schreibe folgenden Code hinein:

```javascript
console.log("Hallo Welt");
```

4. Öffne das Terminal und führe das Script mit folgendem Befehl aus:

```bash
node hello.js
```

**Erklärung**: `console.log()` gibt etwas im Terminal aus.

---

## 🧠 Variablen

Variablen speichern Werte, z. B. Namen oder Zahlen.

```javascript
let user = "Fritz"; // Eine Variable namens user wird erstellt und mit dem Namen Fritz belegt
console.log("Hallo " + user); // Ausgabe mit Begrüßung
```
### ➕ Operatoren

#### Mathematische Operatoren

```javascript
let a = 5 + 3; // Addition: a = 8
let b = 10 - 4; // Subtraktion: b = 6
let c = 3 * 7; // Multiplikation: c = 21
let d = 20 / 5; // Division: d = 4
let e = 10 % 3; // Restwert (Modulo): e = 1
```

#### Vergleichsoperatoren

```javascript
let result1 = 5 > 3; // Größer als: true
let result2 = 5 < 3; // Kleiner als: false
let result3 = 5 >= 5; // Größer oder gleich: true
let result4 = 5 <= 4; // Kleiner oder gleich: false
let result5 = 5 === 5; // Exakt gleich: true
let result6 = 5 !== 3; // Ungleich: true
```

## 🎤 Benutzereingaben (mit `readline-sync`)

Damit der Benutzer etwas eingeben kann, brauchen wir ein Modul:

1. Installiere es mit:

```bash
npm install readline-sync
```

2. Beispielcode:

```javascript
const readline = require("readline-sync"); // Modul einbinden

let user = readline.question("Wie heisst du? "); // Benutzer wird gefragt
console.log("Hallo " + user);
```

---

## 🔁 Bedingungen (`if`, `else if`, `else`)

Wir können Entscheidungen treffen – z. B. etwas **nur anzeigen, wenn** ein bestimmter Name eingegeben wurde:

```javascript
const readline = require("readline-sync");

let user = readline.question("Wie heisst du? ");
console.log("Hallo " + user);

if (user === "Fritz") {
  console.log("Schön, dass du da bist!");
} else if (user === "Anna") {
  console.log("Hey Anna, willkommen zurück!");
} else {
  console.log("Hallo Fremder!");
}
```

**Erklärung**:

* `if` prüft eine Bedingung.
* `else if` prüft eine weitere.
* `else` wird verwendet, wenn keine der Bedingungen zutrifft.

---

## 🔂 Schleifen – Wiederholungen im Code

### `for`-Schleife: bekannte Anzahl Wiederholungen

```javascript
for (let i = 1; i <= 5; i++) {
  console.log("Durchlauf: " + i);
}
```

**Erklärung**:

* Start: `i = 1`
* Wiederhole solange `i <= 5`
* Nach jedem Durchlauf: `i` um 1 erhöhen (`i++`)

---

### `while`-Schleife: wiederhole **solange eine Bedingung wahr ist**

```javascript
let i = 1;
while (i <= 5) {
  console.log("while-Durchlauf: " + i);
  i++;
}
```

**Wichtig**: Achte darauf, dass du `i++` hinzufügst – sonst gibt es eine Endlosschleife!

---

## 🧩 Funktionen – Code wiederverwenden

Funktionen sind **"Mini-Programme"**, die man beliebig oft aufrufen kann:

```javascript
function sayHello() {
  const readline = require("readline-sync");
  let user = readline.question("Wie heisst du? ");
  console.log("Hallo " + user);

  if (user === "Fritz") {
    console.log("Willkommen zurück, Fritz!");
  } else {
    console.log("Hallo " + user);
  }
}

sayHello(); // Aufruf der Funktion
sayHello(); // Zweiter Aufruf: passiert das gleiche, aber ggf. mit neuem Namen
```

---

## 🧱 Objekte und Klassen

Ein **Objekt** ist wie ein Behälter für zusammengehörige Daten – z. B. eine Person mit `name` und `age`.

```javascript
class Person {
  constructor(name, age = 10) {
    this.name = name;
    this.age = age;
  }
}

const person = new Person("John", 25);
console.log(person.name); // John
console.log(person.age);  // 25
```

---

### 🧍‍♂️ Benutzer erstellt eine Person

```javascript
const readline = require("readline-sync");

class Person {
  constructor(name, age = 10) {
    this.name = name;
    this.age = age;
  }
}

let name = readline.question("Wie heisst du? ");
let age = parseInt(readline.question("Wie alt bist du? "));

const user = new Person(name, age);
console.log("Name: " + user.name);
console.log("Alter: " + user.age);
```

---

## 💡 Erweiterungsideen

### 📅 Aktuelles Datum anzeigen

```javascript
let heute = new Date();
console.log("Heute ist: " + heute.toLocaleDateString());
```

### 🔘 Auswahlmenü

```javascript
const readline = require("readline-sync");

let optionen = ["Kaffee", "Tee", "Wasser"];
let index = readline.keyInSelect(optionen, "Was möchtest du trinken?");

if (index !== -1) {
  console.log("Du hast gewählt: " + optionen[index]);
} else {
  console.log("Keine Auswahl getroffen.");
}
```

---

## 📚 Zusammenfassung

| Thema         | Beispiel                    |
| ------------- | --------------------------- |
| Ausgabe       | `console.log("Text")`       |
| Variable      | `let name = "Fritz"`        |
| Eingabe       | `readline.question("...?")` |
| Bedingung     | `if`, `else if`, `else`     |
| Schleife      | `for`, `while`              |
| Funktion      | `function greet() {...}`    |
| Objekt/Klasse | `class Person {...}`        |
