import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';

const getProducts = (updateState, category = '') => {
  const db = getFirestore();
  let queryCollection = collection(db, 'products');

  if (category) {
    queryCollection = query(queryCollection, where('category', '==', category));
  }

  getDocs(queryCollection)
    .then((data) => data.docs)
    .then((docs) =>
      docs.map((product) => ({ id: product.id, ...product.data() }))
    )
    .then(updateState);
};

const ProductStock = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(setProducts);
  }, []);

  const keys = Object.keys(products[0] || {});

  return products.length ? (
    <div>
      <table className="table table-dark table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">render</th>
            {keys.map((productKeys) => (
              <th scope="col">{productKeys}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr>
              <td>
                {product.img ? <img width="100" src={product.img} /> : null}
              </td>
              {keys.map((field) => (
                <td>{product[field]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <form></form>
    </div>
  ) : (
    <p>No hay productos</p>
  );
};

export default ProductStock;
