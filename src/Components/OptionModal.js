import React from 'react'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';


const OptionModal = (props) => (
    <Modal
        ariaHideApp={false}
        isOpen ={!!props.selectedOption}
        contentLabel="Selected Option"
        onRequestClose={props.handleCloseModal}
    >
        <h3>Selected Option</h3>
        {
            props.selectedOption && <p>{props.selectedOption}</p>
        }
        <button onClick={props.handleCloseModal}>ok</button>
    </Modal>
);
    


export default OptionModal;