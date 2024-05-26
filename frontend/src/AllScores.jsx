import { useState, useEffect } from "react";
import axios from "axios";
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
} from "@mui/material";
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
    <Box
      display="flex"
      justifyContent="center"
      alignItems="stretch"
      height="80vh"
    >
      <TableContainer component={Paper} style={{ backgroundColor: "#1B1212", border: "1px solid rgb(93, 2, 2)" }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ color: "white" }}>Players</TableCell>
              <TableCell style={{ color: "white" }} align="right">Scores</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {scores ? (
              scores.map((score) => (
                <TableRow key={score.id}>
                  <TableCell component="th" scope="row" style={{ color: "white" }}>
                    {score.username}
                  </TableCell>
                  <TableCell align="right" style={{ color: "white" }}>{score.score}</TableCell>
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

export default AllScores;
