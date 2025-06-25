# Programmieren/Scripten mit BASH und UI

UI = User Interface ... Schöne ausgabe für den User

## Erstes Script

UIs helfen uns Alles schöner zu machen so das man nich alles im Terminal eingeben muss.

1. Erstelle eine neue Datei `dialog.sh` mit `touch dialog.sh`
2. Öffne das File mit `nano dialog.sh`
3. Auf der ersten Zeile legst du fest, wie das Programm ausgeführt werden muss. `#!/bin/bash`
4. Füge eine Ausgabe aus einem UI mit dem Text "Hallo Welt" `dialog --infobox "Hallo Welt" 10 30"`
5. Speicher und Schliesse nano mit strg s und strg x
6. Mache die Datei ausführbar `chmod +x dialog.sh`
7. Führe die Datei im Terminal aus. `./dialog.sh`

```bash
#!/bin/bash

dialog --msgbox "Hallo Welt" 10 30
```

## Erweiterungen

### Benutzer Eingaben

1. Fragen den Benutzer nach seinem Namen
2. Ermöglich dem Benutzer eine Eingabe seines Benutzers und weise den eingegebenen Wert der Variable $user zu.

```bash
#!/bin/bash

Variable1=$(dialog --inputbox "Name:" 10 30 2>&1 >/dev/tty)
```

### Bedingungen

1. Teile dem Benutzer eine speziellen Gruss mit, wenn er den Namen "Fritz" hat. 

```bash
#!/bin/bash

user=$(dialog --inputbox "Wie heisst du?" 10 30 2>&1 >/dev/tty)
dialog --msgbox "Hallo $user" 10 30
if [[ "$user" == "Fritz" ]]; then
 dialog --msgbox "Schön das du da bist" 10 30
fi
```
### Funktionen

Funktionen helfen uns zusammengehörende Befehle zu vereinfachen.

1. Erstelle eine Funktion mit namen "sayHello" und rufe sie auf.

```bash
#!/bin/bash

sayHello(){
  user=$(dialog --inputbox "Wie heisst du?" 10 30 2>&1 >/dev/tty)
  dialog --msgbox "Hallo $user" 10 30
  if [[ "$user" == "Fritz" ]]; then
    dialog --msgbox "Schön das du da bist" 10 30
  fi
}

sayHello
```

Funktionen machen Programmteile wiederverwendbar. Rufe zweimal 'sayHello' auf. Was passiert?