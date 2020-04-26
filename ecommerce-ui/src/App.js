import React from 'react';
// import logo from './logo.svg';
import './App.css';
import airbnbs from "./airbnbs.json";
import VacationRentals from "./VacationRental"

function App() {
  return (
    <div className="App">
      <h1 className="mainTitle">VACTION RENTALS</h1>
      <div className="property">
        {airbnbs.map((vacationObj, index) => {
          vacationObj.key = index;
          return <VacationRentals {...vacationObj} />
        })}
      </div>
    </div>
  );
}

export default App;
