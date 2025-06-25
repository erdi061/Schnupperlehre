#!/bin/bash

game () {
searchedNumber=$(( $RANDOM % 10 + 1 ))
userNumber=0
playAgain=0
Tries=0

echo "Wilkommen zum Random Number Game"
echo "Errate die gesuchte Zahl"
    while [ $userNumber -ne $searchedNumber ]; do 
        echo "gib eine Zahl ein zwischen 1 & 10"
        read userNumber

        if [ $userNumber -gt $searchedNumber ]; then
            echo "Your guessed number was higher than the searched number"
        elif [ $userNumber -lt $searchedNumber ]; then
            echo "Your guessed number was lower than the searched number"
        fi
        ((Tries++))
    done
echo "du hast die gesuchte Zahl herausgefunden die Zahl wahr $searchedNumber"
echo "du hast $Tries versuche gebraucht" 
echo "möchtest du nochmals Spielen yes(1) no(2)"
read playAgain
if [ $playAgain -eq 1 ]; then
    game
else 
    echo "Danke fürs Spielen"
fi
}

game


