import React from 'react';

import MenuImg from "../assets/images/menu.png";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
      {/* <!-- top navbar-- > */}
      <div className="top-navbar">
        <p>WELCOME TO OUR SHOP</p>
        <div className="icons">
          <Link to={"/login"}><img src="./images/register.png" alt="" width="18px" />Login</Link>
          <Link to="/register"><img src="./images/register.png" alt="" width="18px" />Register</Link>
        </div>
        {/* <!-- top navbar-- > */}
      </div> <nav className="navbar navbar-expand-lg" id="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html" id="logo"><span id="span1">E</span>Lectronic <span>Shop</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span><img src={MenuImg} alt="" width="30px" /></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Product</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Category
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ backgroundColor: "rgb(67 0 86)" }}>
                  <li><a className="dropdown-item" href="#">Samrt Phone</a></li>
                  <li><a className="dropdown-item" href="#">Mobile Phone</a></li>
                  <li><a className="dropdown-item" href="#">Cameras</a></li>
                  <li><a className="dropdown-item" href="#">Fridge</a></li>
                  <li><a className="dropdown-item" href="#">AC</a></li>
                  <li><a className="dropdown-item" href="#">Samrt Watch</a></li>
                  <li><a className="dropdown-item" href="#">Headphone</a></li>
                  <li><a className="dropdown-item" href="#">Laptop</a></li>
                  <li><a className="dropdown-item" href="#">PC Moniter</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
            <form className="d-flex" id="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav></div>
  )
}
