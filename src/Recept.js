import './App.css';
import React from 'react'

export function Recept({recipe, toggleFavoriteRecept, getRecipes}){
        return (
             <div className="card">
             <div className="card-container">
              <button id="btn-add" onClick={() => toggleFavoriteRecept(recipe)} disabled={(recipe.isFavorite) ? true : false} key={recipe.id}>&#10084; Add to favorite</button> 
              <img src={recipe.img} alt=''/>
              <div className="card-body">
              <h5 className="card-title">{recipe.name}</h5>
              <button className="btn-abaut" onClick={() => getRecipes(recipe)}>Abaut</button>
            </div>
        </div>
     </div>
    )
}

// https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/favorite.svg
