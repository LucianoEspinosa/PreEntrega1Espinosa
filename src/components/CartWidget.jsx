import carrito from "./img/icon/bag.svg";
const CartWidget = () => {
    return (
        <div className="position-relative">
            <img src={carrito} alt="Carrito de compras" width={24} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
        </div>
    )
}

export default CartWidget;