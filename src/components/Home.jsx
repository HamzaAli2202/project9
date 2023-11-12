import React, { useState } from "react";
import { Grid, Button, TextField } from "@mui/material";

export const Home = () => {
  const [cat, setCat] = useState("");
  const [data, setData] = useState(["Fashion", "Cosmetics", "Kids", "Toys"]);
  return (
    <Grid container spacing={2} sx={{ marginBottom: 5 }}>
      <Grid item xs={8}>
        <TextField
          onChange={(e) => setCat(e.target.value)}
          variant="outlined"
          label="Add Category"
          fullWidth
        />
      </Grid>
      <Grid item xs={4}>
        <Button
          sx={{ height: 55 }}
          variant="contained"
          fullWidth
          color="secondary"
          onClick={() => setData([...data, cat])}
        >
          Submit
        </Button>
      </Grid>
      {data.map((item) => (
        <Grid item xs={2}>
          <Button variant="contained" color="success" fullWidth>
            {item}
          </Button>
        </Grid>
      ))}
      ;
    </Grid>
  );
};
