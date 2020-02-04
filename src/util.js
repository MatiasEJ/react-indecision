console.log("util.js webpackRunning!!");
const square = (x) => x*x;
// De otra forma
export const add = (a,b) => a+b;

export const isAdult = (age) => {
    if (age >= 18) {
        return "Es adulto"
    }
} 
export const canDrink = (age) => {
    if ( age >=18){
        return "Puede tomar"
    }
}

export { square };