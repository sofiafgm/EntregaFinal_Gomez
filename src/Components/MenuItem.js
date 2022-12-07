import React from 'react';

const MenuItem = ({itemName, itemHref = ''}) => (
  <li className="nav-item position-relative">
    <a className="nav-link" href={itemHref}>
      {itemName}
    </a>
  </li>
);

export default MenuItem;
