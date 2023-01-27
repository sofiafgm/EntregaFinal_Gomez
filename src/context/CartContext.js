import React, { createContext, useMemo, useState } from 'react';
import { useEffect } from 'react';

export const CartContext = createContext({
  /**
   * cartList is an oject of product id, their value will be anobect with the product id and the amount added on the cart
   * i.e:
   * {
   *      id-1: {
   *          id: 'id-1',
   *          name: 'product 1',
   *          cost: 100,
   *          count: 3,
   *          img: 'urltoproduct1.jpg'
   *      },
   *      id-2: {
   *          id: 'id-2',
   *          name: 'product 2',
   *          cost: 3000,
   *          count: 1,
   *          img: 'urltoproduct2.jpg'
   *      }
   * }
   */
  cartList: {},

  /**
   * adds more items to the cart, adding to current item count if the id is repeated
   *
   * @params product: a product object
   * @params count: the ammount of products to add to the cart
   */
  addCart: () => {},

  /**
   * the total ammount of items in the cart
   */
  cartCount: 0,
});

// load local storage
const getInitialCart = () => {
  try {
    const storageCart = localStorage.getItem('cart') || '[]';
    const parsedCart = JSON.parse(storageCart);

    return parsedCart;
  } catch (e) {
    console.error(e);
    return []
  }
};

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState(getInitialCart());

  // calculate total count of cart adding all itemins individual counts
  const cartCount = useMemo(() => {
    // create an array for cartlist
    const arrayOffProducts = Object.values(cartList);

    // add all the ammounts of all the cart items
    const count = arrayOffProducts.reduce(
      (currentCount, cartItem) => currentCount + cartItem.count,
      0
    );

    return count;
  }, [cartList]);

  // update cart on local storage
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cartList));
    } catch (e) {
      console.error(e);
    }
  }, [cartList]);

  // add itemsto cart, ifitem exist we add ot old ammount
  const addCart = (product, count) => {
    const { [product.id]: itemToUpdate = { count: 0 }, ...newCart } = cartList;
    // we add the previous ammounts
    const newCount = itemToUpdate.count + count;

    newCart[product.id] = { ...product, count: newCount };

    setCartList(newCart);
  };

  const emptyCart = () => setCartList({});

  return (
    <CartContext.Provider
      value={{
        cartList,
        cartCount,
        addCart,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
