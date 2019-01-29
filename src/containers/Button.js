import React from 'react';
import { connect } from 'react-redux';
import { getItems } from '../actions'

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button 
        onClick={this.props.getItems}
      >Click here</button>
    );
  }

};

const mapDispatchToProps = {
  getItems: getItems,
};

Button = connect(
  null,
  mapDispatchToProps,
)(Button);

export default Button;
