import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import StarshipButton from "./StarshipButton";
import StarshipPage from "./StarshipPage";
import Loading from "./Loading";

const swapi = require('swapi-node');

function App() {
  const [allStarships, setAllStarships] = useState(null);
  const [starship, setStarship] = useState(null)

  swapi.get('https://cors-anywhere.herokuapp.com/https://swapi.dev/api/starships/')
  .then((res) => {
    console.log(`👾 api results page 1 ${res.results}`);
    setAllStarships(res.results);
  })
  .catch((err) => {
    console.log(`‼️ error w api call: ${err}`);
  });

  // handleclick
  // returns api call with url from starship
  // sends that info to starship page

  const handleClick = (s) => {
    swapi.get('https://cors-anywhere.herokuapp.com/https://swapi.dev/api/starships/3/')
    .then((res) => {
      console.log(`💊 🦷 api starships/3/ ${res.results} `);
      setStarship(res.results);
    })
    .catch((err) => {
      console.log(`‼️ error w api starships/3/ call: ${err}`);
    });
  };

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
      <StarshipButton allStarships={allStarships}
                      onClick={handleClick}/>
    </div>
  );
}


export default App;


// let addIngredient = (e) => {
//   let newBurgerIngredients = [e.target.value];
//   let finalBurger = newBurgerIngredients.concat(burgerIngredients);
//   setBurgerIngredients(finalBurger);
//   console.log(`burgerIngredients from app.js ${burgerIngredients}`);
// };


