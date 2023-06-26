import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import logo from "./img/fragancesnet.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
const Cart = () => {
    const { cart, removeItem, clear, cartTotal, precioTotal } = useContext(CartContext);
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
            <div className="row">
                <table className="col table table-sm text-center my-3 table align-middle">
                    <thead>
                        <tr>
                            <th scope="col"><img src={logo} alt="logotipo fragances.net" width={20} /> </th>
                            <th scope="col">Marca</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Presentación</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio</th>
                            <th scope="col">&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.img} alt={item.nombre} width={20} /> </td>
                                    <td> {item.marca} </td>
                                    <td> {item.nombre}</td>
                                    <td>{item.presentacion}</td>
                                    <td>{item.cantidad}</td>
                                    <td>{item.precioFinal*item.cantidad}</td>
                                    <td className="vaciar"><FontAwesomeIcon icon={faTrash} onClick={() => removeItem(item.id)} /></td>
                                </tr>
                            ))
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="5" className="text-end">Total</td>
                            <td id="tablaTotal">{precioTotal()}</td>
                        </tr>
                        <tr>
                            <td colSpan="7" onClick={() => clear()}><span className="col text-center text-decoration-underline vaciar">Vaciar carrito</span></td>
                        </tr>
                    </tfoot>

                </table>


            </div>
            <div className="row">
                <div className="text-end my-3">
                <Link to={"/checkout"}><button className="btn btn-primary">Finalizar Compra</button></Link>
                </div>

            </div>
        </div>

    )

}

export default Cart;