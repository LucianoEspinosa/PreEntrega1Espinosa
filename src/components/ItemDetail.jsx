import { useContext, useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";

const ItemDetail = ({ producto }) => {
    const { addItem } = useContext(CartContext);
    const [item, setItem] = useState({});

    const onAdd = (quantity) => {

        addItem(item, quantity);
    }

    useEffect(() => {
        setItem(producto);
    }, [producto]);

    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-5 offset-md-1">
                <div >
                        <span>{item.marca}</span>
                        <h1>{item.nombre}</h1>
                    </div>
                    <div className="text-center">
                    <img src={item.img} alt={item.nombre} className="w-50 img-fluid" />
                    </div>
                </div>
                <div className="col-md-5 d-flex flex-column text-center text-md-start">
                    
                    <p className="mb-4">{item.descripcion}</p>
                    {item.descuento > 0 ? (
                        <div className="d-flex justify-content-center ">
                            <div className="text-center">
                                <h2 className="text-decoration-line-through text-muted">${item.precio}</h2>
                                <span className="badge bg-primary">{item.descuento}%</span>
                                <h2>${item.precio - (item.precio * item.descuento) / 100}</h2>
                            </div>
                        </div>
                    ) : (<div><h2 className="text-center">${item.precio}</h2></div>)}
                    <div className="mt-auto">
                        <ItemCount stock={item.stock} onAdd={onAdd} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;