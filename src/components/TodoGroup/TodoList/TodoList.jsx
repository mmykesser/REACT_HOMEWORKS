import { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TodoForm from '../TodoForm';
import TodoItem from '../TodoItem';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  handleSubmit = (item) => {
    this.setState({ data: [...this.state.data, item] });
  };

  render() {
    return (
      <div className="todo-list">
        <div className="text-center">
          <h1>To-do list</h1>
        </div>
        <Container>
          <Row>
            <Col xs={6}>
              <TodoForm onSubmit={this.handleSubmit}></TodoForm>
            </Col>
            <Col xs={6}>
              <Row>
                {this.state.data.map(({ title, description }, index) => {
                  return (
                    <Col
                      xs={4}
                      key={title + `_` + index}
                      data-id={title + `_` + index}
                      className="mb-4"
                    >
                      <TodoItem title={title} body={description} />
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default TodoList;
