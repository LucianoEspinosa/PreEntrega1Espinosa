import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import logo from "./img/fragancesnet.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Administrator = () => {
    const db = getFirestore();
    const [productos, setProductos] = useState([]);
    const [nuevoProducto, setNuevoProducto] = useState({
        categoria: "",
        descripcion: "",
        descuento: 0,
        img: "",
        marca: "",
        nombre: "",
        precio: 0,
        presentacion: "",
        stock: 0
    });

    useEffect(() => {
        obtenerProductos()
            .then((productos) => {
                setProductos(productos);
            })
            .catch((error) => {
                console.error("Error al obtener los productos", error);
            });
    }, []);

    const obtenerProductos = async () => {
        const fraganciasCollection = collection(db, "fragancias");
        const snapshot = await getDocs(fraganciasCollection);
        const productos = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        return productos;
    };

    const editarProducto = async (productId, newData) => {
        const productRef = doc(collection(db, "fragancias"), productId);
        await updateDoc(productRef, newData);
        console.log(`Producto ${productId} actualizado`);
        obtenerProductos()
            .then((productos) => {
                setProductos(productos);
            })
            .catch((error) => {
                console.error("Error al obtener los productos después de la edición", error);
            });
    };

    const borrarProducto = async (productId) => {
        const productRef = doc(collection(db, "fragancias"), productId);
        await deleteDoc(productRef);
        console.log(`Producto ${productId} eliminado`);
        obtenerProductos()
            .then((productos) => {
                setProductos(productos);
            })
            .catch((error) => {
                console.error("Error al obtener los productos después de la eliminación", error);
            });
    };

    const agregarProducto = async () => {
        const fraganciasCollection = collection(db, "fragancias");
        await addDoc(fraganciasCollection, nuevoProducto);
        console.log("Nuevo producto agregado");
        setNuevoProducto({
            categoria: "",
            descripcion: "",
            descuento: 0,
            img: "",
            marca: "",
            nombre: "",
            precio: 0,
            presentacion: "",
            stock: 0
        });
        obtenerProductos()
            .then((productos) => {
                setProductos(productos);
            })
            .catch((error) => {
                console.error("Error al obtener los productos después de la adición", error);
            });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNuevoProducto((prevProducto) => ({
            ...prevProducto,
            [name]: value
        }));
    };

    return (
        <div className="container py-5">
            <h1>Administrador de Fragancias</h1>
            <div>
                <h2>Lista de Productos</h2>
                <table className="table table-sm text-center mt-3">
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
                        {productos.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <img src={item.img} alt={item.nombre} width={20} />{" "}
                                </td>
                                <td>{item.marca} {item.nombre}({item.presentacion})</td>
                                <td>{item.stock}</td>
                                <td>{item.precio}</td>
                                <td>
                                    {/* <Link to={`/edit/${item.id}`}>
                                        <FontAwesomeIcon icon={faPencilAlt} />
                                    </Link> */}
                                    <Link to={{ pathname: `/edit/${item.id}`, state: { item } }}>
                                        <FontAwesomeIcon icon={faPencilAlt} />
                                    </Link>

                                    <button onClick={() => borrarProducto(item.id)}>
                                        <FontAwesomeIcon icon={faTrashAlt} />
                                    </button>
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
