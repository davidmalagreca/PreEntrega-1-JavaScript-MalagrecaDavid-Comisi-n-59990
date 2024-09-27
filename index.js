let remera = 23500;
let buzo = 45000;
let pantalon = 75000;
let cardigan = 55000;

let indumentaria = prompt("¿Qué indumentaria quieres comprar? (remera, buzo, pantalon, cardigan)");

let precio;

switch (indumentaria.toLowerCase()) {
    case "remera":
        precio = remera;
        break;
    case "buzo":
        precio = buzo;
        break;
    case "pantalon":
        precio = pantalon;
        break;
    case "cardigan":
        precio = cardigan;
        break;
    default:
        console.log("No has elegido una indumentaria válida.");
        break;
}

if (precio) {
    console.log("Hola, elegiste " + indumentaria + " que cuesta " + precio.toLocaleString('es-ES') + " pesos.");
}
