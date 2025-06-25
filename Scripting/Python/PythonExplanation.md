# Programmieren mit Python

## Erstes Script

1. Öffne Visual Studio Code
2. Erstelle eine neues file `hello.py`
3. Füge eine Ausgabe ein mit dem Text "Hallo Welt" `print("Hello, World!")`
4. Führe die Datei im Terminal aus. `python3 hello.py`

```python
print("Hello, World!")
```

## Erweiterungen

### Variablen

1. Erstellen eine Variable mit dem Namen "user", in welchem wir den Namen des Benutzers speichern. `user = Fritz`
2. Verwende die `user` Variable in deinem Gruss damit das Programm "Hallo Fritz" ausgibt. Variablen kannst du mit. `print(user)"`

```python
user = "John"
print(user)
```

### Benutzer Eingaben

Fragen des namens, Eingabe des namens und weise den eingegebenen Wert der Variable user zu.  `user = input("Wie heisst du?")`

```python
user = input("Wie heisst du? ")
print("Hallo" + user)
```

### Bedingungen

1. Teile dem Benutzer eine speziellen Gruss mit, wenn er den Namen "Fritz" hat. 

```python
user = input("Wie heisst du? ")
print("Hallo " + user)
if user == "Fritz":
  print("Schön, dass du da bist!")
```

### Schleifen

1. Erstelle eine schleife welche 6 mal durchlaufen wird

```python
 i = 1
while i < 6:
  print(i)
  i += 1
```

### Funktionen

Funktionen helfen uns zusammengehörende Befehle zu vereinfachen.

1. Erstelle eine Funktion mit namen "sayHello" und rufe sie auf.

```python
def sayHello():
  user = input("Wie heisst du? ")
  print("Hallo " + user)
  if user == "Fritz":
    print("Schön, dass du da bist!")

sayHello()
```

Funktionen machen Programmteile wiederverwendbar. Rufe zweimal 'sayHello' auf. Was passiert?

### Klassen

Klassen helfen uns zusammengehörende Methoden zu vereinfachen. Eine Klasse ist wie ein Bauplan für ein Objekt. Ein Objekt ist eine Art variabel. nur das man nicht nur einen wert drin speichern kann sondern so viele wie man möchte. zum beispiel bei der Klasse Person. Kannst du den namen und das alter speichern.

```python
class Person:
    def __init_(self, name, age=10):  # Konstruktor
        self.name = name
        self.age = age
```

In diesem Beispiel hat die Klasse Person zwei Eigenschaften (name und age). Die Aktion `__init__` ist ein spezieller Konstruktor, der aufgerufen wird, wenn ein neues Objekt der Klasse erstellt wird. Das Alter ist bereits gesetzt diese person ist 10 der namen ist noch nicht gesetzt.

Um ein Objekt der Klasse zu erstellen und auf die Eigenschaften und Aktionen zuzugreifen, verwenden wir den Klassennamen gefolgt von Klammern, ähnlich wie bei einer Funktion:

```python
  person = Person("John", 25)
  print(person.name)  # Ausgabe: John
  print(person.age)  # Ausgabe: 25
```

Beispiel eines Objektes bei welchem man den namen im Terminal angeben kann.

```python
  persnon = Person(input("What is your name person:"))
  print(person.name)  # Ausgabe: der Name welcher eingegeben wurde
  print(person.age())  # Ausgabe: 10 dies ist im Konstruktor angegeben wenn man dies nicht überschreibt bleibt dies immer.
```