import { Link } from "react-router-dom";

const Item = ({ item }) => {

    return (
        <div className="col-md-4">
            <Link to={"/item/" + item.idx} className="text-decoration-none" >
                <div className="d-flex flex-column align-items-center tarjeta">

                    <img src={item.img} className="d-block w-50" alt={item.marca + " " + item.nombre} />

                    <h2 className="card-title">{item.marca}</h2>
                    <h3 className="card-text">{item.nombre}</h3>

                    <div className="estiloPresentacion d-flex justify-content-center align-items-center">
                        <span className="card-presentacion">${item.presentacion}</span>
                    </div>
                    <h4 className="classPrecio">${item.precio}</h4>
                </div>
            </Link>
        </div>
    )
}
export default Item;