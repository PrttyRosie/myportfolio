import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({ closeModal }) => {
    return ReactDOM.createPortal(
        <div onClick={closeModal} className='modal-overlay'>
            <div
                onClick={(e) => e.stopPropagation()}
                className='modal-container'
            >
                <div className='upper-section'>
                    <h1>Contact for services!</h1>
                    <p onClick={closeModal} className='close'>
                        &times;
                    </p>
                </div>
                <div className='middle-section'>
                    <h3>
                        I Offer Quality Services and Solutions
                    </h3>
                    <p>
                        Contact me for below services..👇
                    </p>
                    <ul>
                        <li>
                            Web Application Development
                        </li>
                        <li>
                            Mobile Development
                        </li>
                    </ul>
                </div>
                <div className='lower-section'>
                    <a onClick={closeModal} className='modal-btn btn-close'>
                        Close
                    </a>
                    <a
                        href='https://peerlist.io/anandbaraik'
                        target='_blank'
                        rel='noreferrer'
                        className='modal-btn btn-contact'
                    >
                        Contact
                    </a>
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    );
};

export default Modal;