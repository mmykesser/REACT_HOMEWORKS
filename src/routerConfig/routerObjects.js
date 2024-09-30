import routeNames from './routeNames.js';
import HomePage from '../pages/HomePage';
import AllCategories from '../components/AllCategories';
import ElectronicsPage from '../pages/Categories/ElectronicPage';
import JeweleryPage from '../pages/Categories/JeweleryPage';
import MensClothingPage from '../pages/Categories/MensClothingPage';
import WomensClothingPage from '../pages/Categories/WomensClothingPage';
import CartPage from '../pages/CartPage/CartPage';
import ProductPage from '../pages/ProductPage';

const routerObjects = [
  {
    id: 0,
    path: routeNames.home,
    element: HomePage,
  },
  {
    id: 1,
    path: routeNames.allCategories,
    element: AllCategories,
  },
  {
    id: 2,
    path: routeNames.electronics,
    element: ElectronicsPage,
  },
  {
    id: 3,
    path: routeNames.jewelery,
    element: JeweleryPage,
  },
  {
    id: 4,
    path: routeNames.mensClothing,
    element: MensClothingPage,
  },
  {
    id: 5,
    path: routeNames.womensClothing,
    element: WomensClothingPage,
  },
  {
    id: 6,
    path: routeNames.shoppingCart,
    element: CartPage,
  },
  {
    id: 7,
    path: routeNames.singleProduct,
    element: ProductPage,
  },
];

export default routerObjects;
