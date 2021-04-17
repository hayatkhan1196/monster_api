import React, { Component } from "react";
import Card from "./Card";
import "./CardList.css";
  const CardList = ({ monsterFilters }) => (
    <div className="card-list">
      {monsterFilters.map((monster) => (
        // console.log("====================", monster.id),
        <Card id={monster.id} monster={monster.name} />
      ))}
    </div>
);
export default CardList;
