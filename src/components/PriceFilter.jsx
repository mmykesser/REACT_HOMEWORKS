import { useState } from 'react';
import { Box, Typography, Slider, Button } from '@mui/material';
import PropTypes from 'prop-types';

const PriceFilter = ({ minPrice, maxPrice, onApplyFilter }) => {
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleApplyFilter = () => {
    onApplyFilter(priceRange);
  };

  return (
    <Box
      sx={{
        width: '100%',
        padding: 2,
        border: '1px solid #e0e0e0',
        borderRadius: 2,
      }}
    >
      <Typography variant="h6" gutterBottom>
        Price Filter
      </Typography>
      <Slider
        value={priceRange}
        onChange={handlePriceChange}
        valueLabelDisplay="auto"
        min={minPrice}
        max={maxPrice}
        sx={{ mt: 2, mb: 4 }}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography>{priceRange[0]}</Typography>
        <Typography>{priceRange[1]} zł</Typography>
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={handleApplyFilter}
        fullWidth
      >
        Apply
      </Button>
    </Box>
  );
};

PriceFilter.propTypes = {
  minPrice: PropTypes.number.isRequired,
  maxPrice: PropTypes.number.isRequired,
  onApplyFilter: PropTypes.func.isRequired,
};

export default PriceFilter;
