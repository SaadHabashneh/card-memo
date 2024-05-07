import { useState, useEffect } from "react";
import "./App.css";
import apple from "../public/apple.jpeg";
import grape from "../public/grape.png";
import lemon from "../public/lemon.jpeg";
import orange from "../public/orange.png";
import passion from "../public/passion.png";
import pineapple from "../public/pineapple.jpeg";
import strawberry from "../public/strawberry.png";
import watermelon from "../public/watermelon.png";

const cardImages = [
  {src: apple, matched: false},
  {src: grape, matched: false},
  {src: lemon, matched: false},
  {src: orange, matched: false},
  {src: passion, matched: false},
  {src: pineapple, matched: false},
  {src: strawberry, matched: false},
  {src: watermelon, matched: false}
];

const Modal = ({ message, onRestart }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{message}</h2>
        <button onClick={onRestart}>Restart</button>
      </div>
    </div>
  );
};

const GamePage = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [canFlip, setCanFlip] = useState(true);
  const [score, setScore] = useState(0);
  const [hearts, setHearts] = useState(10);
  const [showModal, setShowModal] = useState(false);

  const restartGame = () => {
    setScore(0);
    setHearts(10);
    setFlippedCards([]);
    setShowModal(false);
    cardGen();
  };

  const cardGen = () => {
    const arr = [...cardImages, ...cardImages].sort(() => Math.random() - 0.5).map(elem => ({...elem, id: Math.random()}));
    setCards(arr);
  };

  useEffect(cardGen, []);

  const open = (id, src) => {
    if (!canFlip) return;
    return setFlippedCards([...flippedCards, {id, src}]);
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      setCanFlip(false);
      const [card1, card2] = flippedCards;
      if (card1.src === card2.src) {
        setScore(score + 1);
        setCards(cards.map(card => card.id === card1.id || card.id === card2.id ? {...card, matched: true} : card));
        setCanFlip(true);
        setFlippedCards([]);
      } else {
        setHearts(hearts - 1);
        setTimeout(() => {
          setFlippedCards([]);
          setCanFlip(true);
        }, 1000);
      }
    }
  }, [flippedCards]);

  useEffect(() => {
    if (hearts == 0) {
      setShowModal(true);
    }
  }, [hearts]);

  useEffect(() => {
    if (score === cardImages.length) {
      setShowModal(true);
    }
  }, [score]);

  return (
    <>
      {showModal && <Modal message={hearts === 0 ? "You Failed :(" : "You Win!"} onRestart={restartGame} />}
      <div className="hearts">
        <h3>❤ {hearts}</h3>
      </div>
      <div className="cards-container">
        {cards && (cards.map(card => {
          const isFlipped = flippedCards.some(fCard => fCard.id === card.id) || card.matched;
          return (
            <div key={card.id} className={`card ${isFlipped ? 'flipped' : ''}`}>
              <div>
                <img className={`front ${isFlipped ? '' : 'hide'}`} src={card.src} />
                <img className={`back ${isFlipped ? 'hide' : ''}`} src="./back.jpg" onClick={() => open(card.id, card.src)} />
              </div>
            </div>
          )
        }))}
      </div>
    </>
  );
};

export default GamePage;