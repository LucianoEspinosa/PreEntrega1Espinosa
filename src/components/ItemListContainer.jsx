import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, where, query } from "firebase/firestore";
import Loading from "./Loading";




const ItemListContainer = ({ top, oferta, titulo }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        console.log("consultando");
        const db = getFirestore();
        const itemsCollection = collection(db, "fragancias");
        const q = oferta ? query(itemsCollection, where("descuento", ">", 0)) : id ? query(itemsCollection, where("categoria", "==", id)) : top ? query(itemsCollection, where("stock", "<", 15)) : itemsCollection;
        getDocs(q).then(resultado => {
            if (resultado.size > 0) {
                setItems(resultado.docs.map(producto => ({ id: producto.id, ...producto.data() })));
                setLoading(false);
            } else {
                console.error("Error! No se encontraron productos en la colleccion!")
            }
        })
    }, [id, top, oferta]);


    return (
        <div className="container alto my-5">
            <div className="row text-center">
                <div className="col">
                    {id ? <h1>{id}</h1> : titulo ? <h1>{titulo}</h1> : <h1>Fragancias de diseñador</h1>}
                </div>
            </div>
            <div className="row justify-content-center ">
                {loading ? <Loading /> : <ItemList items={items} />}
            </div>

        </div>
    )
}
export default ItemListContainer;