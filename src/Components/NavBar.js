import React from 'react';
import logo from '../assets/logo.svg';
import cart from '../assets/cart.svg';

const NavBar = () => (
  <header className="header title h1">
    <nav className="container-fluid navbar navbar-expand-sm navbar-dark">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav col-12 col-md-5 justify-content-around">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Inicio
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="pages/about.html">
              ¿Quiénes somos?
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="pages/gallery.html">
              Galeria
            </a>
          </li>
        </ul>

        <a className="d-none d-md-block col-md-2 active" href="#">
          <img
            className="logo d-block mx-auto"
            src={logo}
            alt="Logo un caos organizado"
          />
        </a>

        <ul className="navbar-nav col-12 col-md-5 justify-content-around">
          <li className="nav-item position-relative">
            <a className="nav-link" href="#">
              Productos
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="pages/contact.html">
              Contacto
            </a>
          </li>

          <button type="button" className='btn btn-dark position-relative'>
          <img
            className="cart d-block mx-auto"
            src={cart}
            alt="Carrito de compras"
          />
            <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-black'>
              99+
              <span className='visually-hidden'>unread messages</span>
            </span>
          </button>
        </ul>
      </div>
    </nav>

    <h1 className="visually-hidden">Un Caos Organizado - Inicio</h1>
  </header>
);

export default NavBar;

