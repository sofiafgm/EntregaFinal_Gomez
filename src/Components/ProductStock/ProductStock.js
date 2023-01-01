import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';

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
  const nameRef = useRef();
  const descRef = useRef();
  const imgRef = useRef();
  const stockRef = useRef();
  const costRef = useRef();
  const categoryRef = useRef();

  useEffect(() => {
    getProducts(setProducts);
  }, []);

  const keys = Object.keys(products[0] || {});

  const onAdd = () => {
    const product = {
      name: nameRef.current.value,
      description: descRef.current.value,
      img: imgRef.current.value,
      stock: Number(stockRef.current.value),
      cost: Number(costRef.current.value),
      category: categoryRef.current.value,
    };

    const db = getFirestore();
    const queryCollection = collection(db, 'products');

    addDoc(queryCollection, product).finally(() => getProducts(setProducts));
  };

  const onDelete = (id) => () => {
    const db = getFirestore();
    const queryDoc = doc(db, 'products', id);

    deleteDoc(queryDoc).finally(() => getProducts(setProducts));
  };

  return products.length ? (
    <div className="container">
      <div className="row g-3">
        <div className="col-md-3">
          <div className="input-group mb-3">
            <span className="input-group-text">name</span>
            <input ref={nameRef} type="text" className="form-control" />
          </div>
        </div>

        <div className="col-md-3">
          <div className="input-group mb-3">
            <span className="input-group-text">description</span>
            <textarea ref={descRef} type="text" className="form-control" />
          </div>
        </div>

        <div className="col-md-3">
          <div className="input-group mb-3">
            <span className="input-group-text">cost</span>
            <input ref={costRef} type="number" className="form-control" />
          </div>
        </div>

        <div className="col-md-3">
          <div className="input-group mb-3">
            <span className="input-group-text">stock</span>
            <input ref={stockRef} type="number" className="form-control" />
          </div>
        </div>

        <div className="col-md-3">
          <div className="input-group mb-3">
            <span className="input-group-text">img</span>
            <input ref={imgRef} type="text" className="form-control" />
          </div>
        </div>

        <div className="col-md-3">
          <div className="input-group mb-3">
            <span className="input-group-text">category</span>
            <input
              ref={categoryRef}
              list="datalistOptions"
              className="form-control"
            />
            <datalist id="datalistOptions">
              <option value="tazas" />
              <option value="peluches" />
              <option value="agendas" />
              <option value="stickers" />
            </datalist>
          </div>
        </div>

        <div className="col-md-3 ml-auto">
          <button className="btn btn-secondary" onClick={onAdd}>
            Agregar
          </button>
        </div>
      </div>

      <table className="table table-dark table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">render</th>
            {keys.map((productKeys) => (
              <th key={productKeys + 'key'} scope="col">
                {productKeys}
              </th>
            ))}
            <th scope="col">actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                {product.img ? <img width="100" src={product.img} /> : null}
              </td>
              {keys.map((field) => (
                <td key={field + 'value'}>{product[field]}</td>
              ))}
              <td>
                <button
                  className="btn btn-secondary"
                  onClick={onDelete(product.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-trash3-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <p>No hay productos</p>
  );
};

export default ProductStock;
