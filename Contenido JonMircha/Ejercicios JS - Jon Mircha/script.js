// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

// const contarCaracteres = (cadena = "") =>
//   !cadena
//     ? console.warn("No ingresaste ninguna cadena")
//     : console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres.`);
// contarCaracteres("Hola Mundo");

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

// const recortar = (cadena = "", longitud = undefined) =>
//   !cadena
//     ? console.warn("No hay texto que recortar")
//     : console.info(cadena.slice(0, longitud));
// recortar("Hola Mundo", 4);

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

// const stringToArray = (cadena = "", separador = undefined) =>
//   !cadena
//     ? console.warn("No hay texto que recortar")
//     : separador === undefined
//     ? console.warn("No has indicado un parámetro de separación de la cadena")
//     : console.info(cadena.split(separador));

// stringToArray("Hola que tal", " ");

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

// const repetirTexto = (texto = "", veces = undefined) => {
//   if (!texto) return console.warn("No ingresaste un texto");

//   if (veces === undefined)
//     return console.warn("No has indicado la cantidad de veces");

//   if (veces === 0) return console.error("El número de veces no puede ser cero");

//   if (Math.sign(veces) === -1)
//     return console.error(
//       "La cantidad de veces a reptir el texto no puede ser indicada con un número negativo"
//     );

//   console.log(`${texto} `.repeat(veces));
// };
// repetirTexto();
// repetirTexto("Hola Mundo!");
// repetirTexto("Hola Mundo!", 0);
// repetirTexto("Hola Mundo!", -4);
// repetirTexto("Hola Mundo!", 3);

// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

// const textoInvertido = (texto) => {
//   !texto
//     ? console.warn("No has ingresado un texto a invertir")
//     : console.info(texto.split("").reverse().join(""));
// };
// textoInvertido("Hola Mundo!");

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

// const contadorPalabra = (texto = "", palabra = "") => {
//   if (!texto)
//     return console.warn("No has ingresado un texto sobre el que buscar");
//   if (palabra === undefined)
//     return console.warn("No has ingresado una palabra a buscar");

//     let i = 0; 
//     contador = 0;
    

//     return console.info(
//       `La ${palabra} se repite ${i} veces en el ${texto} ingresado`
//     );
// };


// contadorPalabra("Hola mundo adiós mundo", "mundo");






// Contador con While:
// let contador = 0;

// while (contador <= 5) {
//   console.log(contador);
//   contador++;  
// }






// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
