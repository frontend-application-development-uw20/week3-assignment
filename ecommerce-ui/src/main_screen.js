import React from 'react';
import PropTypes from 'prop-types';
import airbnb_details from './airbnbs.json';
import Airbnb_list from './Airbnb_list';
import Cart from './Cart';





class Main_screen extends React.Component {
    static propTypes = {
        airbnb_details: PropTypes.arrayOf(
            PropTypes.shape({
            title: PropTypes.string.isRequired,
            houseType: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            location:PropTypes.arrayOf(
                PropTypes.shape({
                    city: PropTypes.string.isRequired,
                    country: PropTypes.string.isRequired,
                })),
            payment:PropTypes.arrayOf(
                    PropTypes.shape({
                        cost: PropTypes.number.isRequired,
                        description: PropTypes.string.isRequired,
                })),
            host:PropTypes.arrayOf(
                        PropTypes.shape({
                            name: PropTypes.number.isRequired,
                            isSuperhost: PropTypes.bool.isRequired,
                })),
            rating:PropTypes.arrayOf(
                        PropTypes.shape({
                                stars: PropTypes.number.isRequired,
                                reviews: PropTypes.number.isRequired,
                 })),
        })),


    }

    constructor(props){
        super(props);
        this.state={
            airbnb_details: airbnb_details,
            cartList: []
         
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
       
    }

    handleClick(e, id) {
        console.log("clicked!*******");
        console.log(id);
        let thisCard = document.getElementById(id);
        let thisCardTitle = document.getElementById(id+"-title");
        let thisCardCost = document.getElementById(id+"-cost");
        console.log(thisCardTitle.innerText);
        let itemClicked = {
            "id": id,
            "title": thisCardTitle.innerText,
            "cost": thisCardCost.innerText
        }
        let itemAlreadyInCard = false;
       this.setState(prevState=>{
           const cartList= prevState.cartList;
           cartList.forEach(item => {
               console.log("looping through cart!")
               if(item.id === id){
                   console.log("item already in cart: "+item.id)
                   itemAlreadyInCard = true;
                   //Nothing to do
               }
           });
           
           if(!itemAlreadyInCard){
               console.log("not in cart")
                cartList.push(itemClicked);
           }

           return cartList;
           
       });
    
      
    }


    handleRemoveFromCart(e,item){
        this.setState(prevState=>{
           const cartList= prevState.cartList.filter(elm => elm.id!= item.id)

           return {cartList}

        });

    }



    renderAirbnb_list(){
        return <Airbnb_list airbnb_details={this.state.airbnb_details} onClick={this.handleClick}/>
    }
    renderCart(){
        return <Cart cartList= {this.state.cartList} handleRemoveFromCart= {this.handleRemoveFromCart} />
    
    }

    render(){
        return(
            <div>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet"></link>
                <hr></hr >
                <div>
                    <i className="material-icons">house</i>
                    <h2 className= "heading">@Home Rentals</h2>
                </div>
                <hr />
                <div className= "section">
                {this.renderAirbnb_list()}          
                {this.renderCart()}
                </div>

            </div>
            
        
            
        );
    }

    
    
}

export default Main_screen;
