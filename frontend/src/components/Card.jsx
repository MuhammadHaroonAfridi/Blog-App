import React from 'react';
import Car from '../assets/car.png';

function Card({title,Desc,Image}) {
  return (
    <>
    
    
    
    <div className="custom-card">
      <img src={Image} alt="Car" className="card-image" />
      <div className="card-overlay">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
        {Desc}
        </p>
      </div>
    </div>
    
    
    </>
  );
}

export default Card;/* header */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// justify-content: space-between;
// align-items: flex-start;
// padding: 0px 30px;
// gap: 312px;

// position: absolute;
// width: 1512px;
// height: 48px;
// left: 204px;
// top: 45px;

// // background: #FFFFFF;

