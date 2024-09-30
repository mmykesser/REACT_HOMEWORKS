import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  addToCart,
  removeFromCart,
  updateCart,
  setCart,
  clearCart,
} from '../store/slices/shopCartSlices.js';
import storageService from '../utils/StorageService.js';

const useShoppingCart = () => {
  const cartItems = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadCart = async () => {
      const storedCart = await storageService.getData();
      if (storedCart && storedCart.length > 0) {
        dispatch(setCart(storedCart));
      }
    };
    loadCart();
  }, [dispatch]);

  useEffect(() => {
    const syncCartWithStorage = async () => {
      await storageService._rewriteStorageData(cartItems);
    };
    syncCartWithStorage();
  }, [cartItems]);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateCart({ id, quantity: newQuantity }));
    }
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    storageService._rewriteStorageData([]);
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return {
    cartItems,
    handleAddToCart,
    handleRemoveItem,
    handleUpdateQuantity,
    handleClearCart,
    calculateTotal,
  };
};

export default useShoppingCart;
