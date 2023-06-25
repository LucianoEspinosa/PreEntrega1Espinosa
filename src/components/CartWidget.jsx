// import carrito from "./img/icon/bag.svg";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './context/CartContext';
const CartWidget = () => {
    const { cartTotal, } = useContext(CartContext);
    return (
        <div>
            {cartTotal() > 0 && (
                <Link to="/cart" className="position-relative"><i className="text-secondary fs-3"><FontAwesomeIcon icon={faShoppingCart} /></i>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">{cartTotal()}</span>
                </Link>
            )}
        </div>

    )
}

export default CartWidget;