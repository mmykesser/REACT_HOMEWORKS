import React from 'react';
import PropTypes from 'prop-types';

class CardBody extends React.Component {
  render() {
    const { title, text } = this.props;
    return (
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{text}</p>
      </div>
    );
  }
}

CardBody.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
};

CardBody.defaultPtrops = {
  text: 'Some text',
  title: 'Some title',
};
export default CardBody;
