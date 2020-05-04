import React from "react";
import json from "./_data/airbnbs.json";
import AirCard from "./card.js";
import styles from "./styles";
import "./App.css";
import Cart from "./cart.js"

function App() {
  return (
    <div className="card">
      {json.map((json, i) => (
        <AirCard key={i} data={json} styles={styles()} cart={Cart} />
      ))}
    <div><Cart id='12' price='234'/></div>
    </div>

  );
}

export default App;
