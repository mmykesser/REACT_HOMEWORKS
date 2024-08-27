import { Box, Button, List, ListItem, ListItemText } from '@mui/material';
import PropTypes from 'prop-types';

const PostsList = ({ posts, onEdit, onDelete }) => {
  return (
    <List>
      {posts.map((post) => (
        <ListItem key={post.id} sx={{ mb: 1 }}>
          <ListItemText primary={post.title} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
            }}
          >
            <Button
              variant="contained"
              size="small"
              onClick={() => onEdit(post)}
              sx={{ ml: 1 }}
            >
              Edit
            </Button>

            <Button
              variant="contained"
              color="error"
              size="small"
              sx={{ ml: 1 }}
              onClick={() => onDelete(post.id)}
            >
              Delete
            </Button>
          </Box>
        </ListItem>
      ))}
    </List>
  );
};

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default PostsList;
