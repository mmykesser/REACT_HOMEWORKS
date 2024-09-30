import { Box, IconButton, Typography } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import PropTypes from 'prop-types';
import { quantityControlStyles } from './quantityControlStyles';

const QuantityControl = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <Box sx={quantityControlStyles.controlContainer}>
      <IconButton
        onClick={onDecrease}
        disabled={quantity <= 1}
        sx={quantityControlStyles.iconButton}
      >
        <RemoveIcon />
      </IconButton>
      <Typography variant="body1" sx={quantityControlStyles.quantityText}>
        {quantity}
      </Typography>
      <IconButton onClick={onIncrease} sx={quantityControlStyles.iconButton}>
        <AddIcon />
      </IconButton>
    </Box>
  );
};

QuantityControl.propTypes = {
  quantity: PropTypes.number.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
};

export default QuantityControl;
