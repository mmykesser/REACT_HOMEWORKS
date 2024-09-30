import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PropTypes from 'prop-types';
import { productCardStyle, buttonStyle } from './productCardStyle.js';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/shopCartSlices.js';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (event) => {
    event.stopPropagation();
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1,
      })
    );
  };

  const handleNavigateToProduct = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <Card sx={productCardStyle.card}>
      <Box sx={productCardStyle.box} onClick={handleNavigateToProduct}>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.title}
          sx={productCardStyle.cardMedia}
        />
      </Box>
      <CardContent sx={productCardStyle.cardContent}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={productCardStyle.title}
          onClick={handleNavigateToProduct}
        >
          {product.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={productCardStyle.description}
          onClick={handleNavigateToProduct}
        >
          {product.description}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: 2,
          }}
        >
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            {product.price} zł
          </Typography>
          <Button
            variant="contained"
            size="small"
            startIcon={<AddShoppingCartIcon />}
            onClick={handleAddToCart}
            sx={buttonStyle}
          ></Button>
        </Box>
      </CardContent>
    </Card>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
