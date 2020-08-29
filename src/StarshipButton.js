import React, {Component} from "react";


function StarshipButton(props) {
  let count = 0;
  const allStarships = props.starship.map((s, i) => {
    count++;
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
      {allStarships}
    </div>
  );
}

export default StarshipButton;