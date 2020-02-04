// // import './util.js'
import { isAdult, canDrink } from './util.js';


console.log("app.js webpackRunning!!");
let age = 18
console.log( isAdult(age)+' y '+canDrink(age));



//person.js
//export isAdult > 18 = true
//export canDrink true 18