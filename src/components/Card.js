import React from "react";
import "./Card.css";
const Card = ({ id, monster }) => (
  // console.log("idddddddddddddddddd", id),
  <div className="card">
    <img
      alt="monster"
      src={`https://robohash.org/${id}?set=set2&size=200x200`}
    />
    <p> {monster} </p>
  </div>
);

export default Card;
