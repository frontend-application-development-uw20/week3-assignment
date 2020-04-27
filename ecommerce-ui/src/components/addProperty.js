import React from 'react';
import PropTypes from 'prop-types';
import AddPropertyForm from './addPropertyForm';


class AddProperty extends React.Component {
  static propTypes = {
    addPropertyListing: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props)
    this.state = {
      displayForm: false,
      property: [],
    }
  }

  displayForm = (e) => {
    e.preventDefault();
    this.setState({
      displayForm: true,
    })
  }

  hideForm = (e) => {
    this.setState({
      displayForm: false,
    })
  }

  render() {
    return (
      <div className={'add-property-container'}>
        <span
          className={'fake-link'}
          onClick={this.displayForm}
        >
          List a property
        </span>
        { this.state.displayForm
          ? <AddPropertyForm
              hideForm={this.hideForm}
              addPropertyListing={this.props.addPropertyListing}
            >
            </AddPropertyForm>
          : null
        }
      </div>
    )
  }
}

export default AddProperty;
