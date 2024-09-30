import { useGetSpecificCategoryQuery } from '../../../store/slicesApi/fakeStoreApi';
import { Box, CircularProgress, Stack, Typography } from '@mui/material';
import Header from '../../../components/Header/index.js';
import SearchBar from '../../../components/SearchBar/index.js';
import ProductList from '../../../components/ProductList/ProductList.jsx';
import useShoppingCart from '../../../hooks/useShoppingCart.js';
import PriceFilter from '../../../components/PriceFilter';
import { useState } from 'react';

const JeweleryPage = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useGetSpecificCategoryQuery('jewelery');

  const { handleAddToCart } = useShoppingCart();

  const [priceRange, setPriceRange] = useState([0, 700]);

  const handleApplyFilter = (newPriceRange) => {
    setPriceRange(newPriceRange);
  };

  const filteredProducts = products?.filter(
    (product) =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  if (isLoading) return <CircularProgress />;
  if (error)
    return (
      <Typography color="error">Произошла ошибка: {error.message}</Typography>
    );

  return (
    <Box>
      <Header />
      <SearchBar />
      <Box sx={{ padding: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Jewelery
        </Typography>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
          <Box sx={{ width: { xs: '100%', md: '20%' } }}>
            <PriceFilter
              minPrice={0}
              maxPrice={700}
              onApplyFilter={handleApplyFilter}
            />
          </Box>
          <Box sx={{ width: { xs: '100%', md: '75%' } }}>
            <ProductList
              products={filteredProducts}
              addToCart={handleAddToCart}
            />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default JeweleryPage;
