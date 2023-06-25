import { createContext, useState } from "react";

export const CartContext = createContext();
const CartContextProvider=({children})=>{
    const [cart, setCart]= useState([]);
    

    const addItem =(item, quantity) =>{
        
        if (isInCart(item.id)) {
            let pos= cart.findIndex(prod=> prod.id ===item.id);
            cart[pos].cantidad += quantity;
            setCart([...cart]);
        
            
        }else{
            setCart([...cart,{...item, cantidad:quantity, precioFinal:item.precio - (item.precio * item.descuento) / 100 }]);
        }

    };
    const removeItem=(id) =>{
        const items= cart.filter(prod=> prod.id !== id);
        setCart([...items])

    };
    const clear=() =>{
        setCart([]);

    };
    const isInCart=(id) =>{
        return cart.some(prod => prod.id === id);

    };
    const cartTotal=()=>{
        return cart.reduce((suma,item)=>suma+=item.cantidad,0);
    }
    const precioTotal=()=>{
        return cart.reduce((suma,item)=>suma+=item.cantidad * item.precioFinal,0);
    }
    
    return(
        <CartContext.Provider value={{cartTotal, precioTotal, cart, addItem, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;