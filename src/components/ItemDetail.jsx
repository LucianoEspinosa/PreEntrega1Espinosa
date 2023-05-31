import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ producto }) => {
    const [item, setItem] = useState({});
    console.log(producto);
    useEffect(() => {
        setItem(producto);
    }, [producto]);

    return (
        <div className="container my-5 alto">
            <div className="row">
                <div className="col-md-5 offset-md-1">
                    <img src={item.img} alt={item.nombre} className="w-50 img-fluid" />
                </div>
                <div className="col-md-5 d-flex flex-column justify-content-between">
                    <div>
                        <span>{item.marca}</span>
                        <h1 className="">{item.nombre}</h1>
                    </div>
                    <p>{item.descripcion}</p>
                    <h2 className="text-center mt-3"> ${item.precio} </h2>

                    <div className="">
                        <ItemCount stock={item.stock} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail;