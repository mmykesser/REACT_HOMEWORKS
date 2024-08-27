import { useEffect, useState } from 'react';
import { Button, TextField, Box } from '@mui/material';
import PropTypes from 'prop-types';

const formDefaultState = {
  title: '',
  body: '',
};

const CreatePostForm = ({
  isEditing,
  postData = formDefaultState,
  onSubmit,
  onCancel,
  isLoading,
}) => {
  const [formData, setFormData] = useState(postData);

  useEffect(() => {
    setFormData(postData);
  }, [postData]);

  const updateFormData = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <fieldset disabled={isLoading}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="title"
          label="Post Title"
          name="title"
          autoFocus
          value={formData.title || ''}
          onChange={updateFormData}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="body"
          label="Post Body"
          id="body"
          multiline
          rows={4}
          value={formData.body || ''}
          onChange={updateFormData}
        />
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
          {isEditing ? 'Edit Post' : 'Add Post'}
        </Button>
        {isEditing && (
          <Button
            fullWidth
            variant="outlined"
            color="error"
            onClick={onCancel}
            sx={{ mt: 2 }}
          >
            Cancel
          </Button>
        )}
      </fieldset>
    </Box>
  );
};

CreatePostForm.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  postData: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default CreatePostForm;
