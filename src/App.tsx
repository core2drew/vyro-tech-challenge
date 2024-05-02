import React from "react";
import vyroSquareLogo from "./vyroSquareLogo.svg";
import styles from "./App.module.scss";
import Vehicle from "./components/Vehicle";

// TODO
// Load the mockedVehicles from the GraphQL API
// See ./mockedVehicles.ts for API details
// import { mockedVehicles } from "./mockedVehicles";
import { useQueryVehicles } from "./hooks/useQueryVehicles";
import { Spinner } from "./components/Spinner";

function App() {
  const { data: vehicles, loading } = useQueryVehicles();

  return (
    <div className={styles.app}>
      {loading && <Spinner />}
      <img src={vyroSquareLogo} className={styles.logo} alt="Vyro logo" />
      <h1>Welcome to Vyro</h1>
      <div className={styles.grid}>
        {vehicles.map((vehicle, index) => (
          <Vehicle key={index} {...vehicle} />
        ))}
      </div>
    </div>
  );
}

export default App;
