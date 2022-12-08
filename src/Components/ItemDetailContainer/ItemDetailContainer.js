import React, {useEffect, useState} from 'react';
import ListCardItem from "../ListCardItem/ListCardItem";
import {useParams} from "react-router-dom";
import {gFetch} from "../../helpers/gFetch";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)
  const [message, setMessage] = useState('cargando')
  const {id = ''} = useParams()

  useEffect(() => {
    gFetch(`fakeApi.com/product/${id}`)
      .then(data => JSON.parse(data))
      .then(data => setProduct(data))
      .catch(() => setMessage('error de servidor, favor de recargar página'))
      .finally(() => setMessage('no se encontró el producto'))
  }, [id])


  return <div className="container">
    {product ?
      (
        <div className="row">
          <h1>{product.name}</h1>
          <ListCardItem body={product.description} cost={product.cost}/>
        </div>
      ) :
      (<h1>{message}</h1>)}
  </div>
}

export default ItemDetailContainer;
