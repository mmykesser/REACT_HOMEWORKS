import React from 'react';
import PropTypes from 'prop-types';

class CardText extends React.Component {
  render() {
    return <p className="card-text">{this.props.children}</p>;
  }
}

CardText.propTypes = {
  children: PropTypes.node,
};

export default CardText;
