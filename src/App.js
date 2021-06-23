import './App.css';
import React, { useState, useEffect } from 'react'
import { AllRecepts } from './AllRecepts.js'
import { FavoriteRecept } from './FavoriteRecept.js'
import { recepts } from './storage.js'
import { ModalWindow } from './Modal-Window';


function App() {
  const [allRecipes, setAllRecipes] = useState([])
  const [favoriteRecept, setFavoriteRecept] = useState([]) 
  const [modalActive, setModalActive] = useState(false)
  const [modalContent, setModalContent] = useState({})
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
      getRecipes={getRecipes}
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
        <AllRecepts toggleFavoriteRecept={toggleFavoriteRecept} recepts={receptList} getRecipes={getRecipes}/>
    )
}


  function serchTermToggle({ target }) {
    const catchInput = target.value 
    const filteredRecipes = recepts.filter(element => element.name.toLowerCase().includes(catchInput.toLowerCase()))
      setAllRecipes(displayAllRecipes(filteredRecipes))
  }


const getRecipes = (rec) => {
  setModalActive(true)
  setModalContent(rec)
}


  return (
    <div className="App">
    <ModalWindow modalContent={modalContent} active={modalActive} setModalActive={setModalActive}/>
    <div id="Serch-Term-Container">
    <input className="serch-term" type="text" placeholder="serch recipes" onChange={serchTermToggle} />
  </div>
    <h1>Favorite Recepts:</h1>
    <div id="Favorite-Recipes">
    {favoriteRecept}
  </div>
    <hr></hr>
    <h1>All Recepts: </h1>
    <div id='All-Recepts'>  
    {allRecipes}
  </div>
  </div>
  ); 
}

export default App;


