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
    <div className="backgroundItemDetail"> 
    
      <div className="m-5 p-5 font-bold ">

          <div>{item.title}</div>
          {/* <div>{item.quantity}</div> */}
          <div>Stock: {item.stock}</div>
          <div>Price: U$ {item.price}</div>
          <div>Style: {item.description}</div>
          <figure className='w-80 mt-10 ml-5'><img src={item.image}  /></figure>
       <div>
       { 
         !purchase ? 
           <ItemCount stock={item.Stock} initial={0} onAdd={onAdd} />
         :  <Link to={'/entregaFinalNazer/CartView'} className='btn bg-blue-300 hover:bg-sky-700 hover:text-white border-none text-gray-700 text-base font-[popins]'>Go to cart</Link>
         }
         </div>
      </div>
      
  </div>
    )
  }
 
 export default Item 