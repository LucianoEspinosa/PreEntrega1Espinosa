import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Navigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Table from "./Table";

const Checkout = () => {
  const { cart, clear } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");

  const initialValues = {
    nombre: "",
    email: "",
    telefono: ""
  };

  const validationSchema = Yup.object().shape({
    nombre: Yup.string().matches(/^[a-zA-Z\s]*$/, "Ingrese un nombre válido").required("Ingrese un nombre válido"),
    email: Yup.string().email("Ingrese un correo electrónico válido").required("Ingrese un correo electrónico"),
    telefono: Yup.string().matches(/^[0-9]*$/, "Ingrese solo números en el teléfono").required("Ingrese un teléfono")
  });

  const handleSubmit = (values) => {
    const buyer = { name: values.nombre, phone: values.telefono, email: values.email };
    const items = cart.map((item) => ({
      id: item.id,
      title: item.marca + " " + item.nombre,
      price: item.precioFinal,
      quantity: item.cantidad
    }));
    const fecha = new Date();
    const date = `${fecha.getDate()}-${fecha.getMonth() + 1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`;
    const order = { buyer: buyer, items: items, date: date };

    const db = getFirestore();
    const OrderCollection = collection(db, "orders");
    addDoc(OrderCollection, order)
      .then((resultado) => {
        setOrderId(resultado.id);
        clear();
      })
      .catch((resultado) => {
        console.log("Error. No se pudo realizar la compra");
      });
  };

  return (
    <div className="container" style={{ minHeight: "60vh" }}>
      <div className="row my-5">
        <div className="col-md-5">
          <h3 className="text-decoration-underline">Carrito de Compras</h3>
          <Table cart={cart} />
        </div>
        <div className="col-md-5 offset-md-1">
          <h3 className="text-decoration-underline">Checkout</h3>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ errors, touched }) => (
              <Form>
                <div className="mb-3 mt-3">
                  <label className="form-label">Nombre:</label>
                  <Field type="text" name="nombre" className={`form-control ${errors.nombre && touched.nombre ? "is-invalid" : ""}`} placeholder="Ingresa tu nombre" />
                  <ErrorMessage name="nombre" component="div" className="invalid-feedback" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email:</label>
                  <Field type="email" name="email" className={`form-control ${errors.email && touched.email ? "is-invalid" : ""}`} placeholder="Ingresa tu correo electrónico" />
                  <ErrorMessage name="email" component="div" className="invalid-feedback" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Teléfono:</label>
                  <Field type="tel" name="telefono" className={`form-control ${errors.telefono && touched.telefono ? "is-invalid" : ""}`} placeholder="Ingresa tu número de teléfono" />
                  <ErrorMessage name="telefono" component="div" className="invalid-feedback" />
                </div>
                <button className="btn btn-primary" type="submit">
                  Enviar
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      {orderId && <Navigate to={`/thankyou/${orderId}`} />}
    </div>
  );
};

export default Checkout;





