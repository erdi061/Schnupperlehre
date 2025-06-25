# 🧰 Git-Befehle Spickzettel

## 🔧 Git einrichten

| Befehl                                                     | Beschreibung                                              |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| `git config --global user.name "Dein Name"`                | Lege deinen Namen für Git-Festschreibungen (Commits) fest |
| `git config --global user.email "deine.email@example.com"` | Lege deine E-Mail-Adresse für Commits fest                |

## 🚀 Ein Projekt starten

| Befehl            | Beschreibung                                               |
| ----------------- | ---------------------------------------------------------- |
| `git init`        | Initialisiert ein neues Git-Repository im aktuellen Ordner |
| `git clone [URL]` | Klont ein Projekt inklusive kompletter Versionshistorie    |

## ✏️ Änderungen vornehmen

| Befehl                      | Beschreibung                                              |
| --------------------------- | --------------------------------------------------------- |
| `git status`                | Zeigt den aktuellen Status der Arbeitsverzeichnis-Dateien |
| `git add [Datei]`           | Fügt eine Datei zur Staging-Area hinzu                    |
| `git add .`                 | Fügt alle geänderten Dateien zur Staging-Area hinzu       |
| `git commit -m "Nachricht"` | Commit mit Nachricht erstellen                            |

## 📜 Projektverlauf anzeigen

| Befehl              | Beschreibung                                    |
| ------------------- | ----------------------------------------------- |
| `git log`           | Zeigt die Commit-Historie an                    |
| `git log --oneline` | Zeigt eine kompakte einzeilige Commit-Übersicht |

## 🌿 Mit Branches arbeiten

| Befehl                   | Beschreibung                                           |
| ------------------------ | ------------------------------------------------------ |
| `git branch`             | Listet alle lokalen Branches auf                       |
| `git branch [Name]`      | Erstellt einen neuen Branch                            |
| `git checkout [Name]`    | Wechselt zu einem anderen Branch                       |
| `git checkout -b [Name]` | Erstellt und wechselt zu einem neuen Branch            |
| `git merge [Name]`       | Führt den angegebenen Branch in den aktuellen zusammen |

## 🌐 Mit Remote-Repositories arbeiten

| Befehl                        | Beschreibung                                                 |
| ----------------------------- | ------------------------------------------------------------ |
| `git remote add origin [URL]` | Verknüpft das lokale mit einem entfernten Repository         |
| `git push origin [Branch]`    | Überträgt Commits eines Branches ins Remote-Repository       |
| `git pull`                    | Holt Änderungen vom Remote-Repository und führt sie zusammen |

## ↩️ Änderungen rückgängig machen

| Befehl                | Beschreibung                                               |
| --------------------- | ---------------------------------------------------------- |
| `git restore [Datei]` | Verwirft Änderungen an einer Datei                         |
| `git reset --hard`    | Setzt alle lokalen Änderungen im Arbeitsverzeichnis zurück |

## 💡 Nützliche Git-Tipps

* Nutze `git status`, um den Überblick zu behalten
* Verwende klare, aussagekräftige Commit-Nachrichten
* Commits lieber früh und oft machen
* Lege eine `.gitignore`-Datei an, um unerwünschte Dateien auszuschließen