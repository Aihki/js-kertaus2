'use strict';

const movies = [];

let add = true;
while (add) {
  const title = prompt('give a movie name');
  const rating = prompt('give rating (1-5)');

  const movie = {title, rating};
  movies.push(movie);

  add = confirm('do you wanna add more');
}

/*
const movies = [
  {title: 'No country for old man', rating: '4'},
  {title: 'Star wars', rating: '5'},
  {title: 'jaws', rating: '1'},
  {title: 'pokemon', rating: '3'},
];
*/

function sortMovies(a, b) {
  const compare = b.rating - a.rating;
  return compare;
}
movies.sort(sortMovies);
console.log(movies);

for (const movie of movies) {
  const td1 = document.createElement('td');
  td1.textContent = movie.title;

  const td2 = document.createElement('td');
  td2.textContent = movie.rating;

  const tr = document.createElement('tr');
  tr.append(td1);
  tr.append(td2);

  document.getElementById('target').append(tr);
}

const favourite = movies[0];
document.getElementById('fav').textContent = favourite.title;
