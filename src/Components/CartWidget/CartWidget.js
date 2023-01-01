import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as CartLogo } from '../../assets/cart.svg';
import './CartWidget.css';

const CartWidget = ({ count }) => (
  <NavLink
    to="/cart"
    type="button"
    className="btn btn-dark position-relative cart-widget"
  >
    <CartLogo />
    <span className="cart-badge position-absolute bottom-0 start-100 badge rounded-pill bg-secondary">
      {count}
      <span className="visually-hidden">unread messages</span>
    </span>
  </NavLink>
);

export default CartWidget;
