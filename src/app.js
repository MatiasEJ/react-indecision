console.log("app running");

//JSX - Javascript XML


let user = {
    name: '',
    edad: 8,
    lugar: 'casa',
    opt: ['one','two']
};

function getLocation(lugar){
    if(lugar == 'casa'){
        return  <p> location: {lugar} </p>;
    }
}



let template2 = (
    <div>
        <h1> {user.name ? user.name : 'anonimo'} </h1> 
        {(user.age && user.age >= 18 ) && <p>Age: {user.age}</p>}
        {getLocation(user.lugar)}
        {user.opt.length >=0 && <p>Opciones: {user.opt[0]} {user.opt[1]}</p>}
        
    </div>
);



let appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);