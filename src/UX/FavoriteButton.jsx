import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {
  addToFavorites,
  removeFromFavorites,
} from '../store/slices/favoritesSlices';
import PropTypes from 'prop-types';

const FavoriteButton = ({ product }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const isFavorite = favorites.some((fav) => fav.id === product.id);

  const handleFavoriteClick = (event) => {
    event.stopPropagation();
    if (isFavorite) {
      dispatch(removeFromFavorites(product.id));
    } else {
      dispatch(addToFavorites(product));
    }
  };

  return (
    <IconButton onClick={handleFavoriteClick}>
      {isFavorite ? (
        <FavoriteIcon sx={{ color: '#23b123' }} />
      ) : (
        <FavoriteBorderIcon />
      )}
    </IconButton>
  );
};

FavoriteButton.propTypes = {
  product: PropTypes.object.isRequired,
};

export default FavoriteButton;
