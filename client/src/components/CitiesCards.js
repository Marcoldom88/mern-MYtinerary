import React from 'react';

const CitiesCards = ({ name, image, country, cardStyle  }) => (
  <article className={cardStyle}>
    <div className="board">
      <img src={image} alt={name}></img>
      <div>
        <h5>{name}</h5>
        <p>{country}</p>
      </div>
    </div>
  </article>
);
  
  
export default CitiesCards