# Terminal Commands

Mit Hilfe des Terminal/Konsole kann man einfach und besonders schnell arbeiten. Mann kann scripte ausführen oder ganz normal ordner oder Files erstellen.

## Wichtige Befehle

| Befehl | Beschreibung                                                      |
| ------ | ----------------------------------------------------------------- |
| sudo   | Befehle mit Rechten anderer Benutzerinnen bzw. Benutzer ausführen |
| ls     | Verzeichnisinhalte auflisten                                      |
| cd     | Navigation im Verzeichnisbaum                                     |
| touch  | Neue Datei erstellen                                              |
| nano   | Datei bearbeiten                                                  |
| mkdir  | Neues Verzeichnis erstellen                                       |
| rm     | Datei entfernen                                                   |
| rmdir  | Verzeichnis entfernen                                             |
| mv     | Datei oder Verzeichnis verschieben oder umbenennen                |
| cp     | Datei oder Verzeichnis kopieren                                   |
| cat    | Datei-Inhalte zusammenführen                                      |
| echo   | String auf der Standardangabe ausgeben                            |
| clear  | Terminal leeren                                                   |
| ping   | Server anfragen und Latenz messen                                 |
| apt    | Software-Pakete herunterladen und verwalten                       |
| chmod  | Zugriffsrechte verwalten                                          |
| man    | Benutzerhandbuch aufrufen                                         |

### Datei Erstellen Bearbeiten

1. Datei erstellen mit `touch text.txt`
2. Datei Öffnen mit `nano text.txt` nun kannst du etwas rein Schreiben
3. Speichern und Schliessen Strg S & Strg X
4. Datei inhalt anzeigen mit `cat text.txt`

# Aufgaben

## Aufgabe 1

Erstelle einen Ordner namens `ordner` und erstelle darin ein txt file mit dem Inhalt `Hallo Welt`. Benenne nun das txt file um zu `file.txt`

## Aufgabe 2

Erstelle einen Ordner namens `ordner` und erstelle darin ein txt file. 

# Github

Github ist eine art One Drive oder Google Drive für Code. GitHub ist ein [Onlinedienst](https://de.wikipedia.org/wiki/Onlinedienst "Onlinedienst") zur [Softwareentwicklung](https://de.wikipedia.org/wiki/Softwareentwicklung "Softwareentwicklung") und [Versionsverwaltung](https://de.wikipedia.org/wiki/Versionsverwaltung "Versionsverwaltung") für Softwareprojekte.

## Aufgabe 1

Erstelle einen Github account und melde dich an.

### Aufgabe 2

Um nun den Compi mit deinem Github account zu verbinden folge dieser Anleitunug

Öffne das Terminal und gehe in den ssh folder `cd ~/.ssh`.

kopiere nun den inhalt von id_rsa.pub und füge in bein github unter ssh ein. Dies findest du indem du rechts oben auf dein Avatar klickst und dann auf settings. Bei Settings musst du unter SSH und GPG keys auf den button new SSH key drücken und nun kannst du den inhalt von id_rsa.pub einfügen.

### Aufgabe 3

Erstelle nun auf Github Repository und versuche dieses zu clonen (kopieren).

für dies benötigst du den befehl git clone "ssh key" dieser findest du im repo beim button code unter SSH.

### Aufgabe 4

Erstelle nun lokal in dem Ordner, den du gerade heruntergeladen hast, eine Datei und schreibe etwas hinein. Öffne nun das Terminal in diesem Ordner.

Jetzt gibt es drei wichtige Befehle

git add` Mit diesem Befehl sagst du Github welche Dateien du hochladen (pushen) möchtest.

`git add`. Mit einem Punkt wählst du alle Dateien aus, an denen du etwas geändert hast.

Mit `git add file_Name` wählst du die angegebene Datei aus.

git commit -m "commit message"`.

Mit git commit speicherst du die ausgewählten Dateien. Zusätzlich kannst du noch eine commit message angeben, in der du sagst, was du hinzugefügt oder geändert hast.

`git push -u origin`

Bis jetzt ist alles lokal passiert mit git push lädst du die Commits hoch.

Nun führe diese Befehle aus und schaue auf Github ob sich etwas geändert hat.

### Aufgabe 5

Nun kannst du noch zusätzliche Branches machen. Diese erstellst du mit dem Befehl

git branch -m "branch name"`

Jetzt kannst du das gleiche machen wie in Aufgabe vier. Wichtig: Du musst zuerst in dem Ordner, in dem du dich befindest, etwas anpassen, zum Beispiel eine neue Datei erstellen.

Nun gibt es drei wichtige befehle

`git add` Mit diesem befehl sagst du Github welche files hochladen (pushen) möchtest. 

`git add `. Mitt einem Punkt wählst du alle files aus bei dennen du etwas geändert hast

`git add file_Name` wählst du das angegebene File aus.

`git commit -m "commit message"`

Mit git commit Speicherst du die Ausgewählten files. Ebenfalls kannst du noch eine Commit Message angeben in welcher du sagen kannst was du hinzugefügt oder geändert hast.

`git push -u origin`

Bis Jetzt ist alles lokal passiert mit git push lädst du die commits hoch.

Füge nun diese befehle aus und schau auf Github nach ob sich etwas verändert hat.

### Aufgabe 5

Nun kann man noch zusätzlich branchs machen. Diese erstellt man mit dem befehl

`git branch -m "branch name"`

Nun kannst du das gleiche machen wie bei Aufgabe vier. Wichtig du musst zuerst etwas im Ordner in dem du dich befinden anpassan z.b. ein neues file erstellen.

Gehe nun wider auf Github und nun solltest du die meldung bekommen einen Merge Request zu machen. Erstelle einen und Merge ihn.