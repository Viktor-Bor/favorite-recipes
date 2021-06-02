import './App.css';
import React, { useState } from 'react'
import { AllRecepts } from './AllRecepts.js'
import { FavoriteRecept } from './FavoriteRecept.js'

function App() {
  const [favoriteRecept, setFavoriteRecept] = useState([])
  const toggleFavoriteRecept = (recept) => {
    const getReceptCard = createElementCard(recept)
    setFavoriteRecept((prev) => {
      return [ ...prev, getReceptCard ]
      }
    )
    console.log(favoriteRecept)
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
    setFavoriteRecept((prev) => prev.filter(rec => rec.props.recipe.id !== recept.id))
    }
  

  function serchTermToggle({target}) {
    const catchInput = target.value 
    setFavoriteRecept((prev) => prev.filter(element => element.props.recipe.name.toLowerCase().includes(catchInput.toLowerCase())))
  }




  return (
    <div className="App">
      <div id="Serch-Term">
      <input className="serch-term" type="text" placeholder="serch your recipe" onChange={serchTermToggle}></input>
      </div>
    <h1>Favorite Recepts:</h1>
    <div id="Favorite-Recipes">
    {favoriteRecept}
    </div>
<hr></hr>
      <h1>All Recepts: </h1>
      <AllRecepts toggleFavoriteRecept={toggleFavoriteRecept}/>
    </div>
  ); 
}

export default App;
