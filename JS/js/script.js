"use strict"

const answersOfFilms = + prompt('How many movies you watch?', '');

const payNewMoviesCinema = {
    count: answersOfFilms,
    movies: {
        'logan': '8.1'
    },
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Last one movie you watch?',''),
      b = prompt('How much do you rate it?','');
      c = prompt('Last one movie you watch?',''),
      d = prompt('How much do you rate it?','');

payNewMoviesCinema[a] = b;
payNewMoviesCinema[c] = d;
      
console.log(payNewMoviesCinema);