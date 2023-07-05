import { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { getDoc, doc, updateDoc, getFirestore } from "firebase/firestore";


const EditProduct = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const [updated, setUpdated] = useState(false);

    useEffect(() => {
        const db = getFirestore();
        const producto = doc(db, "fragancias", id);
        getDoc(producto).then(resultado => {
            if (resultado.exists()) {
                setItem({ id: resultado.id, ...resultado.data() })
            } else {
                console.error("Error! No se encontró el producto!");
            }
        });
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setItem((prevItem) => ({
            ...prevItem,
            [name]: value
        }));
    };
    const actualizarProducto = () => {
        const db = getFirestore();
        const productoRef = doc(db, "fragancias", id);
        updateDoc(productoRef, item)
            .then(() => {
                console.log("Producto actualizado correctamente");
                setUpdated(true);
            })
            .catch((error) => {
                console.error("Error al actualizar el producto:", error);
            });
    };
    
    if (updated) {
        return <Navigate to="/administrator" />;
    }
    return (
        <div className="container py-5">
            <h1 className="row">Editar Producto</h1>
            <form className="row justify-content-center">
                <div className="mb-3 col-md-6">
                    <label htmlFor="marca" className="form-label">Marca:</label>
                    <input type="text" className="form-control" id="marca" name="marca" value={item.marca || ""} onChange={handleInputChange} />
                </div>
                <div className="mb-3 col-md-6">
                    <label htmlFor="nombre" className="form-label">Nombre:</label>
                    <input type="text" className="form-control" id="nombre" name="nombre" value={item.nombre || ""} onChange={handleInputChange} />
                </div>
                <div className="mb-3 col-md-6">
                    <label htmlFor="precio" className="form-label">Precio:</label>
                    <input type="number" className="form-control" id="precio" name="precio" value={item.precio || 0} onChange={handleInputChange} />
                </div>
                <div className="mb-3 col-md-6">
                    <label htmlFor="descuento" className="form-label">Descuento:</label>
                    <input type="number" className="form-control" id="descuento" name="descuento" value={item.descuento || 0} onChange={handleInputChange} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="categoria" className="form-label">Categoría:</label>
                    <select className="form-select" id="categoria" name="categoria" value={item.categoria} onChange={handleInputChange}>
                        <option value="">Seleccionar categoría</option>
                        <option value="hombre">Hombre</option>
                        <option value="mujer">Mujer</option>
                        <option value="unisex">Unisex</option>
                    </select>
                </div>
                <div className="mb-3 col-md-6">
                    <label htmlFor="presentacion" className="form-label">Presentación:</label>
                    <input type="text" className="form-control" id="presentacion" name="presentacion" value={item.presentacion || ""} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label">Descripción:</label>
                    <textarea className="form-control" id="descripcion" name="descripcion" value={item.descripcion || ""} onChange={handleInputChange} />
                </div>
                <div className="mb-3 col-md-8">
                    <label htmlFor="img" className="form-label">Imagen:</label>
                    <input type="text" className="form-control" id="img" name="img" value={item.img || ""} onChange={handleInputChange} />
                </div>
                <div className="mb-3 col-md-3 offset-md-1 ">
                    <label htmlFor="stock" className="form-label">Stock:</label>
                    <input type="number" className="form-control" id="stock" name="stock" value={item.stock || 0} onChange={handleInputChange} />
                </div>
            </form>
            <button type="button" className="btn btn-primary col-md-2 offset-md-2" onClick={actualizarProducto}>Actualizar</button>
            <Link to="/administrator" className="btn btn-primary  col-md-2 offset-md-4">Regresar</Link>
        </div>
    );
};

export default EditProduct;


