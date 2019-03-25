import React from "react";

const Travel = props => (
  <figure>
    <img src={props.image} alt={props.city} />
    
    <figcaption>
    <h2>{props.city}</h2>
    <h2>{props.country}</h2>
    <h3>{props.distance}</h3>
    

    </figcaption>
  </figure>
);

export default Travel;
