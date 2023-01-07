import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../Img/IvoDev.png";
import "./NavBar.css";

export default function NavBar(){
    return(
        <header className="header">
            <nav className="nav-container">
                <div className="row">
                    <Link to="/" className="nav-link">
                        <img src={logo} alt="logo" className="nav-logo" />
                    </Link>
                </div>
                <div className="links">
                    <ul className="nav-list">
                        <li>
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="nav-link">About US</Link>
                        </li>
                        <li>
                            <Link to="/category/Gaming-PC" className="nav-link">Gaming PC</Link>
                        </li>
                        <li>
                             <Link to="/category/Accesories" className="nav-link">Accesories</Link>
                        </li>                     
                        <li>
                            <Link to="/Orders" className="nav-link">Orders</Link>
                        </li>                      
                    </ul>                    
                </div>
                <div>
                    <Link to="/cart" className="nav-cart"><CartWidget /></Link>
                </div>
            </nav>
        </header>
    )
}