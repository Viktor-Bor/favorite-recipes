import './App.css';
import React, { useState, useEffect } from 'react'
import { AllRecepts } from './AllRecepts.js'
import { FavoriteRecept } from './FavoriteRecept.js'
import { recepts } from './storage.js'


function App() {
  const [allRecipes, setAllRecipes] = useState([])
  const [favoriteRecept, setFavoriteRecept] = useState([])
  const toggleFavoriteRecept = (recept) => {
    recept.isFavorite = true
    const getReceptCard = createElementCard(recept)
    setFavoriteRecept((prev) => {
      return [ ...prev, getReceptCard ]
      }
    )
  }
  function createElementCard(recipe){
    return (
      <FavoriteRecept 
      removeFromFavorite={removeFromFavorite} 
      recipe={recipe} 
      key={recipe.id}/>
    )
  }

  function removeFromFavorite(recept) {
    recept.isFavorite = false
    setFavoriteRecept((prev) => prev.filter(rec => rec.props.recipe.id !== recept.id))
    }


useEffect(() =>{
  setAllRecipes(displayAllRecipes(recepts))
},[favoriteRecept])
    

function displayAllRecipes(receptList) {
    return (
        <AllRecepts toggleFavoriteRecept={toggleFavoriteRecept} recepts={receptList} favoriteRecept={favoriteRecept}/>
    )
}


  function serchTermToggle({ target }) {
    const catchInput = target.value 
    const filteredRecipes = recepts.filter(element => element.name.toLowerCase().includes(catchInput.toLowerCase()))
      setAllRecipes(displayAllRecipes(filteredRecipes))
  }



  return (
    <div className="App">
    <div id="Serch-Term-Container">
    <input className="serch-term" type="text" placeholder="serch your recipe" onChange={serchTermToggle}></input>
  </div>
    <h1>Favorite Recepts:</h1>
    <div id="Favorite-Recipes">
    {favoriteRecept}
  </div>
    <hr></hr>
    <h1>All Recepts: </h1>
    {allRecipes}
  </div>
  ); 
}

export default App;
