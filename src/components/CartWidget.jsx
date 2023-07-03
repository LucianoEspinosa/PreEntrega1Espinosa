import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './context/CartContext';
import bag from "./img/icon/header-minicart___84ce87d981ea9173052603538ed98868.svg";
import { FaShoppingCart } from 'react-icons/fa';
import { IoMdCart } from 'react-icons/io'
import { MdShoppingCart } from 'react-icons/md';

const CartWidget = () => {
    const { cartTotal, } = useContext(CartContext);
    return (
        <div>
            <Link to="/cart" className="position-relative iconoCarrito">
                <img src={bag} alt="carrito de compras" width={26} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill fondo">{cartTotal()}
                </span>
            </Link>

        </div>


    )
}


export default CartWidget;