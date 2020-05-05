import React from 'react';
import json from './_data/airbnbs.json'
import AirCard from './card.js'


function App() {
  return (
    <div className="wrap">
      <div className="card">
        {json.map((json, i) => <AirCard key={i} data={json} />)}
      </div>
    </div>
  );
};


export default App;
