import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Navigate } from "react-router-dom";
import logo from "./img/fragancesnet.png";

const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState("");
  const [telefono, setTelefono] = useState("");
  const [nombreError, setNombreError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [telefonoError, setTelefonoError] = useState("");

  const { cart, precioTotal } = useContext(CartContext);


  const validarFormulario = () => {
    const nombreValido = /^[a-zA-Z\s]*$/.test(nombre);
    setNombreError(nombreValido ? "" : "Ingrese un nombre válido");

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setEmailError(emailValido ? "" : "Ingrese un correo electrónico válido");

    const telefonoValido = /^[0-9]*$/.test(telefono);
    setTelefonoError(telefonoValido ? "" : "Ingrese solo números en el teléfono");

    return nombreValido && emailValido && telefonoValido;
  };

  const realizarPedido = () => {
    if (validarFormulario()) {
      const buyer = { name: nombre, phone: telefono, email: email };
      const items = cart.map((item) => ({
        id: item.id,
        title: item.marca + " " + item.nombre,
        price: item.precioFinal,
        quantity:item.cantidad
      }));
      const fecha = new Date();
      const date = `${fecha.getDate()}-${fecha.getMonth() + 1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`;
      const order = { buyer: buyer, items: items, date: date };

      const db = getFirestore();
      const OrderCollection = collection(db, "orders");
      addDoc(OrderCollection, order)
        .then((resultado) => {
          setOrderId(resultado.id);
        })
        .catch((resultado) => {
          console.log("Error. No se pudo realizar la compra");
        });
    }
  };

  return (
    <div className="container"style={{ minHeight: "60vh" }}>
      <div className="row my-5">
        
        <div className="col-md-5 ">
          <h3 className="text-decoration-underline">Carrito de Compras</h3>
          <table className="table table-sm text-center mt-3">
            <thead>
              <tr>
                <th scope="col"><img src={logo} alt="logotipo fragances.net" width={20} /> </th>
                <th scope="col">Marca</th>
                <th scope="col">Nombre</th>
                <th scope="col">Presentación</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio</th>
              </tr>
            </thead>
            <tbody >
              {
                cart.map(item => (
                  <tr key={item.id}>
                    <td><img src={item.img} alt={item.nombre} width={20} /> </td>
                    <td> {item.marca} </td>
                    <td> {item.nombre}</td>
                    <td>{item.presentacion}</td>
                    <td>{item.cantidad}</td>
                    <td>{item.precioFinal}</td>
                  </tr>
                ))
              }
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="5" className="text-end">Total</td>
                <td id="tablaTotal">{precioTotal()}</td>
              </tr>
            </tfoot>

          </table>
        </div>
        <div className="col-md-5 offset-md-1 ">
          <h3 className="text-decoration-underline">Checkout</h3>
          <div className="mb-3 mt-3">
            <label className="form-label">Nombre:</label>
            <input type="text" className={`form-control ${nombreError && "is-invalid"}`} placeholder="Ingresa tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            {nombreError && (<div className="invalid-feedback">{nombreError}</div>)}
          </div>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input type="email" className={`form-control ${emailError && "is-invalid"}`} placeholder="Ingresa tu correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
            {emailError && <div className="invalid-feedback">{emailError}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Teléfono:</label>
            <input type="tel" className={`form-control ${telefonoError && "is-invalid"}`} placeholder="Ingresa tu número de teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
            {telefonoError && (<div className="invalid-feedback">{telefonoError}</div>)}
          </div>
          <button className="btn btn-primary" onClick={realizarPedido}>Enviar</button>
        </div>
      </div>
      {orderId && <Navigate to={`/thankyou/${orderId}`} />}
    </div>
  );
};

export default Checkout;

