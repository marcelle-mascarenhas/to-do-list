import { Button, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    //borda sem entrada
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "orange"
    },

   //cor da fonte
    "& .MuiOutlinedInput-input": {
      color: "orange"
    },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "blue"
  },
    //label fieldset
    "& .MuiInputLabel-outlined": {
      color: "orange"
    },
  }
}); 

export default function Form({ addTodo }) {
  const [text, setText] = useState(null);
  const [id, setId] = useState(0);

  const classes = useStyles();

  const todoCreate = (text) => {
    const todoObj = { text: text, id: id };
    setId(id + 1);
    addTodo(todoObj);
    document.getElementById("outlined-basic").value = null;
  };

  return (
    <Paper style={{ padding: "1em" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TextField 

          className={classes.root}
          id="outlined-basic"
          label="Dimensão"
          variant="outlined"
          onChange={(e) => setText(e.target.value)}
          fullWidth
          
        />
      <Button style={{ color: "blue" }} variant="text" onClick={() => todoCreate(text)}>
          Add
        </Button>
      </div>
    </Paper>
  );
}
