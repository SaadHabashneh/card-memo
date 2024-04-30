import { useState, useEffect } from "react";
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

  let val1 = "";
  let val2 = "";
  let open = 0;
  let score = 8;
  let hearts = 5;
  const check = (e) => {
    if (open == 1) {
        val2 += e.target.value;
    }
    open++;
    e.target.innerText = e.target.value;
    val1 += e.target.value;
    if (val1 == val2) {
        score--;
    }
    else {
        hearts--;
    }
    if (open == 2) {
        e.target.innerText = "";
        open = 0;
    }
  }

  if (hearts == 0) {
    window.alert("Failed :(");
  }

  if (score == 0) {
    window.alert("Success!");
  }

  return (
    <div className="gameDiv">
      {cards && (cards.map(card => (
        <button key={card.id} value={card.value} onClick={check} className="cards"></button>
      )))}
    </div>
  );
};

export default GamePage;