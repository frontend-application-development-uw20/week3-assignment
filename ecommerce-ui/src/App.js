import React from "react";
import json from "./_data/airbnbs.json";
import AirCard from "./card.js";
import styles from "./styles";
import "./App.css";

 function App () {



    return (
      <div className="card">
        {json.map((json, i) => (
          <AirCard key={i} data={json} styles={styles()} />
        ))}
      </div>
    );
  }


export default App;
