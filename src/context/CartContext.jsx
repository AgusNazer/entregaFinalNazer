
import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext()



export const CartContextProvider = ({children}) => {
    
    const [cart, setCart] =useState([]);
    console.log(cart)


    


const addToCart = (item, cantidad) => {
    // creamos un nuevo objeto con los datos que recibimos por parámetros. Haciendo spread del producto.
      const newObj = {
        ... item,
        cantidad
      }
    // hacer una condicional, si el nuevo objeto está en el carrito
      if(isInCart(newObj.id)){
    // vamos a hacer un map y sumar las cantidades, así no duplicamos
          cart.map(el => {
            if(el.id === newObj.id)  {
              el.cantidad+= newObj.cantidad
            }
    //retornamos 
            return(el)
            })
        }
    // si es un producto que no está en el carrito, lo va a agregar. 
    else {
          setCart([... cart , newObj])
        }
      }
      const isInCart = (id) => {
        return cart.some(el => el.id === id)
      }
// Muestra los items en el cart icono
     const totalItemsCarrito = () => {
        return cart.reduce((acc, item) => acc + item.cantidad, 0)
     }
    const totalPrecioCarrito = () => {
        return cart.reduce((acc, item) => acc + item.cantidad * item.price , 0)
    }
     
const emptyCart = () => {
    setCart([])
}

const deleteItemById = (id) => {
    const newCart =cart.filter(item => item.id !== id)
    setCart(newCart)
}

    return(
       <CartContext.Provider value={{
        cart,
        addToCart,
        totalItemsCarrito,
        totalPrecioCarrito,
        emptyCart,
        deleteItemById
        }}>
            {children}
        </CartContext.Provider>
    )
}

