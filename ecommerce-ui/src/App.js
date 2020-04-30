import React from 'react';
import './App.css';
import airbnbs from "./airbnbs.json";
import VacationRentals from "./VacationRental";
import ShoppingCart from "./ShoppingCart";

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
      <div>
        {airbnbs.map((cartObj, index) => {
          cartObj.key = index;
          return <ShoppingCart {...cartObj} />
        })}
      </div>
    </div>
  );
}

export default App;
