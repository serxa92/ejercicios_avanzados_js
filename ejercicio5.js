/* Crea una función llamada **rollDice()** que reciba como parámetro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función.

Que la función use el parametro para simular una tirada de dado y retornar el resultado.

Si no se te ocurre como hacer un numero aleatorio no te preocupes. Busca información sobre la función de JavaScript **Math.random()** */


//creamos una función que reciba un parámetro
function rollDice(faces) {
  //retornamos un número aleatorio entre 1 y el número de caras que queremos que tenga el dado
  return Math.floor(Math.random() * faces) + 1;
}

//llamamos a la función y le pasamos como parámetro el número de caras que queremos que tenga el dado
console.log(rollDice(6));
