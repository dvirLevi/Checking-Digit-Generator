// import { useState } from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";

const Inputs = ({ validateNumbers }) => {
  const [numbersInputs] = useState([
    {
      name: "inp-1",
    },
    {
      name: "inp-2",
    },
    {
      name: "inp-3",
    },
    {
      name: "inp-4",
    },
    {
      name: "inp-5",
    },
    {
      name: "inp-6",
    },
    {
      name: "inp-7",
    },
    {
      name: "inp-8",
    },
  ]);

  const setValue = (name, value) => {
    numbersInputs.forEach((el) => {
      if (el.name === name) el.value = +value;
    });
    validateNumbers(numbersInputs.map((el) => el.value));
  };

  const navigateInSquare = (e, { diraction, whenToNext }) => {
    const { value, name } = e.target;
    const fieldIndex = name.split("-")[1];
    if (isNaN(value)) {
      e.target.value = "";
      return;
    }
    if (value.length >= whenToNext) {
      const nextSibling = document.querySelector(`input[name=inp-${parseInt(fieldIndex, 10) + diraction}]`);
      if (nextSibling !== null) nextSibling.focus();
    }
    setValue(name, e.target.value);
  };

  const nextSquare = (e) => {
    navigateInSquare(e, { diraction: 1, whenToNext: 1 });
  };

  const deleteText = (e) => {
    if (e.keyCode === 8) {
      if (!e.target.value) navigateInSquare(e, { diraction: -1, whenToNext: 0 });
    }
  };

  const listInputs = numbersInputs.map((item) => (
    <TextField
      type="text"
      name={item.name}
      // value={item.value}
      inputProps={{ maxLength: 1 }}
      onChange={nextSquare}
      onKeyDown={deleteText}
      key={item.name}
      sx={{
        m: 1,
        width: "50px",
      }}
    />
  ));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {listInputs}
    </Box>
  );
};

export default Inputs;
