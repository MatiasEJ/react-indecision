import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };
    // constructor(props) {
    //     super(props);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     // this.state = {
    //     //     error: undefined
    //     // };
    // }
    handleAddOption = (element)=> {
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
        return (<div >
            {this.state.error && <p className="add-option-error">{this.state.error}</p>}
            <form className="add-option" onSubmit={this.handleAddOption}>

                <input 
                className="add-option__input" type="text" name="option"></input>
            
            <button
            className="button__modal"
            type="submit"> Agregar </button>
            
            
            </form>
            
            </div>); 
    }
}