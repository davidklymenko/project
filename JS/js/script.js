"use sctrict"

const numberOfFilms = + prompt("Скільки фільмів ви вже переглянули?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {
      'logan': '8.1'
    },
    actors:{},
    genres:[],
    privat: false
};

const a = prompt('Один із останіх переглянутих фільмів?', ''),
      b = prompt('Наскільки оцінете його?', '');
      c = prompt('Один із останіх переглянутих фільмів?', ''),
      d = prompt('Наскільки оцінете його?', '');

personalMovieDB[a] = b;
personalMovieDB[c] = d;

console.log(personalMovieDB);