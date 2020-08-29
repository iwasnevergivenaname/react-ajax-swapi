import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import StarshipButton from "./StarshipButton";
const swapi = require('swapi-node');

function App() {
  const [starship, setStarship] = useState([]);

  swapi.get('https://cors-anywhere.herokuapp.com/https://swapi.dev/api/starships/')
  .then((res) => {
    console.log(`👾 api results page 1 ${res.results}`);
    setStarship(res.results);
  })
  .catch((err) => {
    console.log(`‼️ error w api call: ${err}`);
  });

  return (

    <div className="App">
      <p>app: main</p>
      <StarshipButton starship={starship}/>
    </div>
  );
}

export default App;
