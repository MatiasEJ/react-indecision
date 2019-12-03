

let user = {
    name: 'EL DIEGO ',
    edad: 8,
    lugar: ['buenos aires','lo de tu vieja'],
    opt: ['one','two'],
    prntPlaces(){
        return this.lugar.map((city)=> this.name + 'vivio en lo de '+city);
        
    }

};

console.log(user.prntPlaces());

function getLocation(lugar){
    if(lugar == 'casa'){
        return  <p> location: {lugar} </p>;
    }
}

let count = 0;
const addOne = ()=>{
    count++;
    renderCount();
}
const minusOne = ()=>{
    count--;
    renderCount();
}
const resetR = ()=>{
    count = 0;
    renderCount();
}

let template2 = (
    <div>
        <h1>Counter:{count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={resetR}>0</button>
        <button onClick={minusOne}>-1</button>

        <h1> {user.name ? user.name : 'anonimo'} </h1> 
        {(user.age && user.age >= 18 ) && <p>Age: {user.age}</p>}
        {getLocation(user.lugar)}
        {user.opt.length >=0 && <p>Opciones: {user.opt[0]} {user.opt[1]}</p>}
        
    </div>
);




let appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);

const renderCount = ()=>{
    let template2 = (
        <div>
            <h1>Counter:{count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={resetR}>0</button>
            <button onClick={minusOne}>-1</button>
    
            <h1> {user.name ? user.name : 'anonimo'} </h1> 
            {(user.age && user.age >= 18 ) && <p>Age: {user.age}</p>}
            {getLocation(user.lugar)}
            {user.opt.length >=0 && <p>Opciones: {user.opt[0]} {user.opt[1]}</p>}
            
        </div>
    );

    ReactDOM.render(template2, appRoot);


}

renderCount();