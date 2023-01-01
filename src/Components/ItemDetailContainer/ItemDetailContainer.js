import React, { useEffect, useState } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { useCallback } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [message, setMessage] = useState('Cargando...');
  const { id = '' } = useParams();

  useEffect(() => {
    const db = getFirestore();
    let querydoc = doc(db, 'products', id);

    getDoc(querydoc)
      .then(resp => ({id: resp.id, ...resp.data()}))
      .then((data) => setProduct(data))
      .catch(() => setMessage('error de servidor, favor de recargar página'))
      .finally(() => setMessage('no se encontró el producto'));
  }, [id]);

  const { addCart } = useContext(CartContext);

  const onPlus = useCallback(() => setQuantity(quantity + 1), [quantity]);

  const onMinus = useCallback(
    () => setQuantity(quantity > 0 ? quantity - 1 : 0),
    [quantity]
  );

  const onAdd = () => {
    addCart(product, quantity);
    setQuantity(0);
  };

  return (
    <ItemDetail
      product={product}
      message={message}
      quantity={quantity}
      onPlus={onPlus}
      onMinus={onMinus}
      onAdd={onAdd}
    />
  );
};

export default ItemDetailContainer;
