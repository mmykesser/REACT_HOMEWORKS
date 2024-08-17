import RouteNames from './routeNames.js';
import ContactForm from '../components/ContactForm.jsx';
import ContactList from '../components/ContactList.jsx';

const routerObjects = [
  {
    id: 0,
    path: RouteNames.homePage,
    element: <ContactList />,
  },
  {
    id: 1,
    path: RouteNames.addPage,
    element: <ContactForm />,
  },
  {
    id: 2,
    path: RouteNames.editPage,
    element: <ContactForm />,
  },
];

export default routerObjects;
