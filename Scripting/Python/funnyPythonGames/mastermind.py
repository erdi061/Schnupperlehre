import random
import sys

def game():
    print("Welcome to Mastermind!")
    print("Try to guess the secret code.")
    print("The code consists of 4 colors chosen from the following: red, green, blue, yellow, orange, purple.")
    print("For each guess, you will receive feedback in the form of black and white pegs.")
    print("Black pegs indicate a correct color in the correct position.")
    print("White pegs indicate a correct color in the wrong position.")
    print("You have 10 attempts to guess the code.")
    print("Good luck!")
    print("")


    colors = ["red", "green", "blue", "yellow", "orange", "purple"]
    secret_code = random.sample(colors, 4)
    attempts = 10   

    while attempts > 0:
        guess = input("Enter your guess (4 colors separated by spaces): ").split()
        
        if len(guess) != 4:
            print("Please enter exactly 4 colors.")
            continue
        
        if any(color not in colors for color in guess):
            print("Invalid colors. Please use the following colors: red, green, blue, yellow, orange, purple.")
            continue
        
        black_pegs = sum(g == s for g, s in zip(guess, secret_code))
        white_pegs = sum(min(guess.count(c), secret_code.count(c)) for c in set(guess)) - black_pegs
        
        print(f"Feedback: {black_pegs} black pegs, {white_pegs} white pegs")
        
        if black_pegs == 4:
            print("Congratulations! You've guessed the secret code!")
            print(f"You only needed {10 - attempts} attempts.")
            print("Thanks for playing!")

            do_you_want_to_play_again = input("Do you want to play again? (yes/no): ").strip().lower()
            if do_you_want_to_play_again == "yes":
                game()
            else:
                print("Thanks for playing! Goodbye!")
                sys.exit()
            break
        
        attempts -= 1
        print(f"You have {attempts} attempts left.")
    else:
        print(f"Sorry, you've run out of attempts. The secret code was: {' '.join(secret_code)}")

game()