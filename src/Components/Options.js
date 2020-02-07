import React from 'react'
import Option from './Option'

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

export default Options;