import routerObjects from './routerObjects';
import { Route, Routes } from 'react-router-dom';
const RouterConfig = () => {
  const routes = () => {
    return routerObjects.map(({ id, path, element: Element }) => {
      return <Route key={id} path={path} element={<Element />} />;
    });
  };

  return <Routes>{routes()}</Routes>;
};

export default RouterConfig;
