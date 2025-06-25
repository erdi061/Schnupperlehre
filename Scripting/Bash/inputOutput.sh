#!/bin/bash

echo "Name:"

read Variable1

echo "Vorname:"

read Variable2

echo "Alter:"

read Variable3

echo "Adresse:"

read Variable4

echo -e "\nWilkommen ${Variable2} ${Variable1}."

echo "Du bist ${Variable3} Jahre Alt."

echo "Dein Wohnort ist ${Variable4}."