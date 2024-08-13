import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Select, MenuItem } from '@mui/material';

const TodoForm = ({ initialValues, onSubmit, showStatusSelect = false }) => {
  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required('Title required')
      .max(25, 'The title should not exceed 25 characters'),
    description: Yup.string()
      .required('Description required')
      .max(70, 'The description should not exceed 70 characters'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {({ errors, touched, values, setFieldValue }) => (
        <Form>
          <Field
            name="title"
            as={TextField}
            label="Title"
            variant="outlined"
            fullWidth
            error={touched.title && Boolean(errors.title)}
            helperText={touched.title && errors.title}
            style={{ marginBottom: '15px' }}
          />
          <Field
            name="description"
            as={TextField}
            label="Description"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            error={touched.description && Boolean(errors.description)}
            helperText={touched.description && errors.description}
            style={{ marginBottom: '15px' }}
          />
          {showStatusSelect && (
            <Select
              value={values.status}
              onChange={(e) => setFieldValue('status', e.target.value)}
              variant="outlined"
              fullWidth
              style={{ marginTop: '10px', marginBottom: '10px' }}
            >
              <MenuItem value="completed">Completed</MenuItem>
              <MenuItem value="not-completed">Not completed</MenuItem>
              <MenuItem value="pending">Pending</MenuItem>
            </Select>
          )}
          <Button
            variant="contained"
            color="success"
            type="submit"
            style={{ marginRight: '10px', marginTop: '15px' }}
          >
            Add
          </Button>
        </Form>
      )}
    </Formik>
  );
};

TodoForm.propTypes = {
  initialValues: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  showStatusSelect: PropTypes.bool,
};

export default TodoForm;
