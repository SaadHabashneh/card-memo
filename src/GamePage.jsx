import React, { useState, useEffect } from "react";
import "./App.css";

const GamePage = () => {
  const [cards, setCards] = useState();

  const cardGen = () => {
    const arr = [];
    const vals = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const counts = {};
    for (let i = 0; i < 16; i++) {
      let val = vals[Math.floor(Math.random() * vals.length)];
      counts[val] = (counts[val] || 0) + 1;
      if (counts[val] == 2) {
        vals.splice(vals.indexOf(val), 1);
      }
      arr.push({ id: i + 1, value: val });
    }
    setCards(arr);
  };

  useEffect(cardGen, []);

  return (
    <div className="gameDiv">
      {cards && (cards.map(card => (
        <button key={card.id} value={card.value} className="cards"></button>
      )))}
    </div>
  );
};

export default GamePage;