import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const TodoForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ title: '', description: '' });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    for (const key in formData) {
      if (formData[key].trim() === '') {
        return alert(`${key} is empty`);
      }
    }
    onSubmit({ ...formData });
    setFormData({
      title: '',
      description: '',
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="todoItemTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          name="title"
          type="text"
          placeholder="I am going..."
          onChange={handleChange}
          value={formData.title}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="todoItemDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          name="description"
          as="textarea"
          type="description"
          placeholder="Enter description"
          onChange={handleChange}
          value={formData.description}
        />
      </Form.Group>
      <Button type="submit">Add</Button>
    </Form>
  );
};

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default TodoForm;
