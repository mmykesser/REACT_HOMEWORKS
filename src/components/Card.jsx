import React from 'react';
import CardBody from './CardBody.jsx';

class Card extends React.Component {
  render() {
    return (
      <div className="Card">
        <CardBody text="Text" title="Title" />
      </div>
    );
  }
}

export default Card;
