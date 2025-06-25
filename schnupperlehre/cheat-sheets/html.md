# 💻 HTML Spickzettel (Cheat Sheet)

## 📄 Dokumentstruktur

```html
<!DOCTYPE html>        <!-- Deklariert den Dokumenttyp (HTML5) -->
<html>                 <!-- Wurzelelement der HTML-Seite -->
  <head>               <!-- Beinhaltet Metadaten und Verlinkungen -->
  </head>
  <body>               <!-- Sichtbarer Inhalt der Webseite -->
  </body>
</html>
```

## ✍️ Textelemente

```html
<h1>Überschrift 1</h1>   <!-- Größte Überschrift -->
<h2>Überschrift 2</h2>   <!-- Zweitgrößte Überschrift -->
<h3>Überschrift 3</h3>
<h4>Überschrift 4</h4>
<h5>Überschrift 5</h5>
<h6>Überschrift 6</h6>   <!-- Kleinste Überschrift -->

<p>Absatztext</p>        <!-- Absatz -->

<br>                     <!-- Zeilenumbruch -->
<hr>                     <!-- Horizontale Linie -->

<strong>Fetter Text</strong>     <!-- Hebt Text fett hervor -->
<em>Kursiver Text</em>          <!-- Hebt Text kursiv hervor -->
<u>Unterstrichener Text</u>     <!-- Unterstreicht Text -->
<mark>Markierter Text</mark>    <!-- Hervorgehobener Text -->
```

## 📋 Listen

```html
<!-- Ungeordnete Liste (Aufzählung mit Punkten) -->
<ul>
  <li>Eintrag 1</li>
  <li>Eintrag 2</li>
  <li>Eintrag 3</li>
</ul>

<!-- Geordnete Liste (numerierte Aufzählung) -->
<ol>
  <li>Erster Eintrag</li>
  <li>Zweiter Eintrag</li>
  <li>Dritter Eintrag</li>
</ol>
```

## 🔗 Links und Bilder

```html
<!-- Hyperlink -->
<a href="https://www.beispiel.de">Hier klicken</a>

<!-- Bild einfügen -->
<img src="bild.jpg" alt="Beschreibung des Bildes">
```

## 📊 Tabellen

```html
<table>
  <tr>                 <!-- Tabellenzeile -->
    <th>Überschrift 1</th>  <!-- Tabellenkopf -->
    <th>Überschrift 2</th>
  </tr>
  <tr>
    <td>Daten 1</td>    <!-- Tabelleninhalt -->
    <td>Daten 2</td>
  </tr>
</table>
```

## 📝 Formulare

```html
<form>
  <!-- Texteingabefeld -->
  <input type="text" placeholder="Name eingeben">

  <!-- Passwortfeld -->
  <input type="password" placeholder="Passwort eingeben">

  <!-- Kontrollkästchen -->
  <input type="checkbox"> Angemeldet bleiben

  <!-- Optionsfeld -->
  <input type="radio" name="option"> Option 1

  <!-- Dropdown-Menü -->
  <select>
    <option>Option 1</option>
    <option>Option 2</option>
  </select>

  <!-- Absende-Button -->
  <button type="submit">Absenden</button>
</form>
```

## 📦 Container-Elemente

```html
<div>Block-Element (Container für größere Inhalte)</div>
<span>Inline-Element (für einzelne Textteile)</span>
```

## Flexbox

Geh auf diese seite und lies sie durch:
https://css-tricks.com/snippets/css/a-guide-to-flexbox/

## 💬 Kommentare

```html
<!-- Dies ist ein HTML-Kommentar -->
```

## Mehr Tips und Tricks:

https://www.w3schools.com/html/default.asp