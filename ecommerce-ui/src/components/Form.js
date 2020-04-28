import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import '../App.scss';

class Form extends React.Component {
    static propTypes = {
        class: PropTypes.bool,
        postHotel: PropTypes.func,
        toggleForm: PropTypes.func
    }
   
    constructor(props) {
        super(props);
        this.state = {
            houseType: 'House',
            city: '',
            country: 'USA',
            title: '',
            cancellation: false,
            image: '',
            cost: 0,
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(e) {
        let change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const item = {
            title: this.state.title,
            houseType: this.state.houseType,
            image: this.state.image,
            location: {
                city: this.state.city,
                country: this.state.country,
            },
            payment: {
                cost: this.state.cost,
                description: this.state.cancellation ? 'Free cacellation' : '',
            },
            rating: {
                stars: 3,
                reviews: 0,
            }
        }
        console.log(item)
        this.props.postHotel(item);
        this.setState({
            houseType: 'House',
            city: '',
            country: 'USA',
            title: '',
            cancellation: false,
            image: '',
            cost: 0,
        })
    }


    render() {
        return(
            <div className={this.props.class ? "form showForm" : "form"}>
                <h2>Add a Listing</h2>
                <button className="close" onClick={this.props.toggleForm}><FontAwesomeIcon icon={faWindowClose} /></button>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="houseType">Type of accomodation</label>
                    <select onChange={this.handleInputChange} required name="houseType" id="houseType">
                        <option value="Entire House">House</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Private Room">Private Room</option>
                        <option value="Public Room">Public Room</option>
                    </select>

                    <div className="formGroup">
                        <div>
                            <label htmlFor="city">City</label>
                            <input onChange={this.handleInputChange} required id="city" name="city" type="text" />
                        </div>
                        <div>
                            <label htmlFor="country">Country</label>
                            <select onChange={this.handleInputChange} required name="country" id="country">
                                <option value="USA">United States of America</option>
                                <option value="Canada">Canada</option>
                                <option value="Mexico">Mexico</option>
                            </select>
                        </div>
                    </div>
                    
                    <label htmlFor="title">Describe the property (max 50 characters)</label>
                    <input onChange={this.handleInputChange} required id="title" maxLength="50" name="title" type="text" />

                    <label htmlFor="image">Image URL</label>
                    <input onChange={this.handleInputChange} required type="url" name="image" />

                    <div className="formGroup">
                        <div>
                            <label htmlFor="cost">Cost per night</label>
                            <input onChange={this.handleInputChange} required type="number" name="cost" min="10" step="5" max="1000" />
                        </div>

                        <div className="checkbox">
                            <label htmlFor="cancellation">Allow Free Cancellation?</label>
                            <input onChange={this.handleInputChange} type="checkbox" name="cancellation" />
                        </div>
                    </div>
                    
                    <button className="button">Submit</button>

                </form>
            </div>
        )
    }
}

export default Form;