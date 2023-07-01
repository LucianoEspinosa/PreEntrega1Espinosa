import { useContext } from "react";
import { CartContext } from "./context/CartContext";
// import logo from "./img/fragancesnet.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import Table from "./Table";
const Cart = () => {
    const { cart, cartTotal} = useContext(CartContext);
    if (cartTotal() === 0) {
        return (
            <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: 'calc(100vh - 341px)' }}>
                <div className="row">
                    <div className="col">
                        <div className="alert alert-danger" role="alert">No hay productos en el carrito</div>
                        <Link to={"/"} className=" d-block text-center"><span className="text-secondary text-decoration-underline vaciar">Volver a inicio</span></Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container alto">
            <div className="row">
                <div className="col text-center my-5">
                    <h1 >Resumen de su compra</h1>
                </div>
            </div>
            <div className="row px-2 px-md-0">
                <Table cart={cart} trush={true} />

            </div>
            <div className="row">
                <div className="text-center text-md-end my-3">
                    <Link to={"/checkout"}><button className="btn btn-primary">Finalizar Compra</button></Link>
                </div>
            </div>
        </div>
    )
}
export default Cart;