import { useState, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TodoForm from '../TodoForm';
import TodoItem from '../TodoItem';

const TodoList = () => {
  const [data, setData] = useState([]);

  const uniqueIdCounter = useRef(0);

  const uniqueId = (() => {
    uniqueIdCounter.current += 1;
    return () => {
      return `toDo_${uniqueIdCounter.current}`;
    };
  })();

  const handleSubmit = (item) => {
    const newItem = {
      ...item,
      id: uniqueId(),
    };

    setData([...data, newItem]);
  };

  const handleRemove = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  return (
    <div className="todo-list">
      <div className="text-center">
        <h1>To-do list</h1>
      </div>
      <Container>
        <Row>
          <Col xs={6}>
            <TodoForm onSubmit={handleSubmit}></TodoForm>
          </Col>
          <Col xs={6}>
            <Row>
              {data.map(({ id, title, description }) => {
                return (
                  <Col xs={4} key={id} data-id={id} className="mb-4">
                    <TodoItem
                      title={title}
                      body={description}
                      remove={() => handleRemove(id)}
                    />
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TodoList;
