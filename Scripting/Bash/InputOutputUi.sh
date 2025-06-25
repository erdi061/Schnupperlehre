#!/bin/bash

dialog --msgbox "Welcome" 10 30

Variable1=$(dialog --inputbox "Name:" 10 30 2>&1 >/dev/tty)

Variable2=$(dialog --inputbox "Vorname:" 10 30 2>&1 >/dev/tty)

Variable3=$(dialog --inputbox "Alter:" 10 30 2>&1 >/dev/tty)

Variable4=$(dialog --inputbox "Adresse:" 10 30 2>&1 >/dev/tty)


dialog --infobox "Wilkommen ${Variable2} ${Variable1}.
\nDu bist ${Variable3} Jahre Alt.
\nDein Wohnort ist ${Variable4}." 10 30
