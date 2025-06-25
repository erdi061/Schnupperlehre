import random

class Player:
    def __init__(self, name, health=100):
        self.name = name
        self.health = health

def fight(attacker, opponent):
    attackprotect = int(input(f"\nIt's {attacker.name}'s turn, do you want to attack {opponent.name}(1) or heal yourself(2)?\n"))

    if attackprotect == 1 :
        attackDamage = random.randrange(7, 18)
        opponent.health -= attackDamage
        if opponent.health >= 0:
            print(f"\nYour attack was too weak! {opponent.name}'s health is still on {opponent.health}HP.")
    else:
        healing = random.randrange(3,23)
        attacker.health += healing
        print(f"\nYou got healed {attacker.name} has now {opponent.health}HP.")
    
def gamestart():
    Player1 = Player(input("\nWhat is your name player1:\n"))
    Player2 = Player(input("What is your name player2:\n"))
    
    while Player1.health >= 0 and Player2.health >= 0:
        fight(Player1, Player2)
        
        if Player2.health <= 0:
            print(f"\n{Player1.name} has won the 1v1 with a health of {Player1.health}HP!")
            break
        
        fight(Player2, Player1)
        
        if Player1.health <= 0:
            print(f"\n{Player2.name} has won the 1v1 with a health of {Player2.health}HP!")
            break

startgame = int(input("\nDo you want to play a 1v1?\nyes(1) no(2)\n"))

if startgame == 1:
    gamestart()

if startgame == 2:
    exit()