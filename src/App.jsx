import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import routerObjects from './routerConfig/routerObjects';

const App = () => {
  return (
    <Container>
      <Router>
        <Routes>
          {routerObjects.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
    </Container>
  );
};

export default App;
