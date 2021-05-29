import './App.css';
import { recepts } from './storage.js'
import { Recept } from './Recept.js'
import React, { useState } from 'react'


export function AllRecepts({toggleFavoriteRecept}){

    return (
        <div id='All-Recepts'>
        {recepts.map(
            recipe => <Recept 
            toggleFavoriteRecept={toggleFavoriteRecept} 
            recipe={recipe} 
            key={recipe.id}/>
        )}
    </div>
)}


