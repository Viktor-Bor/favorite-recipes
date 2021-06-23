import './App.css';
import React from 'react'

export function FavoriteRecept({removeFromFavorite, recipe, getRecipes}) {
        return (
            <div className="card">
            <div className="card-container">
             <button id="btn-add" onClick={() => removeFromFavorite(recipe)}>&#128148; Remove from favorite</button>
             <img src={recipe.img} alt=''/>
             <div className="card-body">
             <h5 className="card-title">{recipe.name}</h5>
             <button className="btn-abaut" onClick={() => getRecipes(recipe)}>Abaut</button>
           </div>
        </div>
    </div>
    )
}

//<img src="https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/unfavorite.svg"/>
