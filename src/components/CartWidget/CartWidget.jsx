import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import * as React from 'react';
import Carticon from './CartIcon'
import './CartWidget.css'


import './CartWidget.css'
const CartWidget = () => {
    const {getItemQuantity} = useContext(CartContext)
    return (
        <>
            <ul className='navbar-nav me-auto cartWidget'>
                <li className="nav-item">
                    <Link className="nav-link" to="/cart">
                        
                            <div className="cont-cart">
                            <Carticon  />  { getItemQuantity() >= 1 && <span className="cantCarrito">{getItemQuantity()}</span>}
                           
                            </div>
                    </Link>
                    
                </li>
            </ul>
        </>
    );
}

export default CartWidget;