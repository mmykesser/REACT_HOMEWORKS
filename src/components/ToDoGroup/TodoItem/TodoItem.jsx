import { Button, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const TodoItem = ({ title, body, remove }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
        <Button variant={'danger'} onClick={remove}>
          Remove
        </Button>
      </Card.Body>
    </Card>
  );
};

TodoItem.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  remove: PropTypes.func,
};

export default TodoItem;
