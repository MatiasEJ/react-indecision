import React from 'react'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';


const OptionModal = (props) => (
    <Modal
        ariaHideApp={false}
        isOpen ={!!props.selectedOption}
        contentLabel="Selected Option"
        onRequestClose={props.handleCloseModal}
        closeTimeoutMS={400}
        className="modal"
    >
        <h3 className="modal__title">Hoy le toca a:</h3>
        {
            props.selectedOption && 
            <p
            className="modal__body"
            >{props.selectedOption}</p>
        }
        <div
        className="add-option">
        <button className="button__modal" onClick={props.handleCloseModal}>ok</button>
        </div>
    </Modal>
);
    


export default OptionModal;