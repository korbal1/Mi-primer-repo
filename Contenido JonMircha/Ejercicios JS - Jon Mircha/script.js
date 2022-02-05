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

//     recortar();
//     recortar("Hola Mundo", 4);

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

// const stringToArray = (cadena = "", separador = undefined) =>
//   !cadena
//     ? console.warn("No hay texto que recortar")
//     : separador === undefined
//     ? console.warn("No has indicado un parámetro de separación de la cadena")
//     : console.info(cadena.split(separador));

// stringToArray("Hola que tal", " ");
// stringToArray("Huracán, Boca, River, San Lorenzo, Independiente, Racing", ", ");

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

// const contadorPalabra = (cadena = "", palabra = "") => {
//   if (!cadena)
//     return console.warn("No has ingresado un texto sobre el que buscar");
//   if (!palabra === undefined)
//     return console.warn("No has ingresado una palabra a buscar");

//     let i = 0,
//     contador = 0;

//     while (i!==-1){
//       i = cadena.indexOf(palabra, i);
//       if(i!==-1) {
//         i++;
//         contador++;
//       }
//     }
//     return console.info(`La palabra ${palabra} se repite ${contador} veces en el texto ingresado`);
// };

// contadorPalabra("Hola mundo, adiós mundo. Me voy de este mundo", "mundo");

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

// const esPalindromo = (palabra = "") => {
//   if (!palabra)
//     return console.error("No has ingresado una palabra para comprobar si es palíndromo");
    
//     let reverse = palabra.split("").reverse().join("");

//     reverse === palabra
//     ? console.info(`Sí, la palabra "${palabra}" es un palíndromo`)
//     : console.info(`No, la palabra "${palabra}" no es un palíndromo`);
// }

// esPalindromo("");
// esPalindromo("neuquen");
// esPalindromo("salas");
// esPalindromo("airbag");
// esPalindromo("ratar");

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. 

// const eliminarPatron = (texto = "", patron = "") => {
//   (!texto)
//   ? console.warn("No has ingresado un texto")
//   : (!patron)
//   ? console.warn("No has ingresado patrón")
//   : console.info(texto.replace(new RegExp(patron,"ig"),""));
// }

// eliminarPatron();
// eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5");
// eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");

// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

// Un numero random entero que se tome del 1 al 100 inclusive y a eso se le suma 500. (Pensamiento propio)

// const quinientosYpico = () => console.info(Math.round((Math.random()) * 100) + 500);

// quinientosYpico();

// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
// const capicua = (numero = 0) => {
//     if(!numero) return console.warn("No ingresaste un número");

//     if (typeof numero!=="number") return console.error(`El valor "${numero}" NO es un número`);

//     //Convertir número a string para poder aplicar split.
//     numero = numero.toString();
//     let alReves = numero.split("").reverse().join("");

//     return (numero === alReves)
//     ? console.info(`Sí, es capicúa`)
//     : console.info(`No, amigo. No es capicúa`)
// }
// capicua();
// capicua(20502);

// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.




// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.




// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

// const edad = new Date(1988, 1, 13);
// console.log(edad);
// console.log(Date.now());

// console.log(edad.getFullYear());
// console.log(presente.getFullYear());


