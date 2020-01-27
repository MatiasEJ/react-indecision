class IndecApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.state = {
            options: ['thing1','thing2']
        }
    }
    //handleDeleteOptions
    handleDeleteOptions(){
        this.setState(() => {
            return {
                options:[]
            };
        });
    }

    render() {
        const title = "IndecApp"
        const subtitle = "subtitle of indecApp"
        return (<div>
        <Header title={title} subtitle={subtitle}/>
        <Action hasOptions={this.state.options.length > 0} />
        <Options 
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption />
    
    
        </div>);
    }
}




class Header extends React.Component {
    render() {
        return (<div>
                <h1>{this.props.title}</h1>
                <p>{this.props.subtitle}</p>
            </div>
        );
    }
}
class Action extends React.Component {
    handlePick() {

        alert('handlepick');
    }
    render() {
        return <button 
        onClick={this.handlePick}
        disabled={!this.props.hasOptions}
        > what should i do </button>
    }
}

//remove button
//setup handler
class Options extends React.Component {
    
    render() {
        //setup options props
        //render length
        

        return (
            <div>
            <p>Opciones ({this.props.options.length}):</p>
                <div>

                    <button onClick={this.props.handleDeleteOptions}>remove all</button>
                
                    {
                        this.props.options.map(option =>{
                            return <p key={option}> <Option key={option} optionText={option}/> </p>
                        })
                    }
                
                </div>      
                
            </div>
        );
    }
}

class Option extends React.Component {
    removeOne(){
        alert('remove one')
    }
    render() {
        return (<div>
            
            <p>Opcion:{this.props.optionText} <button onClick={this.removeOne}>Remove</button></p>
            
            </div>);
    }
}

/**
 * Setun form with tex input and submit button
 * wiere up onSubmit
 * handleOption ->get value tiped
 * **/




class AddOption extends React.Component {
 
    onFormSubmit (element) {
        element.preventDefault();
      
      const option = element.target.elements.option.value.trim();
        if (option) {
          element.target.elements.option.value = '';
          
        }



      };
   handleOption() {
       alert('handling options');
   }
    render() {
        return (<div>
            <form onSubmit={this.onFormSubmit}>

                <input type="text" name="option"></input>
            
                 <button type="submit"> Submit </button>
            
            </form>
            
            </div>); 
    }
}






ReactDOM.render(<IndecApp />, document.getElementById("app"));