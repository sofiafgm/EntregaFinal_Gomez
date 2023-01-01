import React from 'react';
import { Link } from 'react-router-dom';
import CheckoutFormContainer from '../CheckoutForm/CheckoutFormContainer';
import './Checkout.css';

const Checkout = ({
  cart,
  quantity,
  total,
  onCeckout,
  onEmptyCarty,
  isOrderComplete,
  isOrderFailed,
  title,
  msg,
  homeText
}) => {
  if (isOrderComplete || isOrderFailed || !cart.length) {
    return (
      <div className="container">
        <div className="col-md-6 offset-md-3 text-center">
          <h1>{title}</h1>
          <p className="h4">
            {msg}<strong>{isOrderComplete}</strong>
          </p>
          <Link className="btn btn-secondary btn-lg  my-5" to="/">
            {homeText}
          </Link>
        </div>
      </div>
    );
  }

  if (isOrderFailed) {
    return (
      <div className="container">
        <h1></h1>

        <Link className="btn btn-secondary btn-lg" to="/">
          Volver a la tienda
        </Link>
      </div>
    );
  }

  if (cart.length) {
    return (
      <div className="container">
        <div>
          <h1>Carrito de compras</h1>

          <div className="row">
            <div className="col-8">
              <div className="card bg-black text-white">
                <div className="card-body">
                  <table>
                    <thead className="visually-hidden">
                      <tr>
                        <th>Imagen</th>

                        <th>Producto</th>

                        <th>Costo por producto</th>

                        <th>Cantidad</th>

                        <th>Total</th>
                      </tr>
                    </thead>

                    <tbody className="table-content">
                      {cart.map((product) => (
                        <tr key={product.id}>
                          <td className="col-3">
                            <img className="img-cart" src={product.img}></img>
                          </td>

                          <td className="col-3">{product.name}</td>

                          <td className="col-3">${product.cost}</td>

                          <td className="col-3">{product.count}</td>

                          <td className="col-3">
                            ${product.count * product.cost}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <div className="text-end">
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={onEmptyCarty}
                    >
                      Vaciar Carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="resumen col-4">
              <div className="card sumary bg-black text-white">
                <div className="card-body">
                  <h2 className="title">Resumen</h2>

                  <p>Cantidad de productos: {quantity}</p>

                  <p>Total a pagar: {total}</p>
                </div>
              </div>

              <div className="card bg-black text-white">
                <div className="card-body">
                  <h3 className="title">Ingresa tus datos</h3>

                  <CheckoutFormContainer onCeckout={onCeckout} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Checkout;
