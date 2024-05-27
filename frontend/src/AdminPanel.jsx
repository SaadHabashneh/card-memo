import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AppContext } from "./Context";
import "./App.css";
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

const AdminPanel = () => {
  const { token } = useContext(AppContext);
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUsers(response.data.users);
      })
      .catch((err) => {
        setMessage(err.response.data.message);
      });
  }, [token]);

  const deleteUser = (id) => {
    axios
      .put(`${import.meta.env.VITE_URL}/users/${id}`, {
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
              <TableCell style={{ color: "white" }}>Players</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users ? (
              users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell align="center" style={{ color: "white" }}>
                    {user.username}
                    <Button
                      variant="contained"
                      color="secondary"
                      style={{
                        backgroundColor: "rgb(93, 2, 2)",
                        marginLeft: "90%",
                      }}
                      onClick={() => deleteUser(user.id)}
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

export default AdminPanel;
