### **Taschenrechner**

**Ziel:** Erstelle einen einfachen Taschenrechner, der zwei Zahlen und eine Rechenoperation entgegennimmt und das Ergebnis anzeigt.

---

#### **Schritt 1: Grundlagen einrichten**

1. Erstelle eine neue JavaScript-Datei (z. B. `calculator.js`).
2. Verwende `require("readline")`, um das `readline`-Modul zu importieren (für die Benutzereingabe).
3. Erstelle ein `readline`-Interface mit `readline.createInterface()` unter Verwendung von `input` (aus `process.stdin`) und `output` (an `process.stdout`).

---

#### **Schritt 2: Frage nach der ersten Zahl**

1. Verwende `rl.question()`, um den Benutzer zu fragen: `"Gib die erste Zahl ein: "`.
2. Wandle die Eingabe (ein String) mit `parseFloat()` in eine Zahl um.
3. Gib die Zahl zur Kontrolle aus (z. B. `console.log("Du hast eingegeben: " + firstNumber)`).

**Tipp:** Vergiss nicht, `rl.close()` aufzurufen, um das Programm sauber zu beenden.

---

#### **Schritt 3: Frage nach der Rechenoperation**

1. Innerhalb des Rückrufs der ersten Frage, frage nach der Rechenoperation: `"Welche Rechenoperation möchtest du durchführen (+, -, *, /): "`.
2. Gib die gewählte Operation zur Kontrolle aus (z. B. `console.log("Du hast gewählt: " + operation)`).

---

#### **Schritt 4: Frage nach der zweiten Zahl**

1. Innerhalb des Rückrufs der Operation frage nach der zweiten Zahl: `"Gib die zweite Zahl ein: "`.
2. Wandle die Eingabe mit `parseFloat()` in eine Zahl um.
3. Gib alle drei Eingaben zur Kontrolle aus (z. B. `console.log(firstNumber, operation, secondNumber)`).

---

#### **Schritt 5: Führe die Berechnung durch**

1. Deklariere eine Variable `result`, um das Ergebnis zu speichern.
2. Verwende `if`-/`else if`-Anweisungen, um die Operation zu prüfen:

   * Wenn `operation` `"+"` ist, addiere die beiden Zahlen.
   * Wenn `operation` `"-"` ist, subtrahiere sie.
   * Wiederhole dies für `"*"` (Multiplikation) und `"/"` (Division).
3. Gib das Ergebnis aus (z. B. `console.log("Ergebnis: " + result)`).

---

#### **Schritt 6: Fehler behandeln**

1. Füge eine `else`-Anweisung hinzu, um ungültige Operationen (nicht `+`, `-`, `*`, `/`) abzufangen:

   * Gib aus: `"Fehler: Ungültige Operation! Bitte verwende +, -, *, oder /"`.
2. Prüfe bei Division zusätzlich, ob durch null geteilt wird:

   * Wenn `secondNumber` `0` ist, gib aus: `"Fehler: Division durch Null ist nicht erlaubt!"`.

---

#### **Schritt 7: Zeige das Ergebnis schön formatiert an**

1. Ersetze die einfache `console.log`-Ausgabe durch eine formatierte Nachricht:

   * Verwende Template Literals (Backticks `` ` ``), z. B.:
     `` `Das Ergebnis von ${firstNumber} ${operation} ${secondNumber} = ${result}` ``.

---

#### **Bonus-Herausforderungen**

1. **Begrüße den Benutzer:**

   * Frage zu Beginn nach dem Namen des Benutzers und verwende ihn in der Ausgabemeldung:
     `` `${userName}, das Ergebnis von ${firstNumber} ${operation} ${secondNumber} = ${result}` ``.
2. **Eingaben validieren:**

   * Überprüfe, ob `firstNumber` oder `secondNumber` keine Zahl ist.
   * Gib eine Fehlermeldung aus, wenn die Eingabe ungültig ist.
3. **Operationen erweitern:**

   * Füge Unterstützung für `%` (Modulo) und `**` (Exponentiation) hinzu.
4. **"Geheime" Operation hinzufügen:**

   * Füge eine versteckte Operation hinzu (z. B. `?`), die etwas Spaßiges macht – z. B. beide Zahlen mit 10 multiplizieren.
