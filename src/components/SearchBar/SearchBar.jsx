import React from 'react';
import { Badge, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  StyledBox,
  SearchInput,
  StyledIconButton,
  CatalogButton,
} from './searchBarStyles.js';
import AllCategories from '../AllCategories';
import { useNavigate } from 'react-router-dom';
import routeNames from '../../routerConfig/routeNames.js';
import { useSelector } from 'react-redux';

const SearchBar = () => {
  const navigate = useNavigate();

  const cartItemsCount = useSelector((state) => state.shoppingCart.length);

  const handleCartClick = () => {
    navigate(routeNames.shoppingCart);
  };
  return (
    <StyledBox>
      <AllCategories btnText="Product catalog" />
      <SearchInput type="text" placeholder="Search" />
      <StyledIconButton>
        <SearchIcon />
      </StyledIconButton>
      <Box display="flex" alignItems="center" marginLeft="auto">
        <CatalogButton variant="contained">Sign in</CatalogButton>
        <StyledIconButton>
          <FavoriteBorderIcon />
        </StyledIconButton>
        <StyledIconButton onClick={handleCartClick}>
          <Badge badgeContent={cartItemsCount} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </StyledIconButton>
      </Box>
    </StyledBox>
  );
};

export default React.memo(SearchBar);
