const defaultGenre = "Unknown";

let first = {
    title: "The Matrix",
    director: "Wachowskis",
    year: 1999,
    genre: "Sci-Fi",
    }
let second = {
    title: "Inception",
    director: "Nolan",
    year: 2010,
    genre: "Sci-Fi",
    }
let third = {
    title: "Parasite",
    director: "Bong",
    year: 2019,
    genre: "Drama",
    }

let movies = [first, second, third];
console.log(movies);
// movies.push(first);
// movies.push(second);
// movies.push(third);
// console.log(movies);



function printMovies(movies) {
    for (let i =0; i < movies.length; i++) {
        let movie = movies[i];
        if (!movies.title) {
            movies.title = "Unknown";
        }
        if (!movies.director) {
            movies.director = "Unknown";
        }
    }
    console.log(`1. Title: ${first.title}, Director: ${first.director}, Year: ${first.year}, Genre: ${first.genre}`)
    console.log(`2. Title: ${second.title}, Director: ${second.director}, Year: ${second.year}, Genre: ${second.genre}`)
    console.log(`3. Title: ${third.title}, Director: ${third.director}, Year: ${third.year}, Genre: ${third.genre}`)
    console.log(movies.length)
}

printMovies(movies)