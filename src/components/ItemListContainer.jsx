import { useEffect, useState } from "react";
//import productos from "./json/productos.json"
// import productos from "./json/fragancias.json"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, where, query } from "firebase/firestore";
import Loading from "./Loading";




const ItemListContainer = ({ top, oferta,titulo }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    
    useEffect(() => {
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
    }, [id, top,oferta]);

    
    return (
        <div className="container alto pt-4 pb-4">
            <div className="row">
                <div className="col text-center ">
                    {id?<h1>{id}</h1>:titulo?<h1>{titulo}</h1>:<h1>Fragancias de diseñador</h1>}
                </div>
            </div>
            <div className="row ">
                {loading ? <Loading /> : <ItemList items={items} />}
            </div>

        </div>
    )
}
export default ItemListContainer;