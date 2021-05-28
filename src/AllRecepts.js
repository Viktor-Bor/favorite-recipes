import './App.css';
import { recepts } from './storage.js'
import React, { useState } from 'react'

export function Allrecepts({toggleFavoriteRecept}){
    const [allRecepts, setAllRecepts] = useState([])



    return (
        <div id='All-Recepts'>
        {recepts.map((recept) => (
         <div className="card">
         <div className="card-container">
          <button onClick={() => toggleFavoriteRecept(recept)} id="btn-add" key={recept.id}>Add favorite</button>
          <img src={recept.img} alt=''/>
          <div className="card-body">
          <h5 className="card-title">{recept.name}</h5>
          <button className="btn btn-danger">Abaut</button>
        </div>
    </div>
 </div>
        ))
    }
        </div>

    )
}