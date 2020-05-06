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
            cartList: [],
            hide: true,
            new_airbnbs:{
                "title":'',
                "houseType": ' ',
                "image": ' ',
                "location": {
                    "city": ' ',
                    "country": ' '
                 },
                "payment": {
                    "cost": ' ' ,
                    "description": ' '
                 },
                 "host": {
                    "name": ' ',
                    "isSuperhost": ' '
                 },
                 "rating": {
                 "stars": ' ',
                "reviews": ' '
                 },
                 
        },
            showForm: false
                
            
         
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
       
    }

    handleClick(e, id) {
        
        
        let thisCard = document.getElementById(id);
        let thisCardTitle = document.getElementById(id+"-title");
        let thisCardCost = document.getElementById(id+"-cost");
        
        let itemClicked = {
            "id": id,
            "title": thisCardTitle.innerText,
            "cost": thisCardCost.innerText
        }
        let itemAlreadyInCart = false;
       this.setState(prevState=>{

           
           const cartList= prevState.cartList;
           //this.state.hide= true;
           cartList.forEach(item => {
               
               if(item.id === id){
                   itemAlreadyInCart = true;
                   
               }
           });
           
           if(!itemAlreadyInCart){

                cartList.push(itemClicked);
           }

           return cartList;
           
       });
    
      this.state.hide = false;
    }


    handleRemoveFromCart(e,item){
        
        this.setState(prevState=>{
           const cartList= prevState.cartList.filter(elm => elm.id!= item.id)
           return {cartList}
  
        });
 
   
    }


    addAirbnbs= (e) =>{
        e.preventDefault();
        this.setState({
            airbnb_details:[...this.state.airbnb_details, this.state.new_airbnbs],
            new_airbnbs:{
                "title":'',
                "houseType": ' ',
                "image": ' ',
                "location": {
                    "city": ' ',
                    "country": ' '
                 },
                "payment": {
                    "cost": ' ' ,
                    "description": ' '
                 },
                 "host": {
                    "name": ' ',
                    "isSuperhost": ' '
                 },
                 "rating": {
                 "stars": ' ',
                "reviews": ' '
                 },
            },
            showForm: false

        })
    }

    renderForm () {
        
        return (
            <div ClassName= "new-airbnb-form">
                <form onSubmit={this.addAirbnbs}>
                    <label>Title: </label>
                        <input type= "text" name= 'title' value={this.state.new_airbnbs.title} onChange= {this.handleInputChange}
                        />
                    <label> House Type : </label>
                        <input type= "text" name= 'houseType' value={this.state.new_airbnbs.houseType} onChange= {this.handleInputChange}
                        />
                    <label> Image : </label>
                        <input type= "url" name= 'image' value={this.state.new_airbnbs.image} onChange= {this.handleInputChange}
                        />
                    
                    <label> City : </label> 
                        <input type= "text" name= 'city' value={this.state.new_airbnbs.location.city} onChange= {this.handleInputChange}
                        />
                    <label> Country : </label> 
                        <input type= "text" name= 'country' value={this.state.new_airbnbs.location.country} onChange= {this.handleInputChange}
                        />
                    <label> Cost : </label> 
                        <input type= "text" name= 'cost' value={this.state.new_airbnbs.payment.cost} onChange= {this.handleInputChange}
                        /> 
                    <label> Payment Description : </label> 
                        <input type= "text" name= 'description' value={this.state.new_airbnbs.payment.description} onChange= {this.handleInputChange}
                        /> 
                    <label> HostName : </label> 
                        <input type= "text" name= 'name' value={this.state.new_airbnbs.host.name} onChange= {this.handleInputChange}
                        /> 
                    <label> isSuperhost: </label>
                        <input type= "checkbox" name= 'IsSuperhost' value={this.state.new_airbnbs.host.isSuperhost} onChange= {this.handleInputChange}
                        /> 
                

                    <button type="submit">Add Airbnb</button>  
            
                    
                </form>
            </div>

        
        );
     }

    handleInputChange = (e) => {
        const value= e.target.value;
        console.log(e.target.name);
        if (e.target.name === "city" ) {
            this.setState({
                new_airbnbs: {
                    ...this.state.new_airbnbs,
                    "location": {
                        [e.target.name]: value,
                    }
                },
                
            })
        }
        
        else {
            this.setState({
                new_airbnbs: {
                    ...this.state.new_airbnbs,
                    [e.target.name]: value,
                    
                },
                
            })
        }
        
    }

    



    renderAirbnb_list(){
        return <Airbnb_list airbnb_details={this.state.airbnb_details} onClick={this.handleClick}/>
    }
    renderCart(){
        return <Cart cartList= {this.state.cartList} handleRemoveFromCart= {this.handleRemoveFromCart} />
    
    }

    render(){
        const { hidden} = this.state.hide;
        return(
            <div>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet"></link>
                <hr></hr >
                <div className= "main_page">
                    <i className="material-icons">house</i>
                    <h2 className= "heading">@Home Rentals</h2>
                    <div>
                        <button className= "host" onClick={() => this.setState({showForm: true})}>Host your rental </button>
                        {this.state.showForm && this.renderForm()}
                        
                    </div>
                    
                </div>
                <hr />
                <div className= "section">
                {this.renderAirbnb_list()}  
                {this.state.hide? null: <div>{this.renderCart()}</div>}
                {/* {this.renderCart()}  */}
                </div>

            </div>
            
        
            
        );
    }

    
    
}

export default Main_screen;
