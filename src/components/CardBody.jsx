import React from 'react';
import PropTypes from 'prop-types';

class CardBody extends React.Component {
  render() {
    return <div className="card-body">{this.props.children}</div>;
  }
}

CardBody.propTypes = {
  children: PropTypes.node,
};
export default CardBody;
