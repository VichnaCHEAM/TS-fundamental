import { CastMember, FavoriteItem} from "./interfaces";

 export class Performer implements CastMember {
  
    name: string = " ";
    email: string = "";
    role: string = "";
  
    rehearse(sencNumber: number): void {
      console.log(`${this.name} is rehearse sence number ${sencNumber}.`);
    }
  }

  abstract class Video {
      public _producer: string = '';
    //private _producer: string = '';
    static medium: string = 'Audio/Visual';

    get producer(): string {
      return this._producer.toUpperCase();
    }

    set producer(newProducer: string){
      this._producer = newProducer;
    }
    constructor( public title: string,public year: number){
      console.log(`Creating a new video`);

    }

    printItem(): void {
      console.log(`{this.title} was released in ${this.year}.`);
      console.log(`Medium: ${Video.medium}`);
    }

    abstract printCredits(): void;
  }

export class Documentary extends Video {
    constructor(newTitle: string, newyear: number, public subject: string){
      super(newTitle, newyear)
    }

    printItem(): void {
      super.printItem();
      console.log(`Subject: ${this.subject} (${this.year}.)`)
    }

    printCredits(): void {
      console.log(`Producer: ${this.producer}.`);
    }
  }

export let Musical = class extends Video {
    printCredits(): void{
      console.log(`Musical credits: ${this.producer}.`);
    }
  }
  let myMusical = new Musical('Grease', 1978);
  myMusical.producer = 'Sing-song Pictures';
  myMusical.printCredits();

export class Course extends class { title: string = ''; }{
    subject: string = '';
}


export class Favorites<T extends FavoriteItem> {
    private _items: Array<T> = new Array<T>;

    add(item: T): void {
        this._items.push(item);
    }

    getFirst(): T {
        return this._items[0];
    }

    find(title: string): T {
        return this._items.filter(item => item.title ===title)[0];
    }

    printTitles(): void {
        this._items.forEach(item => console.log(item.title));
    }

}