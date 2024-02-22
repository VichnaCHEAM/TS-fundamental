import { Movie, Logger, CastMember as Actor } from "./interfaces";
import { Performer, Documentary, Favorites} from "./classes";
import * as Utility from "./functions";
import * as _ from "lodash";


let sportDoc: Documentary = new Documentary ('Baseball', 1977, 'History');

sportDoc.printItem();

let allMovies = Utility.GetAllMovie();


//log top 3 movies 

for ( let i = 0; i < 3; i++){
    console.log (`Rank ${i + 1}: ${allMovies[i].title}`);
}