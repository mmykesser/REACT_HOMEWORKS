import { styled } from '@mui/system';
import { Box, Button, IconButton } from '@mui/material';

export const StyledBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#4CAF50',
  padding: '5px 10px',
  width: '100%',
  marginBottom: '10px',
});

export const CatalogButton = styled(Button)({
  backgroundColor: '#2d9c2d',
  color: '#fff',
  textTransform: 'none',
  marginRight: '10px',
  '&:hover': {
    backgroundColor: '#369436',
  },
});

export const SearchInput = styled('input')({
  padding: '5px 10px',
  borderRadius: '4px',
  border: 'none',
  outline: 'none',
  flexGrow: 1,
  marginRight: '10px',
});

export const StyledIconButton = styled(IconButton)({
  color: '#fff',
});
