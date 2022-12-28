import { useContext } from "react";
import { CartContext } from "../context/CartContext";
//import { Link } from "react-router-dom";


// probando creando un componente nuevo cart view para mostrar el carrito de compras
// con todos el desglose de productos.
const cartView = () => {
    const {cart, totalPriceCarrito} = useContext(CartContext)
 
    return (
 

<div>

<h1>Esta es la vista del carrito de compras.</h1>

</div>


    )



}

export default Cart