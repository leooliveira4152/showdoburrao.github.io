import React, { useState } from "react";
import logo from "../assets/logo.png";
import "./App.css";
import { Button } from "@mui/material";
import { getFirestore } from "firebase/firestore";

function App() {
  const db = getFirestore();
  const randomColorPalette = ["white", "red", "blue", "green", "purple"];

  const [clicks, setClicks] = useState(0);
  const styles = useStyles();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" style={styles.logo} />
        <p style={styles.baseText}>
          Show do <span style={styles.bigDumbText}>Burrão</span>
        </p>
        <Button
          variant="contained"
          onClick={() => {
            const currentClicks = clicks + 1;
            if (currentClicks === randomColorPalette.length) setClicks(0);
            else setClicks(currentClicks);
          }}>
          Burrão?
        </Button>
      </header>
    </div>
  );

  function useStyles(): Record<string, React.CSSProperties> {
    const currentColor = randomColorPalette[clicks];
    return {
      logo: {
        borderWidth: 10,
        borderColor: currentColor,
        borderStyle: "solid",
      },
      baseText: { fontSize: 40 },
      bigDumbText: { color: currentColor },
    };
  }
}

export default App;
