import './App.css';
import { Recept } from './Recept.js'
import React from 'react'

export function AllRecepts({toggleFavoriteRecept, recepts, modalOpen}){
    return (
        <div id='All-Recepts'>  
        {recepts.map((recipe) => {
        return <Recept 
        toggleFavoriteRecept={toggleFavoriteRecept}
        recipe={recipe} 
        modalOpen={modalOpen}
        key={recipe.id} /> }
        )}
    </div>
   )
 }


