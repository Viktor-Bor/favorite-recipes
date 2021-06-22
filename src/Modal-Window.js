import './App.css';
import React from 'react'
import ReactDOM from 'react-dom';

export function ModalWindow({active, setModalActive, modalContent}) {
    return ReactDOM.createPortal(
        <div className={active ? "modal-window active" : "modal-window"} onClick={() => setModalActive(false)}>
          <div className={active ? "modal-content active" : "modal-content"} onClick={e => e.stopPropagation()}>
            <img src={modalContent.img} alt=''/>
            <p>{modalContent.discription}</p>
          </div>
        </div>,
      document.getElementById('portal')
      )

}

