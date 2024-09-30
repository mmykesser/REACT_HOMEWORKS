import { useGetSpecificCategoryQuery } from '../../../store/slicesApi/fakeStoreApi';
import { Box, CircularProgress, Stack, Typography } from '@mui/material';
import Header from '../../../components/Header/index.js';
import SearchBar from '../../../components/SearchBar/index.js';
import ProductList from '../../../components/ProductList/ProductList.jsx';
import useShoppingCart from '../../../hooks/useShoppingCart.js';
import PriceFilter from '../../../components/PriceFilter.jsx';
import { useState } from 'react';

const WomensClothingPage = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useGetSpecificCategoryQuery("women's clothing");

  const { handleAddToCart } = useShoppingCart();

  const [priceRange, setPriceRange] = useState([0, 60]);

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
          Women s clothing
        </Typography>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
          <Box sx={{ width: { xs: '100%', md: '20%' } }}>
            <PriceFilter
              minPrice={0}
              maxPrice={60}
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

export default WomensClothingPage;
