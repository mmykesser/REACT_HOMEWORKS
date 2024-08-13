import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routerObjects from './routerConfig/routerObjects';

const App = () => (
  <Router>
    <Routes>
      {routerObjects.map((route) => (
        <Route key={route.id} path={route.path} element={route.element} />
      ))}
    </Routes>
  </Router>
);

export default App;
