import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import StarshipButton from "./StarshipButton";
import Loading from "./Loading";

const swapi = require('swapi-node');

function App() {
  const [allStarships, setAllStarships] = useState(null);

  swapi.get('https://cors-anywhere.herokuapp.com/https://swapi.dev/api/starships/')
  .then((res) => {
    console.log(`👾 api results page 1 ${res.results}`);
    setAllStarships(res.results);
  })
  .catch((err) => {
    console.log(`‼️ error w api call: ${err}`);
  });

  if (!allStarships) {
    return (
      <div className="App">
        <p>🕗</p>
        <Loading/>
      </div>
    );
  }
  return (
    <div className="App">
      <p>app: main</p>
      <StarshipButton allStarships={allStarships}/>
    </div>
  );
}


export default App;
