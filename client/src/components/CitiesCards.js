import React from 'react';

const CitiesCards = ({ city }) => (
  <div className="carousel-inner">
    <div className="carousel-item">
      <img src={city.image} className="d-block w-100" alt="..."></img>
      <div className="carousel-caption d-none d-md-block">
        <h5>{city.name}</h5>
        <p>{city.country}</p>
      </div>
    </div>
  </div>
);
  
  
export default CitiesCards