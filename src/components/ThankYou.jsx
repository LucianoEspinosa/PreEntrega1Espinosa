import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const ThankYou = () => {
    const { clear } = useContext(CartContext);
    const { orderId } = useParams();
    return (
        <div className="container-fluid d-flex align-items-center justify-content-center" style={{ minHeight: "60vh" }}>
            <div className="text-center">
                <h2>¡Gracias por tu compra!</h2>
                <p>Tu número de orden es: {orderId}</p>
                <Link to="/" className="btn btn-primary mt-4" onClick={() => clear()}>Volver al inicio</Link>
            </div>
        </div>

    );
};

export default ThankYou;
