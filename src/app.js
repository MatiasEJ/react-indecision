// // import './util.js'
//install > import > use
// import validator from 'validator';
// import senior, { isAdult, canDrink } from './util.js';
// console.log("app.js webpackRunning!!");
// let age = 180
// console.log( isAdult(age)+' y '+canDrink(age));
// console.log(validator.isEmail('test@juan.com'));

import React from 'react';
import ReactDOM from 'react-dom';
import IndecApp from './Components/IndecApp'
import 'normalize.css/normalize.css'
import './styles/styles.scss'



ReactDOM.render(<IndecApp  />, document.getElementById("app"));


