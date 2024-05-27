import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AppContext } from "./Context";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
} from "@mui/material";
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
  }, [token, userId, scores]);

  const deleteScore = (id) => {
    axios
      .delete(`${import.meta.env.VITE_URL}/scores/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((err) => {
        setMessage(err.response.data.message);
      });
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="stretch"
      height="80vh"
    >
      <TableContainer
        component={Paper}
        style={{
          backgroundColor: "#1B1212",
          border: "1px solid rgb(93, 2, 2)",
        }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ color: "white" }}>
                Your Scores
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {scores ? (
              scores.map((score) => (
                <TableRow key={score.id}>
                    <TableCell align="center" style={{ color: "white" }}>
                      {score.score}
                      <Button
                        variant="contained"
                        color="secondary"
                        style={{
                          backgroundColor: "rgb(93, 2, 2)",
                          marginLeft: "90%"
                        }}
                        onClick={() => deleteScore(score.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell>
                  <Typography color="error">{message}</Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MyScores;
