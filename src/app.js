console.log("app running");
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
//live-server public
//JSX - Javascript XML
let app = {
    title: 'IndescApp',
    edad: 8,
    lugar: ['buenos aires','lo de tu vieja'],
    options: []
   

};



const onFormSubmit = (e)=>{
    e.preventDefault();
    console.log("formSubtmited");

    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = "";
        rendNew();
    }

}

//removeall
const removeOnSub = (e)=>{
    app.options =[];
    console.log("borranding");
    rendNew();
}

let template2 = (
    <div>
        
             
    <h1>{app.title}} </h1> 
    <p>Cantidad de opciones: {app.options.length}</p>

    
    <ol>
        <li> <p>{app.options}</p></li>
    </ol>
    
    <form onSubmit={onFormSubmit}>
    <input type="text" name="option"></input>
    <button>AddOpt</button>
    <button onClick={removeOnSub}>delete</button>
    </form>




        
    </div>
);

let appRoot = document.getElementById('app');
ReactDOM.render(template2, appRoot);

const rendNew = ()=>{
    let template2 = (
        <div>
            
        <h1>{app.title}} </h1> 
        <p>Cantidad de opciones: {app.options.length}</p>

        
        <ol>
            <li> <p>{app.options}</p></li>
        </ol>
        {
            app.options.map((num)=>{
                return <p key={num}>Tarea: {num}</p>
            })
        }



        
        <form onSubmit={onFormSubmit}>
        <input type="text" name="option"></input>
        <button>AddOpt</button>
        <button onClick={removeOnSub}>delete</button>
        </form>


    
            
        </div>
    );
    
    let appRoot = document.getElementById('app');
    ReactDOM.render(template2, appRoot);


}

rendNew();