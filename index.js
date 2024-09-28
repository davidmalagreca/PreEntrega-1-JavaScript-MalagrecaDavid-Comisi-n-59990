//FUCTION
function saludar(saludar) {
    console.log(saludar);
}

saludar("Bienvenidos a nuestra comunidad. Explora y elige tu estilo.");
saludar("¡Eliga entre los articulos deseados para fijar precios!");

//-----------------------------------------------------------------------------------

//VARIABLES & CONSTANTES-------------------------------------------------------------


const remera = 23500;
const buzo = 45000;
const pantalon = 75000;
const cardigan = 55000;

let total = 0;
let indumentaria;

while (true) {
    indumentaria = prompt("¿Qué indumentaria quieres comprar? (remera, buzo, pantalon, cardigan o escribe 'terminar' para finalizar)");

    if (indumentaria.toLowerCase() === "terminar") {
        break;
    }

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
            console.log("No has elegido una indumentaria válida. Por favor, elige entre remera, buzo, pantalon o cardigan.");
            continue;
    }

    total += precio; 
    console.log(`Agregaste ${indumentaria} que cuesta ${precio.toLocaleString('es-ES')} pesos.`);
}

console.log(`El total de tu compra es: ${total.toLocaleString('es-ES')} pesos.`);

