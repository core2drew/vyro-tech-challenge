import React from "react";
import vyroSquareLogo from "./vyroSquareLogo.svg";
import styles from "./App.module.scss";
import Vehicle from "./components/Vehicle";

// TODO
// Load the mockedVehicles from the GraphQL API
// See ./mockedVehicles.ts for API details
import { mockedVehicles } from "./mockedVehicles";

function App() {
  return (
    <div className={styles.app}>
      <img src={vyroSquareLogo} className={styles.logo} alt="Vyro logo" />
      <h1>Welcome to Vyro</h1>
      <div className={styles.grid}>
        {mockedVehicles.map((vehicle) => (
          <Vehicle {...vehicle} />
        ))}
      </div>
    </div>
  );
}

export default App;
