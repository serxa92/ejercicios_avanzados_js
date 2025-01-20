/* Dado el siguiente código usa **forof** y **forin** para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito.

Para ello recorre la lista de usuarios y usa **forin** para recoger el nombre de los sonidos que el usuario tenga como favoritos.

Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.

Este ejercicio es un poco complicado con los conocimientos actuales pero...a la vez un buen reto y oportunidad para comprender que hay muchas formas de hacer las cosas en JavaScript. */

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
  //creo un objeto vacío sounds
  let sounds = {};
    //recorro el array de usuarios
    for (const user of users) {
        //recorro el objeto de sonidos favoritos de cada usuario
        for (const sound in user.favoritesSounds) {
            //si el sonido ya existe en el objeto sounds incremento su valor en 1
            if (sounds[sound]) {
                sounds[sound]++;
            //si el sonido no existe en el objeto sounds lo añado con valor 1
            } else {
                sounds[sound] = 1;
            }
        }
    }
    //muestro el objeto sounds
    console.log(sounds);