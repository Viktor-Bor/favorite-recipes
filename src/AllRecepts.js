import './App.css';
import { Recept } from './Recept.js'
import React from 'react'

export function AllRecepts({toggleFavoriteRecept, recepts, getRecipes}){
    return (
        recepts.map((recipe) => {
        return <Recept 
        toggleFavoriteRecept={toggleFavoriteRecept}
        recipe={recipe} 
        getRecipes={getRecipes}
        key={recipe.id} /> }
        )
   )
 }


