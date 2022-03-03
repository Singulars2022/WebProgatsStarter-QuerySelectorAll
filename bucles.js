console.log("He cargado el fichero bucles.js");

// https://lenguajejs.com/javascript/dom/crear-elementos-dom/

// Voy a añadir un <p> al final del body
// let despedida = document.createElement("p");
// despedida.textContent = "¡Gracias por visitar nuestra Web!";
// despedida.style.color = "brown";

// let header = document.querySelector("header");
// header.appendChild(despedida);

// Voy a crear numGatos imagénes; y las voy añadir como hijos del footer
let gatito = document.createElement("img");
gatito.style.width = "50px";
gatito.src = "./img/logo.webp";

let footer = document.querySelector(".footer");

// Cómo haríamos un for para ejecutar este código tantas veces como numGatos
console.log("numGatos: ", numGatos);
for (let i = 0; i < numGatos; i++) {
    console.log("He entrado en el bucle!");

    gatito = document.createElement("img");
    gatito.style.width = "50px";
    gatito.src = "./img/logo.webp";

    footer.appendChild(gatito);
}



// Ejercicios Bucle y condicionales

// Ejercicio1: Si el número de gatos es 0; cambiar el texto por “No hay gatos por adoptar, felicidades!”


// Ejercicio2: Fíjate que ahora en el código hay 3 variables boleanas. Muestra cada uno de los botones de “Contactar”, solo en función de si cada una de las chicas está disponible. Es decir, en esta configuración, el botón de "Verónica" debería desaparecer. Pista: piensa que propiedad de .style tienes que modificar para ocultar, mediante CSS, el botón de la chica correspoiente.

let patriciaDisponible = true;
let veronicaDisponible = false;
let edurneDisponible = true;


