#!/bin/bash

game () {
searchedNumber=$(( $RANDOM % 10 + 1 ))
userNumber=0
playAgain=0
Tries=0

echo "Wilkommen zum Random Number Game"
echo "Errate die gesuchte Zahl"
    while [ $userNumber -ne $searchedNumber ]; do 
        userNumber=$(dialog --inputbox "gib eine Zahl ein zwischen 1 & 10" 15 30 2>&1 >/dev/tty)
        if [ $userNumber -gt $searchedNumber ]; then
            dialog --msgbox "Your guessed number was higher than the searched number" 10 30
        elif [ $userNumber -lt $searchedNumber ]; then
            dialog --msgbox "Your guessed number was lower than the searched number" 10 30
        fi
        ((Tries++))
    done

dialog --title "You won!" --msgbox "The corect number is: $searchedNumber \nTries: $Tries" 10 30
dialog --yesno "Do you wan't to play again?" 10 30 
playAgain=$?
echo "$playAgain"

if [ $playAgain -eq 0 ]; then
    game
else 
    echo "Danke fürs Spielen"
fi
}

game


