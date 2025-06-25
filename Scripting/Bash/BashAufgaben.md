# Programmieren/Scripten mit BASH Aufgaben

## Aufgabe 1

Frage den Benutzer nach Informationen ab (Vorname, Nachname, Adresse, Lieblingsfarbe...) und gib diese Informationen anschließend aus.

## Aufgabe 2

Frage den Benutzer nach seiner Lieblingsstadt und gib diese aus. Füge einen besonderen Gruß hinzu, wenn der Benutzer deine Lieblingsstadt angibt.

## Aufgabe 3

Erstelle eine Funktion mit dem Namen `myCity`, in der du deine Logik verpackst. Rufe diese Funktion dann auf.

## Aufgabe 4

1. Erstelle eine neue Datei namens `rateSpiel.sh`.
2. Mache sie ausführbar und teste dies, indem du ein `echo` ausgibst.
3. Erstelle ein Ratespiel, bei dem man eine zufällige Zahl erraten muss. Nach jedem Raten erfährt man, ob die gesuchte Zahl höher oder niedriger als die geratene Zahl ist.
4. Füge nun hinzu, dass man gefragt wird, ob man nochmals spielen möchte.
5. Mache nun aus dem Spiel eine Funktion und rufe diese auf.

# Programmieren/Scripten mit BASH mit UI Aufgaben

## Aufgabe 1

Erweitere Aufgabe 1 mit einem UI. Benutze dafür `dialog --inputbox`

## Aufgabe 2

Erweitere das Ratespiel mit einem UI.

## Aufgabe 3

Erstelle einen einfachen Taschenrechner mit dem `dialog`-Befehl in Bash. Du musst dich nicht um die eigentliche Berechnung kümmern, da Bash dies für dich übernimmt mit folgendem aufruf `ans=$(($rechnung))`. Deine Aufgabe besteht darin, einen Eingabedialog zu erstellen, in dem der Benutzer eine Berechnung eingeben kann, zum Beispiel 2+3. Danach kannst du es mit Bash berechnen, indem du die Variable `rechnung` durch deine eigene Variable ersetzt: `ans=$(($rechnung))`. Zeige schließlich das Ergebnis in einem neuen Dialog mit der Variable `ans` an.


