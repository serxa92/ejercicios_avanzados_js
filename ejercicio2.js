/* Dado el siguiente código usa **forof** y **forin** para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.

Es decir, la media de volumen de todos los volumenes juntos. */

const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Santiago",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Laura",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

//creo la variable totalVolume y la inicializo en 0
let totalVolume = 0;

//creo la variable counter y la inicializo en 0
let counter = 0;

//recorro el array de usuarios
for (const user of users) {
  //recorro el objeto de sonidos favoritos de cada usuario
  for (const sound in user.favoritesSounds) {
    //sumo el volumen de cada sonido favorito al totalVolume
    totalVolume += user.favoritesSounds[sound].volume;
    //incremento el contador
    counter++;
  }
}
//calculo la media del volumen de todos los sonidos favoritos
const averageVolume = totalVolume / counter;
//muestro la media del volumen de todos los sonidos favoritos
console.log(averageVolume);
