import {
  Typography,
  Button,
  CardContent,
  Box,
  CircularProgress,
  Rating,
  Tabs,
  Tab,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import useShoppingCart from '../../hooks/useShoppingCart';
import { useState } from 'react';
import QuantityControl from '../../UX/QuantityControl';
import {
  StyledCard,
  StyledCardMedia,
  CenteredBox,
} from './singleProductStyle.js';
import PropTypes from 'prop-types';
import { buttonStyle } from '../ProductCard/productCardStyle.js';
import FavoriteButton from '../../UX/FavoriteButton.jsx';

const TabPanel = ({ children, value, index, ...other }) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    {...other}
  >
    {value === index && (
      <Box sx={{ p: 3 }}>
        <Typography>{children}</Typography>
      </Box>
    )}
  </div>
);

TabPanel.propTypes = {
  children: PropTypes.node,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

const SingleProduct = ({ product, isLoading, error }) => {
  const { handleAddToCart } = useShoppingCart();
  const [tabValue, setTabValue] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleTabChange = (event, newValue) => setTabValue(newValue);
  const addToCartHandler = (event) => {
    event.preventDefault();
    handleAddToCart({ ...product, quantity });
  };

  if (isLoading) {
    return (
      <CenteredBox>
        <CircularProgress />
      </CenteredBox>
    );
  }

  if (error) {
    return <Typography color="error">Error: {error.message}</Typography>;
  }

  if (!product) {
    return <Typography>Product not found</Typography>;
  }

  return (
    <StyledCard>
      <StyledCardMedia
        component="img"
        image={product.image}
        alt={product.title}
      />
      <CardContent
        sx={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column' }}
      >
        <Typography gutterBottom variant="h4" component="h1">
          {product.title}
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          {product.category}
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          {product.price} zł
        </Typography>
        <Box display="flex" alignItems="center" mb={2}>
          <Rating
            name="read-only"
            value={product.rating?.rate || 0}
            readOnly
            precision={0.5}
          />
          <Typography variant="body2" color="text.secondary" ml={1}>
            ({product.rating?.count || 0} reviews)
          </Typography>
        </Box>
        <Typography variant="body2" color="success.main" sx={{ mb: 2 }}>
          In stock
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <QuantityControl
            quantity={quantity}
            onIncrease={() => setQuantity(quantity + 1)}
            onDecrease={() => setQuantity(Math.max(1, quantity - 1))}
          />
        </Box>
        <FavoriteButton product={product} />
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddShoppingCartIcon />}
          onClick={addToCartHandler}
          size="large"
          sx={{ ...buttonStyle, alignSelf: 'flex-start', mb: 2 }}
        >
          Add to Cart
        </Button>
        <Box sx={{ width: '100%', mt: 4 }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            aria-label="product tabs"
            sx={{ borderBottom: 1, borderColor: 'divider' }}
          >
            <Tab label="Description" />
            <Tab label="Specifications" />
          </Tabs>
          <TabPanel value={tabValue} index={0}>
            <Typography variant="body1">{product.description}</Typography>
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <Typography variant="body1">
              Category: {product.category}
            </Typography>
            <Typography variant="body1">
              Rating: {product.rating?.rate || 'No data'} / 5
            </Typography>
            <Typography variant="body1">
              Number of reviews: {product.rating?.count || 'No data'}
            </Typography>
          </TabPanel>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

SingleProduct.propTypes = {
  product: PropTypes.object,
  isLoading: PropTypes.bool,
  error: PropTypes.object,
};

export default SingleProduct;
