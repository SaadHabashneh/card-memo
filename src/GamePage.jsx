import { useState, useEffect } from "react";
import "./App.css";

const cardImages = [
  {"src": "./apple.jpeg", matched: false},
  {"src": "./grape.jpeg", matched: false},
  {"src": "./lemon.jpeg", matched: false},
  {"src": "./orange.png", matched: false},
  {"src": "./passion.png", matched: false},
  {"src": "./pineapple.jpeg", matched: false},
  {"src": "./strawberry.jpeg", matched: false},
  {"src": "./watermelon.jpeg", matched: false}
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
  const [score, setScore] = useState(0);
  const [hearts, setHearts] = useState(5);
  const [showModal, setShowModal] = useState(false);

  const restartGame = () => {
    setScore(0);
    setHearts(5);
    setFlippedCards([]);
    cardGen();
    setShowModal(false);
  };

  const cardGen = () => {
    const arr = [...cardImages, ...cardImages].sort(() => Math.random() - 0.5).map(elem => ({...elem, id: Math.random()}));
    setCards(arr);
  };

  useEffect(cardGen, []);

  const open = (id, src) => {
    setFlippedCards([...flippedCards, {id, src}]);
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [card1, card2] = flippedCards;
      if (card1.src === card2.src) {
        setScore(score + 1);
        setCards(cards.map(card => card.id === card1.id || card.id === card2.id ? {...card, matched: true} : card));
      } else {
        setHearts(hearts - 1);
        setTimeout(() => setFlippedCards([]), 1000);
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
      <div className="cards-container">
        {cards && (cards.map(card => {
          const isFlipped = flippedCards.some(fCard => fCard.id === card.id) || card.matched;
          return (
            <div key={card.id} className={`card ${isFlipped ? 'flipped' : ''}`}>
              <div>
                <img className="front" src={card.src} alt="card-front"/>
                <img className="back" src="./back.jpeg" onClick={() => open(card.id, card.src)} alt="card-back" />
              </div>
            </div>
          )
        }))}
      </div>
    </>
  );
};

export default GamePage;