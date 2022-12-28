
import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext()



export const CartContextProvider = ({children}) => {
    
    const [cart, setCart] =useState([]);
    console.log(cart)


// arreglar la logica del contador al agregar al carrito
    
    const addToCart = (item, cantidad) => {
        if(cart.length===0){
           setCart([{
               ...item, 
               cantidad: cantidad
             
           }])
        }  else {
            const findedItem = cart.find(i => i.id === item.id)
            if(!findedItem ){
                setCart([
                    ...cart,
                    {
                        ...item,
                        cantidad: cantidad
                    }
                ])
            }else{
                // Probar en la siguiente linea el '!==' por '===' para poder
                //  agregar un mismo producto dos o mas veces.
                const filteredItem = cart.filter(i => i.id !== item.id)
                setCart([
                    ...filteredItem,
                    {
                        ...findedItem,
                        cantidad: findedItem.cantidad 
                    }
                ])
            }
        }
     }
   
    // Muestra los items en el cart icono
     const totalItemsCarrito = () => {
        return cart.reduce((acc, item) => acc + item.cantidad, 0)
     }
    const totalPrecioCarrito = () => {
        return cart.reduce((acc, item) => acc + item.cantidad * item.price , 0)
    }
     
    return(
       <CartContext.Provider value={{
        cart,
        addToCart,
        totalItemsCarrito,
        totalPrecioCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}