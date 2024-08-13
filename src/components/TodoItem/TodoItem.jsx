import PropTypes from 'prop-types';
import { Typography, Button } from '@mui/material';

const TodoItem = ({
  todo,
  showShowButton = false,
  onShow,
  onEdit,
  onDelete,
  showEditButton = false,
}) => {
  return (
    <>
      <Typography variant="h4">{todo.title}</Typography>
      <Typography variant="body2">{todo.description}</Typography>
      <Typography variant="body1" style={{ fontStyle: 'italic' }}>
        Status: {todo.status}
      </Typography>
      {showShowButton && (
        <Button
          variant="contained"
          color="primary"
          onClick={onShow}
          style={{ marginRight: '10px', marginTop: '15px' }}
          size="small"
        >
          Show
        </Button>
      )}
      {showEditButton && (
        <Button
          variant="contained"
          color="primary"
          onClick={onEdit}
          style={{ marginRight: '10px', marginTop: '15px' }}
          size="small"
        >
          Edit
        </Button>
      )}

      <Button
        variant="contained"
        color="error"
        onClick={onDelete}
        style={{ marginRight: '10px', marginTop: '15px' }}
        size="small"
      >
        Remove
      </Button>
    </>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  showShowButton: PropTypes.bool,
  onEdit: PropTypes.func,
  onShow: PropTypes.func,
  onDelete: PropTypes.func.isRequired,
  showEditButton: PropTypes.bool,
};

export default TodoItem;
