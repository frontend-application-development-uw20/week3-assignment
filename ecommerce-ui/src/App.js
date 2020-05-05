import React from "react";
import json from "./_data/airbnbs.json";
import AirCard from "./card.js";
import styles from "./styles";
import "./App.css";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cartItems: [
        { id: "Denver House", price: "11" },
        { id: "St. Louis House", price: "12" },
      ],
    };
  }

  addCartItem = () => {
    this.setState({
      cartItems: [...this.state.cartItems, this.state.newCartItem],
      newCartItem: {
        id: this.id,
        price: this.price,
      },
    });
  };

  render() {

    return (
      <div className="card">
        <div>
        {json.map((json, i) => (
          <AirCard key={i} data={json} styles={styles()} />
        ))}
          <ul>
            {this.state.cartItems.map((items, idx) => (
              <li>
                {items.id} - {items.price}
                <button onclick="this.addCartItem()"> Add Cart Item </button>
              </li>
            ))}
          </ul>
          
        </div>
      </div>
      
    );
  }
}

export default App;

