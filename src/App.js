import './App.css';
import { recepts } from './storage.js'
import React, { useState } from 'react'
import { Allrecepts } from './AllRecepts.js'


function App() {
  const [favoriteRecept, setFavoriteRecept] = useState([])

  const toggleFavoriteRecept = (recept) => {
  setFavoriteRecept((prev) => {
    return [ recept, ...prev ]
  })
  console.log(recept)

}

const [allRecepts, setAllRecepts] = useState([])


  return (
    <div className="App">
      <h1>Favorite Recepts:</h1>
      {favoriteRecept}
<hr></hr>
      <h1>All Recepts: </h1>
       <Allrecepts toggleFavoriteRecept={toggleFavoriteRecept}/>
       </div>
  ); 
}

export default App;
