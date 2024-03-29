import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'


const CartWidget = () => { 
    
    const {totalItemsCarrito} = useContext(CartContext)
    
  return (
    <>
     <div>
       
         <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator"><Link to={'/entregaFinalNazer/CartView'} className='' >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" 
            stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 
            0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </Link>
            <span className="badge border-none  bg-orange-600 aspect-square  ">{totalItemsCarrito()}</span>
            </div>
           
        </label>
        <div tabIndex={0} className="mt-3 card card-compact border  w-1/4 bg-base-100 shadow">
        </div>
    </div> 
    </>
    
  )
}

export default CartWidget

