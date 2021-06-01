import './App.css';
import React, { useState } from 'react'
import { AllRecepts } from './AllRecepts.js'
import { Recept } from './Recept';



function App() {
  const [favoriteRecept, setFavoriteRecept] = useState([])
  const toggleFavoriteRecept = (recept) => {
    const getReceptCard = createElementCard(recept)
    setFavoriteRecept((prev) => {
      return [ ...prev, getReceptCard ]
    })
  }

  favoriteRecept.map(createElementCard)

  function createElementCard(recipe){
    return  ( <Recept recipe={recipe} key={recipe.id} />
    )}
 


  return (
    <div className="App">
      <h1>Favorite Recepts:</h1>
      <div className="Favorite-Recipes">
      {favoriteRecept}
    </div>
<hr></hr>
      <h1>All Recepts: </h1>
       <AllRecepts toggleFavoriteRecept={toggleFavoriteRecept}/>
    </div>
  ); 
}

export default App;
