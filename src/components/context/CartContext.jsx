// import { createContext, useState, useEffect } from "react";

// export const CartContext = createContext();
// const CartContextProvider = ({ children }) => {
//     let [cart, setCart] = useState([]);

//     useEffect(() => {
//         const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
//         setCart(storedCart);
//     }, []);


//     const addItem = (item, quantity) => {

//         if (isInCart(item.id)) {
//             let pos = cart.findIndex(prod => prod.id === item.id);
//             cart[pos].cantidad += quantity;
//             setCart([...cart]);
//             localStorage.setItem('cart', JSON.stringify(cart));


//         } else {
//             setCart([...cart, { ...item, cantidad: quantity, precioFinal: item.precio - (item.precio * item.descuento) / 100 }]);
//             localStorage.setItem('cart', JSON.stringify(cart));
//         }


//     };
//     const removeItem = (id) => {
//         const items = cart.filter(prod => prod.id !== id);
//         setCart([...items])

//     };
//     const clear = () => {
//         setCart([]);

//     };
//     const isInCart = (id) => {
//         return cart.some(prod => prod.id === id);

//     };
//     const cartTotal = () => {
//         return cart.reduce((suma, item) => suma += item.cantidad, 0);
//     }
//     const precioTotal = () => {
//         return cart.reduce((suma, item) => suma += item.cantidad * item.precioFinal, 0);
//     }

//     return (
//         <CartContext.Provider value={{ cartTotal, precioTotal, cart, addItem, removeItem, clear }}>
//             {children}
//         </CartContext.Provider>
//     )
// }
// export default CartContextProvider;
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    let [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    }, []);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            let updatedCart = cart.map((prod) => {
                if (prod.id === item.id) {
                    return { ...prod, cantidad: prod.cantidad + quantity };
                }
                return prod;
            });
            setCart(updatedCart);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
        } else {
            let updatedCart = [
                ...cart,
                {
                    ...item,
                    cantidad: quantity,
                    precioFinal:
                        item.precio - (item.precio * item.descuento) / 100,
                },
            ];
            setCart(updatedCart);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
        }
    };

    const removeItem = (id) => {
        const updatedCart = cart.filter((prod) => prod.id !== id);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const clear = () => {
        setCart([]);
        localStorage.removeItem("cart");
    };

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };

    const cartTotal = () => {
        return cart.reduce((suma, item) => (suma += item.cantidad), 0);
    };

    const precioTotal = () => {
        return cart.reduce(
            (suma, item) => (suma += item.cantidad * item.precioFinal),
            0
        );
    };

    return (
        <CartContext.Provider
            value={{ cartTotal, precioTotal, cart, addItem, removeItem, clear }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
