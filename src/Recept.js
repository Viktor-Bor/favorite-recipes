import './App.css';
import React from 'react'

export function Recept({recipe, toggleFavoriteRecept}) {
        return (
             <div className="card">
             <div className="card-container">
              <button id="btn-add" onClick={() => toggleFavoriteRecept(recipe)} key={recipe.id}>Add favorite</button>
              <img src={recipe.img} alt=''/>
              <div className="card-body">
              <h5 className="card-title">{recipe.name}</h5>
              <button className="btn btn-danger">Abaut</button>
            </div>
        </div>
     </div>
    )
}

