import React from 'react'
import Option from './Option'

const Options = (props) => {
    return (<div>
        
            <div className="widget-header">
            <h3 className="widget-header__title">Opciones</h3>
            <button
            className="button button--link"
            onClick={props.handleDeleteOptions}>Eliminar lista</button>
            </div>

            <div>
                {props.options.length == 0 && <p className="widget-msg">Faltan Datos</p>}
                {
                    props.options.map((option,index) =>{
                    return (<Option 
                        
                        key={option} 
                        optionText={option}
                        handleDeleteOpt={props.handleDeleteOpt}
                        count={index+1}
                        />);  
                    })
                }
            </div>   
            
        </div>);
}

export default Options;