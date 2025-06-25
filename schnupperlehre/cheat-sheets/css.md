# 🎨 CSS Spickzettel

## ✏️ Textgestaltung

### Farben

```css
color: red;                /* Benannte Farbe */
color: #ff0000;            /* Hexadezimalwert */
color: rgb(255, 0, 0);     /* RGB-Wert */
```

### Schrift-Eigenschaften

```css
font-family: Arial, sans-serif;  /* Schriftart */
font-size: 16px;                 /* Schriftgröße */
font-weight: bold;               /* Schriftgewicht (z. B. fett) */
font-style: italic;              /* Schriftstil (z. B. kursiv) */
text-align: center;              /* Textausrichtung (left, right, center, justify) */
text-decoration: underline;      /* Textdekoration (Unterstrichen, Durchgestrichen, Keine) */
line-height: 1.5;                /* Zeilenhöhe (Abstand zwischen Zeilen) */
```

## 📦 Box-Modell

### Größe

```css
width: 200px;              /* Breite des Elements */
height: 100px;             /* Höhe des Elements */
max-width: 500px;          /* Maximale Breite */
min-height: 50px;          /* Minimale Höhe */
```

### Abstände

```css
margin: 10px;              /* Außenabstand (alle Seiten) */
margin-top: 5px;           /* Außenabstand oben */
margin-right: 10px;
margin-bottom: 15px;
margin-left: 20px;
margin: 5px 10px 15px 20px;  /* Oben, rechts, unten, links */

padding: 10px;             /* Innenabstand (alle Seiten) */
padding-top: 5px;          /* Innenabstand oben */
padding-right: 10px;
padding-bottom: 15px;
padding-left: 20px;
padding: 5px 10px 15px 20px;  /* Oben, rechts, unten, links */
```

### Rahmen (Borders)

```css
border: 1px solid black;   /* Breite, Stil, Farbe */
border-radius: 5px;        /* Abgerundete Ecken */
border-top: 2px dotted red;  /* Obere Rahmenlinie mit Stil */
```

## 🎨 Farben und Hintergrund

```css
background-color: yellow;            /* Hintergrundfarbe */
background-image: url('img.jpg');    /* Hintergrundbild */
background-size: cover;              /* Bildgröße (cover, contain) */
opacity: 0.5;                        /* Transparenz (0 bis 1) */
```

## 🧱 Layout

### Anzeigearten

```css
display: block;            /* Blockelement (nimmt gesamte Breite ein) */
display: inline;           /* Inline-Element (nimmt nur benötigte Breite ein) */
display: inline-block;     /* Inline, aber mit Breiten-/Höhenangabe möglich */
display: flex;             /* Flexbox-Layout */
display: none;             /* Element ausblenden */
```

### Positionierung

```css
position: static;          /* Standard-Positionierung */
position: relative;        /* Relativ zur normalen Position */
position: absolute;        /* Absolut zum nächsten positionierten Elternelement */
position: fixed;           /* Fixiert relativ zum Viewport */
top: 10px;                 /* Abstand von oben */
left: 20px;                /* Abstand von links */
z-index: 1;                /* Stapelreihenfolge (höher = weiter vorne) */
```

### Flexbox-Grundlagen

```css
display: flex;             /* Flex-Container aktivieren */
flex-direction: row;       /* Anordnung (Zeile, Spalte) */
justify-content: center;   /* Horizontale Ausrichtung */
align-items: center;       /* Vertikale Ausrichtung */
flex-wrap: wrap;           /* Zeilenumbruch aktivieren */
```

## 🧰 Weitere nützliche Eigenschaften

```css
cursor: pointer;               /* Mauszeiger ändern */
overflow: hidden;              /* Überlaufenden Inhalt ausblenden */
box-shadow: 2px 2px 5px gray;  /* Schatten (X, Y, Weichzeichnung, Farbe) */
transition: all 0.3s ease;     /* Sanfte Übergänge bei Änderungen */
```

## 🔎 Selektoren

```css
h1 { }                     /* Elementselektor */
.klassename { }            /* Klassenselektor */
#idname { }                /* ID-Selektor */
* { }                      /* Universalselektor */
div p { }                  /* Nachfahrenselektor */
div > p { }                /* Direktes Kind-Element */
div + p { }                /* Nachbar-Element */
div:hover { }              /* Pseudo-Klasse (z. B. bei Hover) */
```

## Mehr Tips und Tricks:

https://www.w3schools.com/css/default.asp