import RouteNames from './routeNames';
import HomePage from '../pages/HomePage';
import AllTodos from '../pages/AllTodos';
import EditPage from '../pages/EditPage';
import SingleTodo from '../pages/SingleTodo';

const routerObjects = [
  {
    id: 0,
    path: RouteNames.home,
    element: <HomePage />,
  },
  {
    id: 1,
    path: RouteNames.allTodos,
    element: <AllTodos />,
  },
  {
    id: 2,
    path: RouteNames.singleItem,
    element: <SingleTodo />,
  },
  {
    id: 3,
    path: RouteNames.editItem,
    element: <EditPage />,
  },
];

export default routerObjects;
