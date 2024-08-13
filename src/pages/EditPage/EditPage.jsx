import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Snackbar } from '@mui/material';
import TodoForm from '../../components/TodoForm/TodoForm';
import RouteNames from '../../routerConfig/routeNames';
import storageService from '../../utils/StorageService';

const EditPage = () => {
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

  const handleSubmit = async (values) => {
    const updatedTodo = { ...todo, ...values };
    const savedTodos = await storageService.getData();
    const updatedTodos = savedTodos.map((t) =>
      t.id === updatedTodo.id ? updatedTodo : t
    );
    await storageService._rewriteStorageData(updatedTodos);
    setShowSnackbar(true);
    setTimeout(() => {
      navigate(RouteNames.singleItem.replace(':itemId', itemId));
    }, 1500);
  };

  if (!todo) return <div>Loading...</div>;

  return (
    <Container style={{ padding: '20px' }}>
      <Typography variant="h4">Edit Todo</Typography>
      <TodoForm
        initialValues={todo}
        onSubmit={handleSubmit}
        showStatusSelect={true}
      />
      <Snackbar
        open={showSnackbar}
        autoHideDuration={3000}
        onClose={() => setShowSnackbar(false)}
        message="Todo updated successfully"
      />
    </Container>
  );
};

export default EditPage;
