import React from 'react'

const Option = (props)=>{
    return (
        <div className="option">
        <p className="option__text">{props.count}. {props.optionText}</p>
        
        <button 
        className="button button--link"
        onClick={(e)=>{
            props.handleDeleteOpt(props.optionText)
        }}
        >
        Eliminar
        </button>
        </div>
        );
}

export default Option;