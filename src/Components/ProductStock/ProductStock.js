import {
  addDoc,
  collection,
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

    addDoc(queryCollection, product).finally(() => getProducts(setProducts))
  };

  return products.length ? (
    <div className="container">
      <div className="row g-3" >
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
              <th key={productKeys+'key'} scope="col">{productKeys}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                {product.img ? <img width="100" src={product.img} /> : null}
              </td>
              {keys.map((field) => (
                <td key={field+'value'}>{product[field]}</td>
              ))}
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
