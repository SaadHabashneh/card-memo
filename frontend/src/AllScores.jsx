import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const AllScores = () => {
  const [scores, setScores] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/scores`)
      .then((response) => {
        setScores(response.data.scores);
      })
      .catch((err) => {
        setMessage(err.response.data.message);
      });
  }, []);

  return (
    <>
      <div className="scoresDiv">
        <table className="scoresTable">
          <thead>
            <tr>
              <th>Players</th>
              <th>Scores</th>
            </tr>
          </thead>
          <tbody>
            {scores ? (
              scores.map((score) => {
                return (
                  <tr key={score.id}>
                    <td>{score.username}</td>
                    <td>{score.score}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td>{message}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllScores;
