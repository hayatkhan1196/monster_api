import React, { Component } from "react";
import Card from "./Card";
import "./CardList.css";

export const CardList = (props) => (
  <div className="card-list">
    {props.monsters.map(
      (monster) => (
        console.log("====================", monster.id),
        (<Card id={monster.id} monster={monster.name} />)
      )
    )}
  </div>
);
export default CardList;
