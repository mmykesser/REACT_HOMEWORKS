const routeNames = Object.freeze({
  notFound: '*',
  home: '/',
  allProducts: 'products',
  singleProduct: 'products/:productId',
  allCategories: 'products/categories',
  electronics: '/category/electronics',
  jewelery: '/category/jewelery',
  mensClothing: "/category/men's clothing",
  womensClothing: "/category/women's clothing",
  shoppingCart: '/category/cart',
});

export default routeNames;
