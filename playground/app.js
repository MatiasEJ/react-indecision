
class IndecApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOpt = this.handleDeleteOpt.bind(this);
        this.state = {
            options: props.options
        }
    }
    
    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options){
                this.setState( ()=>{options} );
            }
            console.log('componentDidMount');
        }catch(e){
            //donothing
        }
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
            console.log('SavingData');
        
        }
        // this.state
        // this.props
        // prevProps, prevState
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleDeleteOptions(){
        this.setState(() => ({ options:[] }));
    }
    
    handleDeleteOpt(optionToRemove){
        this.setState((prevState) =>({
            options: prevState.options.filter( (option)=>{
                return optionToRemove !== option;
            })
        }));
    }


    handlePick(){
        const rndNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[rndNum];
        
        alert(`Te toca: ${option}`);
        
        

    }
    handleAddOption(option) {
        if(!option) {
            return 'enter valid value';
        } else if (this.state.options.indexOf(option) >-1) {
            return 'this action already exist';
        }

        this.setState((prevState)=>({
            options: prevState.options.concat([option])
        }))

    }
    //handlePick pass down to action
    //randomly pick and option

    render() {
    
        const subtitle = "subtitle of indecApp"
        return (<div>
            <Header subtitle={subtitle}/>
            <Action 
                hasOptions={this.state.options.length > 0} 
                handlePick={this.handlePick}    
            />
            <Options 
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOpt={this.handleDeleteOpt}
            />
            <AddOption 
                handleAddOption = {this.handleAddOption}
            />
    
    
        </div>);
    }
}

IndecApp.defaultProps = {
    options: []
}

const Header = (props) => {
    return (<div>
            <h1>{props.title}</h1>
            {
                props.subtitle && 
                <p>{props.subtitle}</p>
            }
        </div>);
}

Header.defaultProps = {
    title: 'IndecisionApp'
};

// class Header extends React.Component {
//     render() {
//         return (<div>
              
//             </div>
//         );
//     }
// }

const Action = (props) => {
    return (<div>
        <button 
        onClick={props.handlePick}
        disabled={!props.hasOptions}
        > 
            what should i do 
        </button>
        </div>);
}

// class Action extends React.Component {
   
//     render() {
//         return <button 
//         onClick={this.props.handlePick}
//         disabled={!this.props.hasOptions}
//         > what should i do </button>
//     }
// }
const Options = (props) => {
    return (<div>
        <p>Cantidad de opciones: {props.options.length}</p>
            

                <button onClick={props.handleDeleteOptions}>remove all</button>
                {props.options.length == 0 && <p>Plis mete unos datos ameo</p>}
                {
                    props.options.map(option =>{
                    return (<Option 
                        key={option} 
                        optionText={option}
                        handleDeleteOpt={props.handleDeleteOpt}
                        />);  
                    })
                }
               
            
        </div>);
}
// class Options extends React.Component {
    
//     render() {
//         return (<div>
//             <p>Opciones ({this.props.options.length}):</p>
//                 <div>

//                     <button onClick={this.props.handleDeleteOptions}>remove all</button>
                
//                     {
//                         this.props.options.map(option =>{
//                         return (<p key={option}> <Option key={option} optionText={option}/> </p>);  
//                         })
//                     }
                        
                    
                
//                 </div>      
                
//             </div>);
//     }
// }


const Option = (props)=>{
    return (<div>
        {props.optionText}
        <button 
        onClick={(e)=>{
            props.handleDeleteOpt(props.optionText)
        }}
        >
        Remove
        </button>
        
        </div>)
}

// class Option extends React.Component {
    
//     render() {
//         return (<div>
            
//             <p>Opcion:{this.props.optionText}</p> 
//             <button onClick={this.props.handleDeleteOpt}>Remove</button>
           
            
//             </div>);
//     }
// }

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption (element) {
        element.preventDefault();
        
        
        
      
        const option = element.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(()=>({error}))
    
        if (!error){
            element.target.elements.option.value = '';
            element.target.elements.option.focus();
        // element.target.elements.option.select();

        }
        };
   
    render() {
        return (<div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOption}>

                <input type="text" name="option"></input>
            
                 <button type="submit"> Submit </button>
            
            </form>
            
            </div>); 
    }
}

// const User = (props) => {
//     return(
//         <div>
//             <p>name: {props.name}</p>
//             <p>age: {props.age}</p>
//         </div>
//     );
// };

ReactDOM.render(<IndecApp options={['Matias','Ayelen']}/>, document.getElementById("app"));