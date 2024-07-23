import { Component } from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title, body } = this.props;
    return (
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{body}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

TodoItem.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};

export default TodoItem;
