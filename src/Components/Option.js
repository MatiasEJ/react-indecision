import React from 'react'

const Option = (props)=>{
    return (<div className="widget-option">
        {props.optionText}
        <button 
        className="button button--link"
        onClick={(e)=>{
            props.handleDeleteOpt(props.optionText)
        }}
        >
        Remove
        </button>
        
        </div>);
}

export default Option;