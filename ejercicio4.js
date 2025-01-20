/* 1. Crea una función llamada **findArrayIndex** que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parámetro.

Haz varios ejemplos y compruébalos.
2. Usando la función anterior benefíciate de poder conocer el **indice** del array para crear una función llamada **removeItem** que, pasándole un array y un texto como parámetros (los mismos parámetros que en el anterior ejercicio), llame a la función anteriormente creada findArrayIndex y obtén el indice para posteriormente usar la función de javascript .splice() para eliminar el elemento del array.

Es decir, tienes que crear una función que elimine elementos del array y retorne el nuevo array sin el elemento, apoyándote en **findArrayIndex**.

Finalmente retorna el array.

De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente. */


function findArrayIndex(array, text) {
    //Tu codigo
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

//creo la función findArrayIndex que recibe como parámetros un array y un texto
function findArrayIndex(array, text) {
  //devuelvo el índice del array 
  return array.indexOf(text);
}

/* console.log(findArrayIndex(mainCharacters, "Rey")); */

//creo la función removeItem que recibe como parámetros un array y un texto
function removeItem(array, text) {
  //creo la variable index y le asigno el valor que devuelve la función findArrayIndex
  const index = findArrayIndex(array, text);
  //elimino el elemento del array
  array.splice(index, 1);
  //devuelvo el array
  return array;
}

/* console.log(removeItem(mainCharacters, "Rey")); */


// aqui pruebo otros ejemplos

const animals = ["dog", "cat", "bird", "fish", "rabbit", "hamster"];

console.log(findArrayIndex(animals, "fish"));

console.log(removeItem(animals, "fish"));