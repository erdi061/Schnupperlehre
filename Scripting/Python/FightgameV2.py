import random

class Player:
    def __init__(self, name):
        self.name = name
        self.health = 100

def startGame():
    player1_name = input("Name von Spieler 1: ")
    player2_name = input("Name von Spieler 2: ")
    
    player1 = Player(player1_name)
    player2 = Player(player2_name)
    
    while player1.health > 0 and player2.health > 0:
        fight(player1, player2)
        if player2.health <= 0:
            print(f"{player1.name} hat gewonnen!")
            break
        fight(player2, player1)
        if player1.health <= 0:
            print(f"{player2.name} hat gewonnen!")
            break

def fight(attacker, opponent):
    action = input(f"{attacker.name}, möchtest du angreifen (A) oder dich heilen (H)? ").lower()
    
    if action == "a":
        damage = random.randint(5, 20)
        opponent.health -= damage
        opponent.health = max(0, opponent.health)  # Stellen sicher, dass health nicht negativ wird
        print(f"{attacker.name} greift {opponent.name} an und verursacht {damage} Schaden!")
        print(f"{opponent.name} hat jetzt {opponent.health} Leben.")
    
    elif action == "h":
        healing = random.randint(5, 15)
        attacker.health += healing
        attacker.health = min(100, attacker.health)  # Stellen sicher, dass health nicht über 100 geht
        print(f"{attacker.name} heilt sich um {healing}!")
        print(f"{attacker.name} hat jetzt {attacker.health} Leben.")

startGame()
