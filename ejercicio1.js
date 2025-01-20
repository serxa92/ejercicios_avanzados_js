/* Dado el siguiente código usa **forof** para recorrer el array de películas, genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías.

Ten en cuenta que las categorías **no tienen que repetirse**.

Es decir, **const categorias = ["comedia", "aventura", "acción", "thriller", "animación"]**

Para filtrar las categorías puedes ayudarte de la función **.includes()**. */

const movies = [
  {
    title: "Bracula: Condemor II",
    duration: 192,
    categories: ["comedia", "aventura"],
  },
  {
    title: "Spider-Man: No Way Home",
    duration: 122,
    categories: ["aventura", "acción"],
  },
  {
    title: "The Voices",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
];
//array con las categorias
const categorias = ["comedia", "aventura", "acción", "thriller", "animación"];

//nuevo array de categorias
const moviesCategories = [];
//recorremos el array de peliculas
for (const movie of movies) {
  //recorremos el array de categorias
  for (const category of movie.categories) {
    //si la categoria no esta en el array de categorias la añadimos
    if (!moviesCategories.includes(category)) {
      moviesCategories.push(category);
    }
  }
}

console.log(moviesCategories);
