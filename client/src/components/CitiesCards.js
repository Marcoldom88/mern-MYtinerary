import React from 'react';
import { Link } from "react-router-dom";

const CitiesCards = ({ name, image, country, cardStyle  }) => (
  <article className={cardStyle}>
    <Link to={{ pathname: `/itineraries/${name}` }}>
      <div className="board">
        <img src={image} alt={name}></img>
        <div>
          <h5>{name}</h5>
          <p>{country}</p>
        </div>
      </div>
    </Link>
  </article>
);
  
  
export default CitiesCards