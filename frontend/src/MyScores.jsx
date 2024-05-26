import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AppContext } from "./Context";
import "./App.css";

const MyScores = () => {
  const [scores, setScores] = useState([]);
  const [message, setMessage] = useState("");
  const { token } = useContext(AppContext);
  const { userId } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/scores/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setScores(response.data.scores);
      })
      .catch((err) => {
        setMessage(err.response.data.message);
      });
  }, [token, userId]);

  return (
    <>
      <div className="scoresDiv">
        <table className="scoresTable">
          <thead>
            <tr>
              <th>Your Scores</th>
            </tr>
          </thead>
          <tbody>
            {scores ? (
              scores.map((score) => {
                return (
                  <tr key={score.id}>
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

export default MyScores;
