import React, { useEffect, useState } from 'react';
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const { id: category = '' } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    let queryCollection = collection(db, 'products');

    if (category) {
      queryCollection = query(
        queryCollection,
        where('category', '==', category)
      );
    }

    getDocs(queryCollection)
      .then((data) => data.docs)
      .then((docs) =>
        docs.map((product) => ({ id: product.id, ...product.data() }))
      )
      .then(setProducts)
      .finally(() => setIsLoading(false));
  }, [category]);

  return (
    <ItemList
      products={products}
      isLoading={isLoading}
      category={category}
    />
  );
};

export default ItemListContainer;
