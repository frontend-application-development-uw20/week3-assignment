import React from 'react';
import './App.css';
import airbnbs from "./airbnbs.json";
import VacationRentals from "./VacationRental";
import ShoppingCart from "./ShoppingCart";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import { withGlobalState } from 'react-globally'

function App() {

  return (
    <div className="App">
      {/* <h1 className="mainTitle">VACTION RENTALS</h1> */}
      <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="#home">VACATION RENTALS</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="#cart"><ShoppingCart /></a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
        <div className="container">
          <div className="flex-item items">
            <div className="item">
              {airbnbs.map((vacationObj, index) => {
                vacationObj.key = index;
                return <VacationRentals {...vacationObj} />
              })}
            </div>
          </div>
          <div className="flex-item cart">
            <div className="cart">
              {/* <ShoppingCart /> */}
            </div>
          </div>
      </div>
  </div>
  );
}

export default App;
