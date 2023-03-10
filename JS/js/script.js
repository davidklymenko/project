"use strict"

const numberOfFilms = +prompt('How many movies you watch?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Last one movie you watch?', ''),
          b = prompt('How much do you rate it?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB[a] = b;
        console.log('done'); 
    } else {
        console.log('error');
        i--;
    }

}

console.log(personalMovieDB);
