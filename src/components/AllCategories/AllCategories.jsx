import { Menu, MenuItem } from '@mui/material';
import { useGetAllCategoriesQuery } from '../../store/slicesApi/fakeStoreApi.js';
import PropTypes from 'prop-types';
import { CatalogButton } from '../SearchBar/searchBarStyles.js';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import routeNames from '../../routerConfig/routeNames.js';

const AllCategories = ({ btnText }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const { data: categories, isLoading } = useGetAllCategoriesQuery();

  const handleCatalogClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCategoryClick = (category) => {
    const routeMap = {
      electronics: routeNames.electronics,
      jewelery: routeNames.jewelery,
      "men's clothing": routeNames.mensClothing,
      "women's clothing": routeNames.womensClothing,
    };
    navigate(routeMap[category]);
    handleClose();
  };

  return (
    <div>
      <CatalogButton variant="contained" onClick={handleCatalogClick}>
        {btnText}
      </CatalogButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        {isLoading && <MenuItem>...Loading</MenuItem>}
        {categories &&
          categories.map((category, index) => (
            <MenuItem key={index} onClick={() => handleCategoryClick(category)}>
              {category}
            </MenuItem>
          ))}
      </Menu>
    </div>
  );
};

AllCategories.propTypes = {
  btnText: PropTypes.string,
};

export default AllCategories;
