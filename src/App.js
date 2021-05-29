import './App.css';
import React, { useState } from 'react'
import { AllRecepts } from './AllRecepts.js'
import { Recept } from './Recept';



function App() {
  const [favoriteRecept, setFavoriteRecept] = useState()

  const toggleFavoriteRecept = (recept) => {
  setFavoriteRecept((prev) => {
    return[ recept, ...prev ]
  })

}



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
