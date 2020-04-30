import React from 'react';
import './App.css';
import airbnbs from "./airbnbs.json";
import VacationRentals from "./VacationRental";
import ShoppingCart from "./ShoppingCart";

function App() {
  // console.log(airbnbs[0].payment.cost);
  return (
    <div className="App">
      <h1 className="mainTitle">VACTION RENTALS</h1>
        <div className="container">
          <div className="flex-item items">
            <div className="item">
              {airbnbs.map((vacationObj, index) => {
                vacationObj.key = index;
                console.log(airbnbs[index])
                return <VacationRentals {...vacationObj} />
              })}
            </div>
          </div>
          <div className="flex-item cart">
            <div className="cart">
              <ShoppingCart />
            </div>
          </div>
      </div>
  </div>
  );
}

export default App;
