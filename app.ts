import { Movie, Logger, CastMember as Actor } from "./interfaces";
import { Performer, documentary } from "./classes";
import * as Utility from "./functions";

let inventory: Array<Movie> = Utility.GetAllMovie();

let purgeMovies: Array<Movie> = Utility.Purge(inventory);

purgeMovies.forEach(movie => console.log(movie.title));

let purgedNums: Array<number> = Utility.Purge<number>([1,2,3,4,5 ]);
console.log(purgedNums);