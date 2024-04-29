import React, {useState, useEffect} from 'react';
import './App.css';

const GamePage = () => {

    const [cards, setCards] = useState();

    const cardGen = () => {
        const arr = [];
        const vals = ["A", "B", "C", "D", "E", "F", "G", "H"];
        let val = "";
        let vNum = 0;
        for (let i = 1; i <= 16; i++) {
            arr.push({id: i, value: vals[Math.floor(Math.random() * vals.length)]});
            val = arr[i - 1].value;
            for (let j = 0; j < arr.length; j++) {
                if (arr[j].value == val) {
                    vNum++;
                }
                if (vNum == 2) {
                    vals.splice(vals.indexOf(val), 1);
                }
            }
        }
        setCards(arr);
    };

    useEffect(cardGen, []);

  return (
    <div className='gameDiv'>
        {/* {cards && (cards.map(card => (
            
        )))} */}
    </div>
  )
};

export default GamePage;