import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useState } from 'react';
import { useMemo } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Checkout from './Checkout';

const CheckoutContainer = () => {
  const [isOrderComplete, setIsOrderComplete] = useState(null);
  const [title, setTitle] = useState('Aún no tienes nada en el carrito');
  const [msg, setMsg] = useState('');
  const [homeText, setHomeText] = useState('Ir a comprar');
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
      .then((data) => {
        setIsOrderComplete(data.id);
        setTitle('Tu orden secompletó conéxito');
        setMsg('Su número de orden es: ');
        setHomeText('Seguir Comprando');
      })
      .then(emptyCart)
      .catch((e) => {
        setIsOrderFailed(true);
        setIsOrderComplete('');
        setTitle('Hubo un error al procesar tu orden');
        setMsg('Rearga la página o inténtalo mástarde');
        setHomeText('Volver a la tienda');
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
      title={title}
      msg={msg}
      homeText={homeText}
    />
  );
};

export default CheckoutContainer;
