import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Box, CircularProgress, Typography } from '@mui/material';
import ProductCard from '../ProductCard';
import { useGetAllProductsQuery } from '../../store/slicesApi/fakeStoreApi';
import { carouselStyles } from './carouselStyles';

const Carousel = ({ itemsPerSlide = 4, autoPlayInterval = 7000 }) => {
  const { data: products, isLoading, error } = useGetAllProductsQuery();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!products) return;
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % (products.length - itemsPerSlide + 1)
      );
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [products, itemsPerSlide, autoPlayInterval]);

  const prevSlide = () => {
    if (!products) return;
    setCurrentIndex((prev) =>
      prev === 0 ? products.length - itemsPerSlide : prev - 1
    );
  };

  const nextSlide = () => {
    if (!products) return;
    setCurrentIndex((prev) =>
      prev === products.length - itemsPerSlide ? 0 : prev + 1
    );
  };

  if (isLoading) {
    return (
      <Box sx={carouselStyles.loadingContainer}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={carouselStyles.errorContainer}>
        <Typography color="error">
          Error loading products: {error.message}
        </Typography>
      </Box>
    );
  }

  if (!products || products.length === 0) {
    return (
      <Box sx={carouselStyles.noProductsContainer}>
        <Typography>No products available</Typography>
      </Box>
    );
  }

  return (
    <Box sx={carouselStyles.carouselContainer}>
      <Button onClick={prevSlide} sx={carouselStyles.prevButton}>
        &lt;
      </Button>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: `repeat(auto-fit, minmax(200px, 1fr))`,
          gap: 2,
          justifyContent: 'center',
          alignItems: 'stretch',
        }}
      >
        {products
          .slice(currentIndex, currentIndex + itemsPerSlide)
          .map((product) => (
            <Box key={product.id}>
              <ProductCard product={product} />
            </Box>
          ))}
      </Box>
      <Button onClick={nextSlide} sx={carouselStyles.nextButton}>
        &gt;
      </Button>
    </Box>
  );
};

Carousel.propTypes = {
  itemsPerSlide: PropTypes.number,
  autoPlayInterval: PropTypes.number,
};

export default Carousel;
