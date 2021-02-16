"use strict";
let count = 0;
//Opretter et tomt array, som bliver kaldt "numbers"
const numbers = [];

window.addEventListener("DOMContentLoaded", loop);


function loop() {
//Når array'et indeholder mere end 8 elementer, så gør ...
    if(numbers.length > 8){
        //Den indbyggede funktion "pop()", fjerner det sidste element i array'et
        numbers.pop();
    }
    //"Numbers" er vores array og den benytter sig af en indbygget metode "unshift()"
    //Inde i parantensen indsætter man det element som man vil tilføje til array'et. 
    //Unshift bruges til at indsætte elementet forrest i Array'et
    //Push vil indsætte elementet bagerst (tilsidst i array'et)
    numbers.unshift(count);
    document.getElementById("counting").innerHTML = "(" + numbers.length + ") [" + numbers.toString() + "]";
    count++;

    setTimeout(loop, 600);
    
}