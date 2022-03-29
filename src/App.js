import "./App.css";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Inputs from "./components/Inputs";
import checkDigit from "./helpers/checkDigit";

const App = () => {
  const [checkingDigit, setCheckingDigit] = useState(0);
  const [digits, setDigits] = useState([]);

  const validateNumbers = (arr) => {
    setDigits(() => {
      return arr.map((el) => {
        if (!el) return 0;
        return el;
      });
    });
  };

  useEffect(() => {
    if (digits.length) setCheckingDigit(checkDigit({ digitsArr: digits }));
  }, [digits]);

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          flexDirection: "row",
          p: 1,
          // bgcolor: "#cfe8fc",
          textAlign: "center",
        }}
      >
        <h2>Checking Digit Generator for Israeli Id</h2>
        <Inputs validateNumbers={validateNumbers} />
        <h1>{checkingDigit}</h1>
      </Box>
    </Container>
  );
};

export default App;
