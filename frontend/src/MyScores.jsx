import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {AppContext} from "./Context";
import "./App.css";

const MyScores = () => {

  const [scores, setScores] = useState([]);
  const [message, setMessage] = useState(null);
  const { token } = useContext(AppContext);
  const { userId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/scores/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
      })
      .then((response) => {
        setScores({ data: response.data.scores, status: "success" });
      })
      .catch((err) => {
        setMessage({ data: err.response.data.message, status: "error" });
      });
  }, [token, userId]);

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
            {scores ?
              scores.map((score) => {
                return (
                  <tr key={score.id}>
                    <td>{score.data.username}</td>
                    <td>{score.data.score}</td>
                  </tr>
                );
              }) : (
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

export default MyScores;
