import React from 'react';
import Rating from './Rating';
import PropTypes from 'prop-types';
import '../App.scss';

class Card extends React.Component {
    static propTypes = {
        data: PropTypes.shape({
            image: PropTypes.string,
            houseType: PropTypes.string,
            title: PropTypes.string,
            location: PropTypes.shape({
                city: PropTypes.string,
                country: PropTypes.string
            }),
            payment: PropTypes.shape({
                cost: PropTypes.number,
                description: PropTypes.string
            }),
            rating: PropTypes.shape({
                start: PropTypes.number,
                reviews: PropTypes.number
            })
        })
    }
    
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        const { image, houseType, title, location, payment, rating } = this.props.data
        return(
            <div className="card">
                <div className="imageContent">
                    <Rating rating={rating} />
                    <img src={image} alt={title} />
                    {payment.description ? <div className="description">{payment.description}!</div> : null}
                </div>
                <div className="cardContent">
                  <h3>{houseType}</h3>  
                  <p>{`${location.city}, ${location.country}`}</p>
                  <p>{title}</p>
                  <p><em>${payment.cost}</em> / night</p>
                  <button onClick={this.props.addToCart.bind(this, this.props.data)}>Book Now</button>
                </div>
            </div>
        )
    }
}

export default Card;