import React from "react";

function StarshipPage(props) {
  const starship = props.starship;
  return(
    <>
      <p>name: {starship.name}</p>
      <p>model: {starship.model}</p>
      </>
  )
}

export default StarshipPage;
