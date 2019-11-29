console.log("app running");

//JSX - Javascript XML


let user = {
    name: '',
    edad: 28,
    lugar: 'casa'
};

function getLocation(lugar){
    if(lugar == 'casa'){
        return  <p> location: {lugar} </p>;
    }
}



let template2 = (
    <div>
        <h1> {user.name ? user.name : 'anonimo'} </h1> 
       
        {getLocation(user.lugar)}
        
    </div>
);



let appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);