"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTitles = exports.PrintMovieInfo = exports.GetAllMovie = void 0;
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
class Video {
    get producer() {
        return this._producer.toUpperCase();
    }
    set producer(newProducer) {
        this._producer = newProducer;
    }
    constructor(title, year) {
        this.title = title;
        this.year = year;
        this._producer = '';
        console.log(`Creating a new video`);
    }
    printItem() {
        console.log(`{this.title} was released in ${this.year}.`);
        console.log(`Medium: ${Video.medium}`);
    }
}
//private _producer: string = '';
Video.medium = 'Audio/Visual';
/*Abstract Class
let vid: Video = new documentary ('The History of Movies', 2024, 'film history');
vid.producer = 'Sci-fi Pictures';
vid.printCredits(); */
//Class : Expression 
let Musical = class extends Video {
    printCredits() {
        console.log(`Musical credits: ${this.producer}.`);
    }
};
let myMusical = new Musical('Grease', 1978);
myMusical.producer = 'Sing-song Pictures';
myMusical.printCredits();
class Course extends class {
    constructor() {
        this.title = '';
    }
} {
    constructor() {
        super(...arguments);
        this.subject = '';
    }
}
