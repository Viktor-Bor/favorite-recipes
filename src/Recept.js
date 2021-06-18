import './App.css';
import React from 'react'

export function Recept({recipe, toggleFavoriteRecept, modalOpen}) {
        return (
             <div className="card">
             <div className="card-container">
              <button id="btn-add" onClick={() => toggleFavoriteRecept(recipe)} disabled={(recipe.isFavorite) ? true : false} key={recipe.id}>Add to favorite</button>
              <img src={recipe.img} alt=''/>
              <div className="card-body">
              <h5 className="card-title">{recipe.name}</h5>
              <button className="btn btn-danger" onClick={() => modalOpen()}>About</button>
            </div>
        </div>
     </div>
    )
}

