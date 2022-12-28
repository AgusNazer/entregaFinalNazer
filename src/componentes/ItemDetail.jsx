import React from "react" 
import ItemCount from "./ItemCount"
import { CartContext } from "../context/CartContext"
import { useState,useContext } from "react"
import products from "./mock/products"
import { Link } from "react-router-dom"





   const Item = ({item}) => {
    const [purchase, setPurchase] = useState(false)
    

    const [cantidad, setCantidad] = useState(0)

   const {addToCart} = useContext(CartContext)

   const handlerAddToCart = () =>  {
    addToCart(item, cantidad)
    setPurchase(!purchase)
   }

// arreglar la logica del contador al agregar al carrito

// console.log(cantidad)


 const onAdd = (cantidad) => {

     setCantidad[cantidad ]
    setCantidad[cantidad  ]
      console.log(`se ha agregado ${cantidad} `)
   console.log(item)

  }


 

    return (
    <> 
      <div className="m-5 bg-gray-400 p-5">
          <div>{item.title}</div>
          <div>{item.stock}</div>
          <div>{item.price}</div>
          <div>{item.description}</div>
          <figure className='w-80 mt-10 ml-5'><img src={item.image}  /></figure>
          <ItemCount stock={item.stock} initial={0} onAdd={onAdd} />
          
       <div>
         { 
         !purchase ? (
          <button 
         onClick={handlerAddToCart}  className='btn boton__reset m-1'>Add to cart
         </button>)
         :(
         <>
         <Link to={'/preEntregaNazer/CartWidget'} className='btn'>Finish purchase</Link>
         </>
        )
         }
         {/* <button className='btn  m-1'>Buy</button>  */}
         </div>
      </div>
      {
        purchase &&
      <Link to= '/' ></Link>
      }  
          
          
      

      
      
  </>
    )
  }
 
 export default Item




