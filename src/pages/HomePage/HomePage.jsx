import { useState } from 'react';
import { Typography, Divider, TextField } from '@mui/material';
import BaseTemplate from '../../components/BaseTemplate';
import CreatePostForm from '../../components/CreatePostForm';
import PostsList from '../../components/PostsList';
import {
  useGetPostsQuery,
  useCreatePostMutation,
  useEditPostMutation,
  useDeletePostMutation,
} from '../../store/api/postsApi.js';

const HomePage = () => {
  const [numberOfPosts, setNumberOfPosts] = useState('');
  const { data: posts, isLoading, refetch } = useGetPostsQuery(numberOfPosts);

  const [isEditingPost, setIsEditingPost] = useState(false);
  const [currentPostData, setCurrentPostData] = useState(null);

  const [createPost, { isLoading: isCreating }] = useCreatePostMutation();
  const [editPost, { isLoading: isUpdating }] = useEditPostMutation();
  const [deletePost] = useDeletePostMutation();

  const isFormLoading = isCreating || isUpdating;

  const handleCreateOrEditPost = async (formData) => {
    try {
      if (isEditingPost) {
        await editPost({
          id: currentPostData.id,
          body: formData,
        }).unwrap();
      } else {
        await createPost(formData).unwrap();
      }
      refetch();
      setIsEditingPost(false);
      setCurrentPostData(null);
    } catch (error) {
      console.error('Failed to save post:', error);
    }
  };

  const handleEdit = (post) => {
    setCurrentPostData(post);
    setIsEditingPost(true);
  };

  const handleCancelEdit = () => {
    setIsEditingPost(false);
    setCurrentPostData(null);
  };

  const handleDelete = async (id) => {
    try {
      await deletePost({ id }).unwrap();
      refetch();
    } catch (error) {
      console.error('Failed to delete post:', error);
    }
  };

  const handleNumberOfPostsChange = ({ target }) =>
    setNumberOfPosts(target.value);

  return (
    <BaseTemplate maxWidth="sm">
      <Typography component="h1" variant="h4" align="center">
        {isEditingPost ? 'Edit Post' : 'Create Post'}
      </Typography>

      <CreatePostForm
        isEditing={isEditingPost}
        postData={currentPostData || {}}
        onSubmit={handleCreateOrEditPost}
        onCancel={handleCancelEdit}
        isLoading={isFormLoading}
      />

      <Divider sx={{ my: 4 }} />

      <Typography component="h2" variant="h4" align="center" sx={{ mb: 2 }}>
        Posts List
      </Typography>
      <TextField
        fullWidth
        type="number"
        label="Number of Posts"
        value={numberOfPosts}
        onInput={handleNumberOfPostsChange}
        sx={{ mb: 3 }}
      />

      {isLoading ? (
        <Typography component="h1" variant="h3" align="center">
          Loading ...
        </Typography>
      ) : (
        <PostsList posts={posts} onEdit={handleEdit} onDelete={handleDelete} />
      )}
    </BaseTemplate>
  );
};

export default HomePage;
