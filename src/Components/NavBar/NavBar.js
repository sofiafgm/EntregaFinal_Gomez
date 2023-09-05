import React from 'react';
import logo from '../../assets/logo.svg';
import MenuItem from '../MenuItem';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <header className="header title h1">
    <nav className="container-fluid navbar navbar-expand-sm navbar-dark">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav col-12 col-md-5 justify-content-around">
          <MenuItem itemName="Inicio" />

          <MenuItem itemName="Productos" to="/products" />
        </ul>

        <NavLink className="d-none d-md-block col-md-2 active" to="/">
          <img
            className="logo d-block mx-auto"
            src={logo}
            alt="Logo un caos organizado"
          />
        </NavLink>

        <ul className="navbar-nav col-12 col-md-5 justify-content-around">
          <MenuItem itemName="Tattoo" to="/tattoo" />

          <MenuItem itemName="Contacto" to="/contact" />

        </ul>
      </div>
    </nav>

    <h1 className="visually-hidden">Un Caos Organizado - Inicio</h1>
  </header>
);

export default NavBar;
