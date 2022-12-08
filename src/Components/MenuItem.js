import React from 'react';
import {NavLink} from "react-router-dom";

const MenuItem = ({itemName, to = '/'}) => (
  <li className="nav-item position-relative">
    <NavLink className="nav-link" to={to}>
      {itemName}
    </NavLink>
  </li>
);

export default MenuItem;
