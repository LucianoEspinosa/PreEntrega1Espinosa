import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './context/CartContext';
import bag from "./img/icon/cartbag.svg";
import { FaShoppingCart } from 'react-icons/fa';
import { IoMdCart } from 'react-icons/io'
import { MdShoppingCart } from 'react-icons/md';

const CartWidget = () => {
    const { cartTotal, } = useContext(CartContext);
    return (
        <div className='d-flex justify-content-end'>
            {cartTotal() > 0 && (
                <Link to="/cart" className="position-relative iconoCarrito">
                    {/* <i className="text-secondary fs-3">
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </i> */}
                    
                    <img src={bag} alt="carrito de compras" width={20} />
                    
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                        {cartTotal()}
                    </span>
                </Link>
            )}
        </div>


    )
}

export default CartWidget;