"use strict";

alert("EN PLAYGROUND");

// let user = {
//     name: 'EL DIEGO ',
//     edad: 8,
//     lugar: ['buenos aires','lo de tu vieja'],
//     opt: ['one','two'],
//     prntPlaces(){
//         return this.lugar.map((city)=> this.name + 'vivio en lo de '+city);

//     }

// };

// console.log(user.prntPlaces());

// function getLocation(lugar){
//     if(lugar == 'casa'){
//         return  <p> location: {lugar} </p>;
//     }
// }

// let count = 0;
// const addOne = ()=>{
//     count++;
//     renderCount();
// }
// const minusOne = ()=>{
//     count--;
//     renderCount();
// }
// const resetR = ()=>{
//     count = 0;
//     renderCount();
// }

// let template2 = (
//     <div>
//         <h1>Counter:{count}</h1>
//         <button onClick={addOne}>+1</button>
//         <button onClick={resetR}>0</button>
//         <button onClick={minusOne}>-1</button>

//         <h1> {user.name ? user.name : 'anonimo'} </h1> 
//         {(user.age && user.age >= 18 ) && <p>Age: {user.age}</p>}
//         {getLocation(user.lugar)}
//         {user.opt.length >=0 && <p>Opciones: {user.opt[0]} {user.opt[1]}</p>}

//     </div>
// );


// let appRoot = document.getElementById('app');

// ReactDOM.render(template2, appRoot);

// const renderCount = ()=>{
//     let template2 = (
//         <div>
//             <h1>Counter:{count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={resetR}>0</button>
//             <button onClick={minusOne}>-1</button>

//             <h1> {user.name ? user.name : 'anonimo'} </h1> 
//             {(user.age && user.age >= 18 ) && <p>Age: {user.age}</p>}
//             {getLocation(user.lugar)}
//             {user.opt.length >=0 && <p>Opciones: {user.opt[0]} {user.opt[1]}</p>}

//         </div>
//     );

//     ReactDOM.render(template2, appRoot);


// }

// renderCount();

// /* eslint-disable prettier/prettier */
// /* eslint-disable react/react-in-jsx-scope */
// console.log('app running');
// // babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// //live-server public
// //JSX - Javascript XML

// // const React = require('react');

// // let app = {
// //   title: 'IndescApp',
// //   edad: 8,
// //   lugar: ['buenos aires', 'lo de tu vieja'],
// //   options: []
// // };

// //second optional constructor con age = 0;
// // new method getdescription con el nombre y la edad

// class Person {
//     constructor(name = 'Anonymous', age = 1) {
//         this.name = name;
//         this.age = age;
//     }
//     getGretting() {
//         // return 'hi' + this.name + "hello";
//         return `hi, im ${this.name}!!, tengo ${this.age}. `;
//     }
// }
// //subclases

// class Student extends Person {
//     constructor(name, age, major = 'undef') {
//         super(name, age);
//         this.major = major;
//     }
//     hasMajor() {
//         return !!this.major;
//     }
//     getGretting() {
//         let desc = super.getGretting();
//         desc += `Tiene un major en: ${this.major}. `
//         return desc
//     }
// }

// class Traveler extends Student {
//     constructor(name, age, major, homeLoc) {
//         super(name, age, major);
//         this.homeLoc = homeLoc;
//     }
//     //override greeting
//     hasHomeLoc(){
//         return !!this.homeLoc;
//     }
//     getGretting(){
//         let desc = super.getGretting();
//         if(this.hasHomeLoc()){
//             return desc += `Esta viviendo en ${this.homeLoc}`
//         }else{
//             return desc += `No sabemos donde esta viviendo. `
//         }
//     }

// }

// const me = new Traveler('Juan', 26, 'programador');
// alert(me.getGretting());


// const onFormSubmit = e => {
//   e.preventDefault();
//   console.log('formSubtmited');

//   const option = e.target.elements.option.value;
//   if (option) {
//     app.options.push(option);
//     e.target.elements.option.value = '';
//     rendNew();
//   }
// };

// //removeall
// const removeOnSub = () => {
//   app.options = [];
//   console.log('borranding');
//   rendNew();
// };

// // DECISION
// const makeDecision = () => {
//   const rndNum = Math.floor(Math.random() * app.options.length);
//   const option = app.options[rndNum];
//   alert(option);
// };

// //SORPRESA
// const sorPresa = () => {
//   const titulo = document.getElementById('titulo');
//   const mensajeSorpresa = ['ALTA SORPRESA', 'NINGUNA SORPREA'];
//   let rnd = Math.floor(Math.random() * mensajeSorpresa.length);

//   return (titulo.innerHTML = mensajeSorpresa[rnd]);
// };

// //visibility
// let visibility = true;
// const escondete = () => {
//   visibility = !visibility;

//   rendNew();
// };

// // let template2 = (
// //     <div>

// //         <h1>{app.title} </h1>
// //         <p>Cantidad de opciones: {app.options.length}</p>

// //         <form onSubmit={onFormSubmit}>
// //         <input type="text" name="option"></input>
// //         <button>AddOpt</button>
// //         <button onClick={removeOnSub}>delete</button>
// //         <button onClick={makeDecision}>DECISION</button>

// //         </form>

// //     </div>
// // );

// // let appRoot = document.getElementById('app');
// // ReactDOM.render(template2, appRoot);

// const rendNew = () => {
//   let template2 = (
//     <div>
//       <h1 id="titulo"> {app.title} </h1>{' '}
//       <p> Cantidad de opciones: {app.options.length} </p>
//       {app.options.map(num => {
//         return <p key={num}> Tarea: {num} </p>;
//       })}
//       <form onSubmit={onFormSubmit}>
//         <input type="text" name="option">
//           {' '}
//         </input>{' '}
//         <button> AddOpt </button>{' '}
//         <button onClick={removeOnSub}> delete </button>{' '}
//         <button disabled={app.options.length == 0} onClick={makeDecision}>
//           {' '}
//           DECISION{' '}
//         </button>
//         <button onClick={sorPresa}> sorpresa </button>
//         <button onClick={escondete}>
//           {' '}
//           {visibility ? 'Escondete!' : 'traeme de vuelta'}{' '}
//         </button>
//         <p> {visibility ? 'aca que onda' : ''} </p>
//       </form>
//     </div>
//   );

//   let appRoot = document.getElementById('app');
//   // eslint-disable-next-line no-undef
//   ReactDOM.render(template2, appRoot);
// };

// rendNew();
