"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Purge = exports.logSearchResults = exports.getMoviesByDirector = exports.GetTitles = exports.PrintMovieInfo = exports.GetAllMovie = void 0;
function GetAllMovie() {
    return [
        { title: 'A New Hope', director: 'George Lucas', yearReleased: 1977, streaming: true },
        { title: 'The Empire Strickes BAck', director: 'Irvin Kershner', yearReleased: 1980, streaming: true },
        { title: 'Return of the Jedi', director: 'Richard Marquand', yearReleased: 1983, streaming: true },
        { title: 'Attack of the clones', director: 'George Lucas', yearReleased: 2002, streaming: false },
        { title: 'The last jedi', director: 'Rian Johnson', yearReleased: 2017, streaming: true }
    ];
}
exports.GetAllMovie = GetAllMovie;
function GetReview(title) {
    if (title == 'A New Hope') {
        return 'An instant class';
    }
    else {
        return Math.floor(Math.random() * 10);
    }
}
function PrintMovieInfo(movie) {
    console.log(`Title: ${movie.title}`);
    console.log(`Year released: ${movie.yearReleased}`);
    console.log(`Director: ${movie.director}`);
}
exports.PrintMovieInfo = PrintMovieInfo;
function GetTitles(director, streaming) {
    const allMovies = GetAllMovie();
    const searchResult = [];
    if (streaming !== undefined) {
        for (let movie of allMovies) {
            if (movie.director === director && movie.streaming === streaming) {
                searchResult.push(movie.title);
            }
        }
    }
    else {
        for (let movie of allMovies) {
            if (movie.director === director) {
                searchResult.push(movie.title);
            }
        }
    }
    return searchResult;
}
exports.GetTitles = GetTitles;
//let myMovie: Movie = {
//  title: 'Rouge One',
//  director: 'Gareth Edward',
//  yearReleased: 2016,
//  streaming: true,
//  length: 133,
//  logReviwed: (review: string) => console.log(`Review: ${review}`)
//}
//let favoriteCastMember: CastMember = new Performer();
//favoriteCastMember.name = 'Daisy';
//favoriteCastMember.rehearse(25);
//let printReview: ReviewLogger;
//printReview = (review: string) => console.log(`viewer review: ${review}`);
//printReview('I wanna see you again!')
//PrintMovieInfo(myMovie);
//if (myMovie.logReviwed){
//  myMovie.logReviwed('A masterpiece');
//}
//function CreateMovieId (name: string, id : number){
//  return name + id;
//}
//let IdGenerator: (chars: string, nums : number) => string;
//IdGenerator = CreateMovieId;
//IdGenerator = (name: string, id: number) => name + id;
//let newID: string = IdGenerator('Jedi', 15);
//console.log(newID);
//let movies: string[] = GetTitles('George Lucas', true);
//movies.forEach(title => console.log(title));
//PrintMovieInfo('A New Hope', 1977, 'Carrie', 'Mark');
//const LogMessage = (message: string) => console.log(message);
//LogMessage('Enjoy the movie!');
function getMoviesByDirector(director) {
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            let foundMovies = GetTitles(director);
            if (foundMovies.length > 0) {
                resolve(foundMovies);
            }
            else {
                reject('No movie is found for that director');
            }
        }, 2000);
    });
    return p;
}
exports.getMoviesByDirector = getMoviesByDirector;
function logSearchResults(director) {
    return __awaiter(this, void 0, void 0, function* () {
        let foundMovies = yield getMoviesByDirector(director);
        console.log(foundMovies);
    });
}
exports.logSearchResults = logSearchResults;
function Purge(inventory) {
    //implement some fancy business logic
    //return the purge items
    return inventory.splice(3, inventory.length);
}
exports.Purge = Purge;
