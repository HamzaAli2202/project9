import React from "react";
import { Card, CardContent } from "@mui/material";
import { Home } from "./components/Home";
import { Colours } from "./components/Colours";
import { Emp } from "./components/Emp";
function App() {
  return (
    <Card>
      <CardContent>
        <Colours />

        <Home />
        <Emp />
      </CardContent>
    </Card>
  );
}

export default App;
