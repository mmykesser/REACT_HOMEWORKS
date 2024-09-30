import { styled } from '@mui/system';
import { AppBar, Button } from '@mui/material';

export const StyledAppBar = styled(AppBar)({
  backgroundColor: '#fff',
  color: '#000',
  boxShadow: 'none',
  borderBottom: '1px solid #ddd',
});

export const LanguageButton = styled(Button)({
  backgroundColor: '#4CAF50',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#45A049',
  },
});
