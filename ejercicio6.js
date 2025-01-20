/* Crea una función llamada **swap** que reciba un array y dos parametros que sean indices del array.

La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Es decir, intercambiar el lugar de un elemento por otro dentro del array.

Retorna el array resultante. */

const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
  ];

  //creamos la función swap
function swap(array, index1, index2) {
  //creamos una variable temporal para guardar el valor de la posición index1
    const temp = array[index1];
    //intercambiamos los valores de las posiciones index1 e index2
    array[index1] = array[index2];
    //asignamos el valor de la variable temporal a la posición index2
    array[index2] = temp;
    //retornamos el array resultante
    return array;
}

//imprimimos el resultado de la función swap
console.log(swap(fantasticFour, 0, 3)); 