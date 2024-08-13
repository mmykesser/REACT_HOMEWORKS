import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Grid,
  Paper,
  Button,
  Card,
  CardContent,
} from '@mui/material';
import TodoForm from '../../components/TodoForm/TodoForm';
import TodoItem from '../../components/TodoItem/TodoItem';
import RouteNames from '../../routerConfig/routeNames';
import storageService from '../../utils/StorageService';

const HomePage = () => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    storageService.getData().then(setTodos);
  }, []);

  const handleAddTodo = async (values) => {
    const newTodo = await storageService.saveItem(values);
    setTodos([...todos, newTodo]);
  };

  const handleRemove = async (id) => {
    await storageService.deleteItem(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>To-do List</h1>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Paper style={{ padding: '20px', marginBottom: '20px' }}>
              <TodoForm
                initialValues={{
                  title: '',
                  description: '',
                  status: 'pending',
                }}
                onSubmit={handleAddTodo}
              />
              <Button
                variant="contained"
                color="secondary"
                onClick={() => navigate(RouteNames.allTodos)}
                style={{ marginTop: '10px' }}
                size="small"
              >
                Show all ToDo
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Grid container spacing={2}>
              {todos.map((todo) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  key={`${todo.id}+${todo.title}`}
                >
                  <Card style={{ marginBottom: '15px' }}>
                    <CardContent>
                      <TodoItem
                        todo={todo}
                        onShow={() =>
                          navigate(
                            RouteNames.singleItem.replace(':itemId', todo.id)
                          )
                        }
                        onDelete={() => handleRemove(todo.id)}
                        showShowButton={true}
                        showEditButton={false}
                      />
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;
