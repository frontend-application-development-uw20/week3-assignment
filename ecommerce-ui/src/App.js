import React, {Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Details from './components/Details';
import Default from './components/Default';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Modal from './components/Modal';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Switch>
        // add "exact" to Route because slash also matches other route
          <Route exact path="/" component={ProductList}></Route>
          <Route path="/details" component={Details}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route component={Default}></Route>
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
