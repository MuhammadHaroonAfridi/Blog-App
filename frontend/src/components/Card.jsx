import React from 'react';
import Car from '../assets/car.png';


function Card() {
  return (
    <div className="custom-card">
      <img src={Car} alt="Car" className="card-image" />
      <div className="card-overlay">
        <h5 className="card-title">How to Drive a Car Safely</h5>
        <p className="card-text">
          Ah, the joy of the open road — it’s a great feeling, but it takes more to bring you safely...
        </p>
      </div>
    </div>
  );
}

export default Card;
