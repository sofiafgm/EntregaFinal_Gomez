import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartWidget from './CartWidget';


const CartWidgetContainer = () => {
  const { cartCount } = useContext(CartContext);

  const count =  cartCount > 99 ? '99+' : cartCount

  return <CartWidget count={count} />
};

export default CartWidgetContainer;
