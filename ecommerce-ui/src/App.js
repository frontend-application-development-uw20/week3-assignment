import React from 'react';
import './App.css';
import airbnbs from "./airbnbs.json";
import VacationRentals from "./VacationRental";
import ShoppingCart from "./ShoppingCart";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { withGlobalState } from 'react-globally';
import { FaBuilding } from 'react-icons/fa';

function App() {

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="#home"><FaBuilding /> VACATION RENTALS</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="#cart"><ShoppingCart /></a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
        <div className="container, background">
          <div className="flex-item items">
            <div className="item">
              {airbnbs.map((vacationObj, index) => {
                vacationObj.key = index;
                return <VacationRentals {...vacationObj} />
              })}
            </div>
          </div>
      </div>
  </div>
  );
}

export default withGlobalState(App);
