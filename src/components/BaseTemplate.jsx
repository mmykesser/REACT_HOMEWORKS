import { Container, Box } from '@mui/material';
import PropTypes from 'prop-types';

const BaseTemplate = ({ children, maxWidth = 'sm' }) => {
  return (
    <Container component="main" maxWidth={maxWidth}>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {children}
      </Box>
    </Container>
  );
};

BaseTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
};

export default BaseTemplate;
