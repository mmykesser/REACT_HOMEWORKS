import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Grid, Button } from '@mui/material';
import TodoItem from '../../components/TodoItem/TodoItem';
import RouteNames from '../../routerConfig/routeNames';
import storageService from '../../utils/StorageService';
import styles from './AllTodos.module.css';

const AllTodos = () => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    storageService.getData().then(setTodos);
  }, []);

  const handleDelete = async (id) => {
    await storageService.deleteItem(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Container className={styles.allTodos}>
      <h1 className={styles.allTodos_h1}>All ToDo</h1>
      <Grid container spacing={2}>
        {todos.map((todo) => (
          <Grid item xs={12} sm={6} md={4} key={`${todo.id}+${todo.title}`}>
            <TodoItem
              todo={todo}
              onEdit={() =>
                navigate(RouteNames.editItem.replace(':itemId', todo.id))
              }
              onDelete={() => handleDelete(todo.id)}
            />
          </Grid>
        ))}
      </Grid>
      <Button
        variant="outlined"
        color="error"
        onClick={() => navigate(RouteNames.home)}
        style={{ marginTop: '20px' }}
        size="small"
      >
        Back to Home
      </Button>
    </Container>
  );
};

export default AllTodos;
