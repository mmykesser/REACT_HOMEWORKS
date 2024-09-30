import { styled } from '@mui/material/styles';
import { Box, Paper, Button } from '@mui/material';

export const CartContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: '#f5f5f5',
  minHeight: '100vh',
}));

export const CartContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  gap: theme.spacing(2),
}));

export const CartSummary = styled(Box)({
  flexBasis: { xs: '100%', md: '40%' },
});

export const ProductCard = styled(Paper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  backgroundColor: '#ffffff',
}));

export const ProductImage = styled('img')({
  width: 120,
  height: 120,
  objectFit: 'contain',
  marginRight: 16,
});

export const ProductDetails = styled(Box)({
  flexGrow: 1,
});

export const QuantityControl = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginLeft: 16,
});

export const PriceDisplay = styled(Box)({
  marginLeft: 16,
  textAlign: 'right',
});

export const ActionButtons = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  marginTop: theme.spacing(1),
}));

export const SummaryCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: '#ffffff',
}));

export const CheckoutButton = styled(Button)({
  backgroundColor: '#4CAF50',
  color: '#ffffff',
  '&:hover': {
    backgroundColor: '#45a049',
  },
});

export const RemoveAllButton = styled(Button)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));
