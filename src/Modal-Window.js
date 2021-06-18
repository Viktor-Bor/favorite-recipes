import './App.css';
import React from 'react'
import ReactDOM from 'react-dom';

export function ModalWindow({active, setModalActive}) {
    return ReactDOM.createPortal(
        <div className='modal-window'>
          <div className='modal-content'>
          </div>
        </div>,
      document.getElementById('portal')
      )

}

