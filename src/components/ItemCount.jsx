import { useEffect, useState } from "react";
const ItemCount = ({ stock }) => {

    const [items, setItems] = useState(1);
    const [itemStock, setItemStock] = useState(stock);

    const sumarUnidad = () => {
        if (items < itemStock) {
            setItems(items + 1);
        }

    }
    const restarUnidad = () => {
        if (items > 1) {
            setItems(items - 1);
        }
    }
    const onAdd = () => {
        if (items <= itemStock) {
            setItemStock(itemStock - items);
            setItems(1);
        }
    }
    useEffect(() => {
        setItemStock(stock);
    }, [stock])

    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-light card" onClick={restarUnidad}>-</button>
                        <button type="button" className="btn btn-light card">{items}</button>
                        <button type="button" className="btn btn-light card" onClick={sumarUnidad}>+</button>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                
                    <button type="button" className="btn btn-light card col-4 mt-2" onClick={onAdd}>Agregar al carrito</button>
                
            </div>
        </div>
    )
}

export default ItemCount;