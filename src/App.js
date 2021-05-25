import './App.css';
import {recepts} from './store.js'


function App() {
  return (
    <div className="App">
      <h1>Favorite Recepts: </h1>
      <hr></hr>
      <h1>All Recepts:</h1>
      <div id='All-Recepts'>
        {recepts.map(recept => (
        <div className="card" style={{width: '30rem'}}>
                    <img src={recept.img} alt='' className="card-img-top"/>
        <div className="card-body">
          <h5 className="card-title">{recept.name}</h5>
          <a id="btn" href="#" className="btn btn-primary">Add favorite</a>
          <a id="btn"href="#" className="btn btn-danger">About</a>
        </div>
        </div>
       ))
    }
</div>
    </div>
  ); 
}

export default App;
