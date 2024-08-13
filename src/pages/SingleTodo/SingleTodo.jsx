import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Button, Snackbar } from '@mui/material';
import TodoItem from '../../components/TodoItem/TodoItem';
import RouteNames from '../../routerConfig/routeNames';
import storageService from '../../utils/StorageService';

const SingleTodo = () => {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState(null);
  const [showSnackbar, setShowSnackbar] = useState(false);

  useEffect(() => {
    storageService.getData().then((savedTodos) => {
      const foundTodo = savedTodos.find((t) => t.id === parseInt(itemId));
      setTodo(foundTodo);
    });
  }, [itemId]);

  const handleDelete = async () => {
    await storageService.deleteItem(parseInt(itemId));
    navigate(RouteNames.home);
  };

  if (!todo) return <div>Loading...</div>;

  return (
    <Container style={{ padding: '20px' }}>
      <TodoItem
        todo={todo}
        onEdit={() => navigate(RouteNames.editItem.replace(':itemId', itemId))}
        onDelete={handleDelete}
        showEditButton={true}
      />
      <Button
        variant="contained"
        color="secondary"
        onClick={() => navigate(RouteNames.home)}
        style={{ marginTop: '15px' }}
        size="small"
      >
        Back to Home
      </Button>
      <Snackbar
        open={showSnackbar}
        autoHideDuration={3000}
        onClose={() => setShowSnackbar(false)}
        message="Todo edited successfully"
      />
    </Container>
  );
};

export default SingleTodo;
