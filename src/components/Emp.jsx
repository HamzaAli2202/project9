import React, { useState } from "react";
import { Grid, Card, CardContent, Button, TextField } from "@mui/material";

export const Emp = () => {
  const [input, setInput] = useState();
  const [data, setData] = useState(["Revan", "Suresh"]);
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <TextField
          onChange={(e) => setInput(e.target.value)}
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={4}>
        <Button
          sx={{ height: 55 }}
          onClick={() => setData([...data, input])}
          variant="contained"
          color="warning"
          fullWidth
        >
          Submit
        </Button>
      </Grid>
      {data.map((item) => (
        <Grid item xs={3}>
          <Card sx={{ bgcolor: "skyblue", height: 100 }}>
            <CardContent>MR {item.toUpperCase()}</CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
