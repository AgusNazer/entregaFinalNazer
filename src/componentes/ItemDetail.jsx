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
    <div className="backgroundItemDetail flex flex-wrap justify-center"> 
    
      <div className="m-5 p-5 font-bold text-xl  ">

          <div className="text-center">{item.title}</div>
          {/* <div>{item.quantity}</div> */}
          <div className="text-center">Stock: {item.stock}</div>
          <div className="text-center">Price: U$ {item.price}</div>
          <div className="text-center">Style: {item.description}</div>
          <figure className='w-80 mt-10 ml-5 mix-blend-multiply'><img src={item.image}  /></figure>
       <div className="flex flex-wrap justify-center">
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