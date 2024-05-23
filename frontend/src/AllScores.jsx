import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const AllScores = () => {
  const [scores, setScores] = useState([]);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/scores")
      .then((response) => {
        setScores({ data: response.data.scores, status: "success" });
        console.log(response.data.scores);
      })
      .catch((err) => {
        setMessage({ data: err.response.data.message, status: "error" });
      });
  }, [scores, message]);

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
                    <td>{score.data.username}</td>
                    <td>{score.data.score}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td>Error</td>
                <td>{message.data}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllScores;
