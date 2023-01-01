import React from 'react';
import ListCardItem from '../ListCardItem/ListCardItem';

const ItemList = ({ greeting, category, isLoading = true, products }) => {
  return (
    <div>
      <p
        style={{
          backgroundColor: 'gray',
          fontSize: '80px',
          textAlign: 'center',
        }}
      >
        {category || greeting}
      </p>
      {isLoading ? (
        <p> CARGANDO... </p>
      ) : (
        <ul className="row" style={{ listStyle: 'none' }}>
          {products.map((product) => (
            <li key={product.id} className="col-md-4 col-sm-12 col-lg-3">
              <ListCardItem
                to={`/product/${product.id}`}
                body={product.description}
                header={product.name}
                cost={product.cost}
                img={product.img}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemList;
