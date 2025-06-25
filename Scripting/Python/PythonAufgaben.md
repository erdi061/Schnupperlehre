# Programmieren mit Python Aufgaben

## Aufgabe 1

Frage den Benutzer nach Informationen ab (Vorname, Nachname, Adresse, Lieblingsfarbe...) und gib diese Informationen anschließend aus.

## Aufgabe 2

Frage den Benutzer nach seiner Lieblingsstadt und gib diese aus. Füge einen besonderen Gruß hinzu, wenn der Benutzer deine Lieblingsstadt angibt.

## Aufgabe 3

Erstelle eine Funktion mit dem Namen `myCity`, in der du deine Logik von Aufgabe 2 verpackst. Rufe diese Funktion dann auf.

## Aufgabe 4

1. Erstelle eine neue Datei namens `TwoPlayerGame.py`.

2. Erstelle nun eine Klasse namens `Player` mit einem Konstruktor, der die Attribute `name` und `health` hat. Die `health` sollte auf 100 sein. Schaue im PythonExplanation nach wenn du dir nicht mehr sicher bist wie dies genau funktionert.

3. Erstelle eine Methode namens `startGame`. In dieser Methode:
   
   - Erstelle zwei `Player`-Instanzen und frage nach deren Namen.
   - Die Namen der Spieler sollen durch Benutzereingaben erfolgen.
   - Stelle sicher, dass das Spiel so lange läuft, wie das Leben (Health) beider Spieler größer als 0 ist. Mache dies mit hilfe einer While schlaufe. Das bedeutet es sollte in einer while schlaufe überprüft werden ob die Player ihre healt nicht unter 0 ist.
   - Rufe in der Schleife die Methode `fight(Player1, Player2)` und danach `fight(Player2, Player1)` auf, um den Kampf abwechselnd zwischen den beiden Spielern zu simulieren. Diese methoden must du noch nicht erstellen
   - Überprüfe nach jedem Kampf, ob einer der beiden Spieler weniger als 1 Leben hat. Falls `Player1` weniger als 1 Leben hat, gib aus, dass `Player2` gewonnen hat. Falls `Player2` weniger als 1 Leben hat, gib aus, dass `Player1` gewonnen hat.

4. Erstelle nun die Methode `fight(attacker, opponent)`. In dieser Methode:
   
   - Frage den Spieler (attacker) ab, ob er angreifen (`A`) oder sich heilen (`H`) möchte.
   - Falls der attacker angreift, füge dem opponent (Opfer) eine zufällige Menge an Schaden zu, die zwischen 5 und 20 liegt. Ziehe diesen Schaden von der Lebenspunkte des opponent ab. Gib aus, wie viel Schaden verursacht wurde und wie viel Leben der opponent danach noch hat.
   - Falls der attacker sich heilt, füge dem attacker eine zufällige Menge an Heilung hinzu, die zwischen 5 und 15 liegt. Stelle sicher, dass die Lebenspunkte des attacker 100 nicht überschreiten. Gib aus, wie viel Heilung hinzugefügt wurde und wie viel Leben der attacker danach hat.

5. Stelle sicher, dass in der Methode `startGame` die Methoden `fight(Player1, Player2)` und `fight(Player2, Player1)` aufgerufen werden und dass die Methode `startGame` gestartet wird.

6. **Du bist fertig und kannst nun spielen! 😊**

## Aufgabe 5

1. Erstelle eine neue Datei namens `TicTacToe.py`.

2. Erstelle eine Klasse namens `Player` mit einem Konstruktor, der die Attribute `name` und `symbol` hat.

3. Erstelle ein Tic-Tac-Toe-Board.
   
   - Erstelle ein leeres Array mit der Größe 9: `board = [' ' for _ in range(9)]`.
   
   - Erstelle eine Funktion `print_board`, um das Spielfeld anzuzeigen. Das Spielfeld sollte wie folgt aussehen, wobei die Werte aus dem Array angezeigt werden:
     
     |     |
     |     |   
_____|_____|_____
     |     |
     |     |    
_____|_____|_____
     |     |
     |     |    

4. Füge deinem Tic-Tac-Toe-Feld die Werte des Arrays hinzu. 
   
   - In jedem Feld sollte ein Wert des Arrays (entweder leer oder das Symbol eines Spielers) angezeigt werden. Verpacke dies in einer Funktion `print_board`, die nach jedem Zug aufgerufen wird, um den aktuellen Zustand des Spielfelds zu zeigen.

5. Erstelle eine Methode `startGame`.
   
   - Erstelle zwei `Player`-Instanzen und frage nach deren Namen.
   - Gib jedem Spieler ein Symbol: Spieler 1 erhält `X`, Spieler 2 erhält `O`.
   - Starte eine Schleife, in der abwechselnd die Methode `game(Player1)` und danach `game(Player2)` aufgerufen wird. Die Methode `game(Player)` wird später erstellt.

6. Erstelle die Methode `game(Player)`.
   
   - Zeige das aktuelle Spielfeld an, indem du `print_board()` aufrufst.
   - Frage den Spieler, an welcher Position er sein Symbol setzen möchte (eine Zahl zwischen 1 und 9).
   - Überprüfe, ob das gewählte Feld noch frei ist (d.h., ob der Eintrag im Array `board` an dieser Position ein Leerzeichen `' '` ist).
   - Falls das Feld frei ist, setze das Symbol des Spielers an diese Position und überprüfe, ob der Spieler gewonnen hat oder ob es ein Unentschieden gibt:
     - Verwende `check_win(player)` für die Gewinnüberprüfung.
     - Verwende `isTie()` für die Überprüfung eines Unentschiedens.
     - Gib aus, wer gewonnen hat oder ob es ein Unentschieden ist.
   - Falls das Feld belegt ist, gib aus, dass es ein ungültiger Zug war, und der Spieler sollte eine andere Position wählen.

7. Erstelle die Methode `check_win(Player)`.
   
   - Definiere ein Array mit allen möglichen Gewinnkombinationen (zum Beispiel `[0, 1, 2]` für die obere Reihe).
   
   - Verwende den folgenden Code, um zu überprüfen, ob der Spieler eine Gewinnkombination erreicht hat:
     
     ```python
     for combination in winning_combinations:
         if all(board[position] == player.symbol for position in combination):
             return True
     ```
   
   - Am Ende der Methode gib `False` zurück, wenn keine Gewinnkombination gefunden wurde.

8. Erstelle die Methode `isTie()`.
   
   - Überprüfe, ob das Spielfeld voll ist (d.h., kein Leerzeichen `' '` mehr in `board`):
     
     ```python
     if ' ' not in board:
         print("Es ist unentschieden!")
         return True
     ```
   
   - Gib `False` zurück, wenn es noch leere Felder gibt.

9. **Du bist fertig und kannst nun spielen! 😊**
