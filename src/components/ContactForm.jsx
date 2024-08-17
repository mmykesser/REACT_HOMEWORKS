import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import RouteNames from '../routerConfig/routeNames.js';
import { TextField, Button, Typography } from '@mui/material';
import { addContact, updateContact } from '../store/slices/contactSlices.js';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string()
    .matches(/^[A-Za-z\s]+$/, 'Name can only contain letters')
    .required('Name is required'),
  phoneNumber: Yup.string()
    .matches(/^\+?[0-9]+$/, 'Phone number can only contain numbers')
    .required('Phone number is required'),
});

const ContactForm = () => {
  const [initialValues, setInitialValues] = useState({
    name: '',
    phoneNumber: '',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const contact = useSelector((state) =>
    state.contacts.find((contact) => contact.id === parseInt(id))
  );

  useEffect(() => {
    if (contact) {
      setInitialValues({
        name: contact.name,
        phoneNumber: contact.phoneNumber,
      });
    }
  }, [contact]);

  const handleSubmit = (values) => {
    if (id) {
      dispatch(updateContact({ id: parseInt(id), ...values }));
    } else {
      dispatch(addContact(values));
    }
    navigate(RouteNames.homePage);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ handleChange, handleBlur, errors, touched }) => (
        <Form>
          <Typography variant="h4">
            {id ? 'Edit Contact' : 'Add Contact'}
          </Typography>
          <Field
            as={TextField}
            label="Name"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            margin="normal"
            error={touched.name && !!errors.name}
            helperText={<ErrorMessage name="name" />}
          />
          <Field
            as={TextField}
            label="Phone Number"
            name="phoneNumber"
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            margin="normal"
            error={touched.phoneNumber && !!errors.phoneNumber}
            helperText={<ErrorMessage name="phoneNumber" />}
          />
          <Button type="submit" variant="contained" color="success">
            {id ? 'Update' : 'Add'}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
