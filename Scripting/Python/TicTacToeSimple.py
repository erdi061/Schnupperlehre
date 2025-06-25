class Player:
    def __init__(self, name, symbol):
        self.name = name
        self.symbol = symbol

board = [' ' for _ in range(9)] 

def print_board():
    print("Tic Tac Toe")
    print(f" {board[0]} | {board[1]} | {board[2]} ")
    print("___|___|___")
    print(f" {board[3]} | {board[4]} | {board[5]} ")
    print("___|___|___")
    print(f" {board[6]} | {board[7]} | {board[8]} ")
    print("   |   |   ")

def isTie():
    if ' ' not in board:
        print_board()
        print('It\'s a tie!')
        return True
    return False

def check_win(player):
    winning_combinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  # rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  # columns
        [0, 4, 8], [2, 4, 6]  # diagonals
    ]

    for combination in winning_combinations:
        if all(board[position] == player.symbol for position in combination):
            return True

    return False

def game(player):
    print_board()
    position = int(input(' Enter a position (1-9): ')) - 1
    if board[position] == ' ':
        board[position] = player.symbol
        if check_win(player):
            print_board()
            print('Player', player.name, 'wins!')
            return True
        if isTie():
            return True
    else:
        print('Invalid move. Try again.')
    return False

def play_game():
    player1_name = input("\nWhat is your name player1:\n")
    player2_name = input("What is your name player2:\n")
    
    Player1 = Player(player1_name,'X')
    Player2 = Player(player2_name,'O')

    print(f"{Player1.name} starts")

    while not check_win(Player1) and not check_win(Player2):
        game(Player1)
        game(Player2)


play_game()