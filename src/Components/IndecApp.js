import React from 'react'
import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import Action from './Action'
import OptionModal from './OptionModal'






export default class IndecApp extends React.Component {
    state = {
        options: ['Matias', 'Ayelen'],
        selectedOption: undefined
    };
    // constructor(props) {
    //     super(props);
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //     this.handlePick = this.handlePick.bind(this);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.handleDeleteOpt = this.handleDeleteOpt.bind(this);
    //     this.state = {
    //         options: props.options
    //     }
    // }
    

    handleDeleteOptions = () => {
        this.setState(() => ({ options:[] }));
    }
    
    handleDeleteOpt = (optionToRemove) => {
        this.setState((prevState) =>({
            options: prevState.options.filter( (option)=>{
                return optionToRemove !== option;
            })
        }));
    }

    handleCloseModal = () => {
        this.setState((prevState)=>({
            selectedOption: !prevState.selectedOption
        }));
    }

    handlePick = ()=>{
        const rndNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[rndNum];
        
        
        this.setState(() =>({
            selectedOption: option
        }));
    
        
        

    }
    handleAddOption = (option) => {
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
    
    componentDidMount = () => {
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options){
                this.setState( ()=>{[options]} );
            }
            console.log('componentDidMount');
        }catch(e){
            //donothing
        }
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options",json);
            console.log('SavingData');
        
        }
        // this.state
        // this.props
        // prevProps, prevState
    }
    componentWillUnmount = () => {
        console.log('componentWillUnmount');
    }

    render() {
    
        const subtitle = "A quien le toca?"
        return (<div>
            <Header subtitle={subtitle}/>

            <div className="container">
                <Action
                hasOptions={this.state.options.length > 0}
                handlePick={this.handlePick}
                />
                <div className="widget">
                    <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOpt={this.handleDeleteOpt}
                    />
                    <AddOption
                    className="addOption"
                    handleAddOption = {this.handleAddOption}
                    />
                </div>
            </div>

            <OptionModal 
            
            selectedOption={this.state.selectedOption} 
            handleCloseModal={this.handleCloseModal}
            
            />
    
    
        </div>);
    }
}

IndecApp.defaultProps = {
    options: []
}
