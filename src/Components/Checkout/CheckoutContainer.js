import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useMemo } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Checkout from './Checkout';

const cartDefault = [
  {
    id: '0',
    img: '	https://live.staticflickr.com/65535/52245634996_13e581188c.jpg',
    description: 'descripcion de producto',
    name: 'nombre de producto1',
    cost: '100',
    quantity: '0',
  },
  {
    id: '0',
    img: '	https://live.staticflickr.com/65535/52245634996_13e581188c.jpg',
    description: 'descripcion de producto',
    name: 'nombre de producto2',
    cost: '100',
    quantity: '0',
  },
  {
    id: '0',
    img: '	https://live.staticflickr.com/65535/52245634996_13e581188c.jpg',
    description: 'descripcion de producto',
    name: 'nombre de producto3',
    cost: '100',
    quantity: '0',
  },
];

const CheckoutContainer = () => {
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [isOrderFailed, setIsOrderFailed] = useState(false);

  const { cartList, cartCount, emptyCart } = useContext(CartContext);

  const cart = useMemo(() => Object.values(cartList), [cartList]);

  const total = cart.reduce(
    (totalSoFar, cartItem) => totalSoFar + cartItem.cost * cartItem.count,
    0
  );

  const onCeckout = (buyer) => {
    const order = {
      buyer,
      items: cart.map(({ id, cost, name, count }) => ({
        id,
        cost,
        name,
        quantity: count,
      })),
      total,
    };

    const db = getFirestore();
    const queryCollection = collection(db, 'orders');

    addDoc(queryCollection, order)
      .then(() => setIsOrderComplete(true))
      .then(emptyCart)
      .catch((e) => {
        setIsOrderFailed(true);
        console.warn('Error when placing order', e);
      });
  };

  return (
    <Checkout
      cart={cart}
      quantity={cartCount}
      total={total}
      onCeckout={onCeckout}
      onEmptyCarty={emptyCart}
      isOrderComplete={isOrderComplete}
      isOrderFailed={isOrderFailed}
    />
  );
};

export default CheckoutContainer;
