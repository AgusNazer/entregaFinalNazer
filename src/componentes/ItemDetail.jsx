import React from "react" 
import ItemCount from "./ItemCount"
import { CartContext } from "../context/CartContext"
import { useState,useContext } from "react"
import { Link } from "react-router-dom"

   const Item = ({item}) => {
    const [purchase, setPurchase] = useState(false)

    const {addToCart} = useContext(CartContext)

    const onAdd = (cantidad) => {
          addToCart(item, cantidad)
          setPurchase(!purchase)
      }

    return (
    <> 
      <div className="m-5 bg-gray-400 p-5">

          <div>{item.title}</div>
          {/* <div>{item.quantity}</div> */}
          <div>{item.stock}</div>
          <div>{item.price}</div>
          <div>{item.description}</div>
          <figure className='w-80 mt-10 ml-5'><img src={item.image}  /></figure>
       <div>
       { 
         !purchase ? 
           <ItemCount stock={item.Stock} initial={0} onAdd={onAdd} />
         :  <Link to={'/entregaFinalNazer/CartView'} className='btn'>Finish purchase</Link>
         }
         </div>
      </div>
      
  </>
    )
  }
 
 export default Item 