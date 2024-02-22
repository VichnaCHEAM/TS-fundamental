"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Favorites = exports.Course = exports.Musical = exports.Documentary = exports.Performer = void 0;
class Performer {
    constructor() {
        this.name = " ";
        this.email = "";
        this.role = "";
    }
    rehearse(sencNumber) {
        console.log(`${this.name} is rehearse sence number ${sencNumber}.`);
    }
}
exports.Performer = Performer;
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
class Documentary extends Video {
    constructor(newTitle, newyear, subject) {
        super(newTitle, newyear);
        this.subject = subject;
    }
    printItem() {
        super.printItem();
        console.log(`Subject: ${this.subject} (${this.year}.)`);
    }
    printCredits() {
        console.log(`Producer: ${this.producer}.`);
    }
}
exports.Documentary = Documentary;
let Musical = class extends Video {
    printCredits() {
        console.log(`Musical credits: ${this.producer}.`);
    }
};
exports.Musical = Musical;
let myMusical = new exports.Musical('Grease', 1978);
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
exports.Course = Course;
class Favorites {
    constructor() {
        this._items = new Array;
    }
    add(item) {
        this._items.push(item);
    }
    getFirst() {
        return this._items[0];
    }
}
exports.Favorites = Favorites;
