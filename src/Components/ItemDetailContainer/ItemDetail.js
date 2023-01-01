import React from 'react';
import './ItemDetail.css';

const ItemDetail = ({
  product,
  message = 'Producto sin existencia',
  quantity,
  onPlus,
  onMinus,
  onAdd,
}) => {
  return (
    <div className="container main-wrapper">
      {product ? (
        <div className="row">
          <div className="col-6">
            <img className="product-image" src={product.img} />
          </div>

          <div className="col-6">
            <div className="card product-detail-card bg-black text-white">
              <div className="card-body">
                <h1 className="card-title product-title">{product.name}</h1>

                <p className="cost">${product.cost}</p>
                <p className="card-text">{product.description}</p>

                <div className="info-detail ">
                  <p>Cantidad :</p>
                  <button onClick={onMinus} className="btn btn-sm btn-xs btn-secondary">-</button>
                  <p>{quantity}</p>
                  <button onClick={onPlus} className="btn btn-sm btn-xs btn-secondary">+</button>
                </div>

                <div className="d-grid gap-2">
                  <button onClick={onAdd} className="btn btn-secondary">
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>{message}</p>
      )}
    </div>
  );
};

export default ItemDetail;
