import React from "react";
import { Button } from "@mui/material";
import Grid from "./components/Grid.jsx";
import Card from "./components/Card.jsx";

const App = () => {
    return (
        <>
            <div>
                <Button variant="contained" color="primary">
                    Hello World
                </Button>
            </div>
            <Grid />
            <Card />
        </>    
    )
}

export default App;