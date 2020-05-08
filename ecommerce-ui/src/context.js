import React, {Component} from 'react';
import {storeProducts, detailProduct} from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state={
    products:storeProducts,
    detailProduct:detailProduct
  };
  handleDetail = () => {
    console.log('hello from detail');
  };
  addToCart = () => {
    console.log('hello from addtocart');
  };
  render() {
    return (
      // value can be an object
      <ProductContext.Provider value={{
        //  de-structuring
        ...this.state,
        handleDetail:this.handleDetail,
        addToCart: this.addToCart
      }}>
          {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;
export {ProductProvider, ProductConsumer};
