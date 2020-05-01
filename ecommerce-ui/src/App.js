import React from 'react';
import './App.css';
import rentalData from './airbnbs.json';
import Rental from './rental';

function App() {
  return (
    <div className="App">
      <h1> Vacation Rental</h1>
      <Rental rData={rentalData} />
    </div >
  );
}

export default App;
