import React from 'react';
import PropTypes from 'prop-types';
import CardBody from './CardBody.jsx';
import CardTitle from './CardTitle.jsx';
import CardText from './CardText.jsx';

class Card extends React.Component {
  static Body = CardBody;
  static Title = CardTitle;
  static Text = CardText;
  render() {
    return <div className="card">{this.props.children}</div>;
  }
}

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;
