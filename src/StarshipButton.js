import React, {useState} from "react";


function StarshipButton(props) {
  let count = 0;
  const starship = props.allStarships.map((s, i) => {
    count++;
    const url = {s.url}
    return <div key={i} className={`item${count}`}>{s.name}: {s.model}<br/>
      {s.crew} for crew<br/>
      {s.pilots} piloted<br/>
      <a href="">get info</a>
      url: {s.url}
      <hr/>
    </div>;
  });



  return (
    <div className='starship-grid'>
      {starship}
    </div>
  );
}

export default StarshipButton;


//
// function IngredientList(props) {
//   const newList = props.ingredients.map((i, k) => {
//     return <IngredientButton onClick={props.onClick} name={i.name} color={i.color}/>;
//   });
//   return (
//     <div>
//       <ul className={'ing-display'}>
//         <h1>choose from:</h1>
//         {newList}
//       </ul>
//     </div>
//   );
// }

// export default function IngredientButton(props) {
//   console.log(`${props.name} clicked`)
//   return <button className="ing-btn" value={props.name} style={{backgroundColor: `${props.color}`}}
//                  onClick={(e) => props.onClick(e)}>{props.name}</button>;
// }
