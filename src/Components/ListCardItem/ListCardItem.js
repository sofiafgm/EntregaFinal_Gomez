import React from 'react';
import { Link } from 'react-router-dom';

const ListCardItem = ({
  header = 'taza',
  img = 'https://live.staticflickr.com/65535/52245731463_a2e4916f74_z.jpg',
  cost = '$10',
  body,
  to = '/product/x',
}) => (
  <div className="card text-bg-dark mb-3" style={{ maxWidth: '18rem' }}>
    <div className="card-header">{header}</div>
    <img src={img} />
    <div className="card-body">
      <h5 className="card-title">${cost}</h5>
      <p className="card-text">{body}</p>
      {to ? (
        <Link className="btn btn-secondary" to={to}>
          Detalles
        </Link>
      ) : null}
    </div>
  </div>
);

export default ListCardItem;
