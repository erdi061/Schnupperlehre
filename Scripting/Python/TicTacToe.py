class Player:
    def __init__(self, name, symbol):
        self.name = name
        self.symbol = symbol
        self.score = 0

# Function to print Tic Tac Toe
def print_tic_tac_toe(values):
    print("\n")
    print("\t     |     |")
    print("\t  {}  |  {}  |  {}".format(values[0], values[1], values[2]))
    print('\t_____|_____|_____')

    print("\t     |     |")
    print("\t  {}  |  {}  |  {}".format(values[3], values[4], values[5]))
    print('\t_____|_____|_____')

    print("\t     |     |")

    print("\t  {}  |  {}  |  {}".format(values[6], values[7], values[8]))
    print("\t     |     |")
    print("\n")


# Function to print the score-board
def print_scoreboard(players):
    print("\t--------------------------------")
    print("\t              SCOREBOARD       ")
    print("\t--------------------------------")

    for player in players:
        print("\t   ", player.name, "\t    ", player.score)

    print("\t--------------------------------\n")


# Function to check if any player has won
def check_win(player_pos):
    # All possible winning combinations
    soln = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]

    # Loop to check if any winning combination is satisfied
    for x in soln:
        if all(y in player_pos for y in x):
            # Return True if any winning combination satisfies
            return True
    # Return False if no combination is satisfied
    return False


# Function to check if the game is drawn
def check_draw(player_pos):
    if len(player_pos) == 9:
        return True
    return False


# Function for a single game of Tic Tac Toe
def single_game(players):
    # Represents the Tic Tac Toe
    values = [' ' for _ in range(9)]

    # Stores the positions occupied by X and O
    player_pos = {player.symbol: [] for player in players}

    # Game Loop for a single game of Tic Tac Toe
    while True:
        print_tic_tac_toe(values)

        # Try exception block for MOVE input
        try:
            print("Player", players[0].name, "turn. Which box? : ", end="")
            move = int(input())
        except ValueError:
            print("Wrong Input!!! Try Again")
            continue

        # Sanity check for MOVE input
        if move < 1 or move > 9:
            print("Wrong Input!!! Try Again")
            continue

        # Check if the box is not occupied already
        if values[move - 1] != ' ':
            print("Place already filled. Try again!!")
            continue

        # Update game information

        # Updating grid status
        values[move - 1] = players[0].symbol

        # Updating player positions
        player_pos[players[0].symbol].append(move)

        # Function call for checking win
        if check_win(player_pos[players[0].symbol]):
            print_tic_tac_toe(values)
            print("Player", players[0].name, "has won the game!!")
            print("\n")
            return players[0]

        # Function call for checking draw game
        if check_draw(player_pos):
            print_tic_tac_toe(values)
            print("Game Drawn")
            print("\n")
            return None

        # Switch player moves
        players = players[::-1]


if __name__ == "__main__":
    print("Player 1")
    player1_name = input("Enter the name: ")
    player1 = Player(player1_name, 'X')
    print("\n")

    print("Player 2")
    player2_name = input("Enter the name: ")
    player2 = Player(player2_name, 'O')
    print("\n")

    players = [player1, player2]

    print_scoreboard(players)

    # Game Loop for a series of Tic Tac Toe
    # The loop runs until the players quit
    while True:
        # Player choice Menu
        print("Turn to choose for", players[0].name)
        print("Enter 1 for X")
        print("Enter 2 for O")
        print("Enter 3 to Quit")

        # Try exception for CHOICE input
        try:
            choice = int(input())
        except ValueError:
            print("Wrong Input!!! Try Again\n")
            continue

        # Conditions for player choice
        if choice == 1:
            players[0].symbol = 'X'
            players[1].symbol = 'O'
        elif choice == 2:
            players[0].symbol = 'O'
            players[1].symbol = 'X'
        elif choice == 3:
            print("Final Scores")
            print_scoreboard(players)
            break
        else:
            print("Wrong Choice!!!! Try Again\n")

        # Play a single game
        winner = single_game(players)

        # Edits the scoreboard according to the winner
        if winner:
            winner.score += 1

        print_scoreboard(players)

        # Switch player who chooses X or O
        players = players[::-1]
