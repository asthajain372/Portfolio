import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail, color,a,b,c}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 

      <img style={{width:"99px"}} src={emoji} alt="" />
      <span style={{margin:10 , fontSize:30 ,fontStyle:"oblique" }}>{heading}</span>
      {/* <span>{detail}</span> */}
    
        <ul style={{margin:10 }} >
          <li style={{margin:2}}>{detail}</li>
          <li style={{margin:2}}>{a}</li>
          <li style={{margin:2}}>{b}</li>
          <li style={{margin:2}}>{c}</li>

        </ul>
     
      {/* <button className="c-button">LEARN MORE</button> */}
    </div>
  );
};

export default Card;
