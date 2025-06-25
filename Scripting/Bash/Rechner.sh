#!/bin/bash

start () {
    rechnung=$(dialog --inputbox "Taschenrechner:" 10 50 2>&1 >/dev/tty)
    ans=$(($rechnung))
    dialog --msgbox "Das Ergebniss: $ans" 10 50
    start
}

start