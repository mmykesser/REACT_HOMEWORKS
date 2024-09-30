import useShoppingCart from '../../hooks/useShoppingCart';
import { Box, Typography, Button, CircularProgress } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';
import Header from '../../components/Header';
import { useGetAllProductsQuery } from '../../store/slicesApi/fakeStoreApi';
import {
  CartContainer,
  CartContent,
  CartSummary,
  ProductCard,
  ProductImage,
  ProductDetails,
  PriceDisplay,
  ActionButtons,
  SummaryCard,
  CheckoutButton,
  RemoveAllButton,
} from './cartPageStyle';
import QuantityControl from '../../UX/QuantityControl'; // Импортируем QuantityControl

const CartPage = () => {
  const {
    cartItems,
    handleRemoveItem,
    handleUpdateQuantity,
    calculateTotal,
    handleClearCart,
  } = useShoppingCart();
  const { data: products, isLoading, error } = useGetAllProductsQuery();
  const getProductDetails = (productId) => {
    return products?.find((product) => product.id === productId) || {};
  };

  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Typography color="error">Error: {error.message}</Typography>;
  }

  return (
    <Box>
      <Header />
      <CartContainer>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
          <Typography variant="h5" sx={{ marginLeft: 2 }}>
            Cart ({cartItems.length} items)
          </Typography>
          <Box sx={{ marginLeft: 'auto' }}>
            <Button
              startIcon={<PersonIcon />}
              color="primary"
              variant="contained"
            >
              Sign In
            </Button>
          </Box>
        </Box>
        <RemoveAllButton
          onClick={handleClearCart}
          color="error"
          startIcon={<DeleteIcon />}
        >
          Remove All
        </RemoveAllButton>
        <CartContent>
          <Box sx={{ flexGrow: 1, flexBasis: { xs: '80%', md: '60%' } }}>
            {cartItems.map((item) => {
              const productDetails = getProductDetails(item.id);
              return (
                <ProductCard key={item.id}>
                  <ProductImage
                    src={productDetails.image}
                    alt={productDetails.title}
                  />
                  <ProductDetails>
                    <Typography variant="subtitle1">
                      {productDetails.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Product Code: {item.id}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="success.main"
                      sx={{ marginTop: 1 }}
                    >
                      In Stock
                    </Typography>
                    <ActionButtons>
                      <Button startIcon={<FavoriteBorderIcon />} size="small">
                        Add to Favorites
                      </Button>
                      <Button
                        startIcon={<DeleteIcon />}
                        size="small"
                        onClick={() => handleRemoveItem(item.id)}
                        color="error"
                      >
                        Remove
                      </Button>
                    </ActionButtons>
                  </ProductDetails>
                  <QuantityControl
                    quantity={item.quantity}
                    onIncrease={() =>
                      handleUpdateQuantity(item.id, item.quantity + 1)
                    }
                    onDecrease={() =>
                      handleUpdateQuantity(item.id, item.quantity - 1)
                    }
                  />
                  <PriceDisplay>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {(productDetails.price * item.quantity).toFixed(2)} zł
                    </Typography>
                    {item.quantity > 1 && (
                      <Typography variant="body2" color="text.secondary">
                        {productDetails.price.toFixed(2)} zł each
                      </Typography>
                    )}
                  </PriceDisplay>
                </ProductCard>
              );
            })}
          </Box>
          <CartSummary>
            <SummaryCard>
              <Typography variant="h6" gutterBottom>
                Summary
              </Typography>
              <Box
                sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}
              >
                <Typography>{cartItems.length} items</Typography>
                <Typography>{calculateTotal().toFixed(2)} zł</Typography>
              </Box>
              <Box
                sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}
              >
                <Typography variant="h6">Total</Typography>
                <Typography variant="h6">
                  {calculateTotal().toFixed(2)} zł
                </Typography>
              </Box>
              <CheckoutButton variant="contained" fullWidth>
                Proceed to Checkout
              </CheckoutButton>
            </SummaryCard>
          </CartSummary>
        </CartContent>
      </CartContainer>
    </Box>
  );
};

export default CartPage;
