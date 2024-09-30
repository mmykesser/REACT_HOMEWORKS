import { styled } from '@mui/material/styles';
import { CardMedia, Card, Box } from '@mui/material';

export const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  backgroundColor: '#fff',
  boxShadow: 'none',
  border: 'none',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));

export const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  width: '100%',
  height: '100%',
  maxWidth: '500px',
  maxHeight: '500px',
  objectFit: 'contain',
  [theme.breakpoints.up('md')]: {
    maxWidth: '500px',
    maxHeight: '500px',
  },
}));

export const CenteredBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});
