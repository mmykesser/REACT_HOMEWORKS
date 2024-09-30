import React from 'react';
import { Toolbar, Button, Box } from '@mui/material';
import { StyledAppBar, LanguageButton } from './headerStyles.js';
import logo from '../../img/My_srore_logo2.png';
import { Link } from 'react-router-dom';
import routeNames from '../../routerConfig/routeNames.js';

const Header = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Box display="flex" alignItems="center">
          <Link to={routeNames.home}>
            <img
              src={logo}
              alt="Logo"
              style={{ width: '30%', height: 'auto', marginRight: '20px' }}
            />
          </Link>
        </Box>
        <Box flexGrow={1} />
        <Box display="flex" alignItems="center">
          <Button variant="text" color="error" sx={{ marginRight: 2 }}>
            Contact
          </Button>
          <LanguageButton>PL</LanguageButton>
          <LanguageButton style={{ marginLeft: '10px' }}>ENG</LanguageButton>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default React.memo(Header);
