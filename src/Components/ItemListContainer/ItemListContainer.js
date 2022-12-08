import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {gFetch} from "../../helpers/gFetch";
import ListCardItem from "../ListCardItem/ListCardItem";

const ItemListContainer = ({gretting = 'Saludo default'}) => {
  const {id: category = ''} = useParams()
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    gFetch(`fakeApi.com/category/${category}`)
      .then(data => JSON.parse(data))
      .then(data => setProducts(data))
      .finally(() => setIsLoading(false))
  }, [category])

  return (<div>
    <p style={{backgroundColor: "gray", fontSize: '80px', textAlign: 'center'}}>{category || gretting}</p>
    {isLoading ?
      (<p> CARGANDO... </p>) :
      (<ul className="row" style={{listStyle:'none'}}>
        {products.map(product =>
          <li key={product.id} className="col-md-4 col-sm-12 col-lg-3">
              <ListCardItem to={`/product/${product.id}`} body={product.description} header={product.name} cost={product.cost} />
          </li>)
        }
      </ul>)
    }
  </div>);
}

export default ItemListContainer;
