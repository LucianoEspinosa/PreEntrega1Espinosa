import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import logo from "./img/fragancesnet.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Administrator = () => {
    const [items, setItems] = useState([]);



    useEffect(() => {
        console.log("consultando");
        const db = getFirestore();
        const itemsCollection = collection(db, "fragancias");
        getDocs(itemsCollection).then(resultado => {
            if (resultado.size > 0) {
                setItems(resultado.docs.map(producto => ({ id: producto.id, ...producto.data() })));

            } else {
                console.error("Error! No se encontraron productos en la colleccion!")
            }
        })
    }, [items]);



    const borrarProducto = async (productId) => {
        const db = getFirestore();
        const productRef = doc(collection(db, "fragancias"), productId);

        try {
            await deleteDoc(productRef);
            console.log(`Producto ${productId} eliminado en la base de datos`);

            const filteredItems = items.filter(item => item.id !== productId);
            setItems(filteredItems);
            console.log(`Producto ${productId} eliminado del estado local`);
        } catch (error) {
            console.error("Error al eliminar el producto", error);
        }
    };


    // const borrarProducto = async () => {
    //     const db = getFirestore();
    //     const productRef = doc(collection(db, "fragancias"), productId);
    //     await deleteDoc(productRef);
    //     console.log(`Producto ${productId} eliminado`);
    //     obtenerProductos()
    //         .then((productos) => {
    //             setItems(productos);
    //         })
    //         .catch((error) => {
    //             console.error("Error al obtener los productos después de la eliminación", error);
    //         });
    // };




    return (
        <div className="container py-5">
            <div className="row text-center"><h1>Administrador de Fragancias</h1></div>
            <div className="row mt-4"> <h2>Lista de Productos</h2></div>
            <div className="row justify-content-center">
                <table className="table table-sm text-center mt-3 ">
                    <thead>
                        <tr>
                            <th scope="col">
                                <img src={logo} alt="logotipo fragances.net" width={20} />{" "}
                            </th>
                            <th scope="col">Producto</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <img src={item.img} alt={item.nombre} width={20} />{" "}
                                </td>
                                <td>{item.marca} {item.nombre}({item.presentacion})</td>
                                <td>{item.stock}</td>
                                <td>{item.precio}</td>
                                <td className="d-flex justify-content-center gap-2">

                                    <button className="border-0" ><Link to={{ pathname: `/edit/${item.id}`, state: { item } }} className="text-success"><FontAwesomeIcon icon={faPencilAlt} /></Link></button>

                                    <button onClick={() => borrarProducto(item.id)} className="text-danger border-0"><FontAwesomeIcon icon={faTrashAlt} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div>
                    <Link to="/add-product" className="btn btn-primary">Agregar Producto</Link>
                </div>

            </div>

        </div>
    );
};
export default Administrator;
