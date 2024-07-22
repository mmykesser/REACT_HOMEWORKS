import React from 'react';
import PropTypes from 'prop-types';

class CardTitle extends React.Component {
  render() {
    return <h4 className="card-title">{this.props.children}</h4>;
  }
}

CardTitle.propTypes = {
  children: PropTypes.node,
};

export default CardTitle;
