import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import ProductCard from '../../components/ProductCard';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <Box>
      <Header />
      <SearchBar />
      <Box sx={{ padding: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Избранные товары
        </Typography>
        {favorites.length === 0 ? (
          <Typography>У вас пока нет избранных товаров.</Typography>
        ) : (
          <Box
            display="flex"
            flexWrap="wrap"
            gap={3} // Отступы между элементами
          >
            {favorites.map((product) => (
              <Box
                key={product.id}
                sx={{
                  width: {
                    xs: '100%',
                    sm: '50%',
                    md: '33.33%',
                    lg: '25%',
                  },
                }}
              >
                <ProductCard product={product} />
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default FavoritesPage;

favorite!!!!!!!!!!!!!!!