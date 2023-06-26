import { Link } from "react-router-dom";

const Item = ({ item }) => {

    return (
        <div className="col-sm-6 col-lg-4 col-xl-3 d-flex justify-content-center">
            <Link to={"/item/" + item.id} className="text-decoration-none">
                <div className="d-flex flex-column align-items-center tarjeta">
                    <img src={item.img} className="d-block w-50" alt={item.marca + " " + item.nombre} />
                    <h2 className="card-title">{item.marca}</h2>
                    <h3 className="card-text">{item.nombre}</h3>
                    <div className="estiloPresentacion d-flex justify-content-center align-items-center">
                        <span className="card-presentacion">{item.presentacion}</span>
                    </div>
                    {item.descuento > 0 ? (
                        <div className="d-flex align-items-center">
                            <h4 className="classPrecio"><span className="text-decoration-line-through text-secondary">${item.precio}</span><span className="text-danger fs-6"> -{item.descuento}%</span></h4>
                            <h4 className="classPrecio">
                                <span className="text-success"> ${item.precio - (item.precio * item.descuento) / 100}</span>
                            </h4>
                        </div>
                    ) : (
                        <div className="d-flex align-items-center justify-content-center">
                            <h4 className="classPrecio">${item.precio}</h4>
                        </div>
                    )}
                </div>
            </Link>
        </div>
    );










}
export default Item;