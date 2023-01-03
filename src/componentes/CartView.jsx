import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FaTrash } from "react-icons/fa";

// FIX THE ICONS 
 export const CartView = () => {
    const {cart, totalPrecioCarrito, emptyCart, deleteItemById} = useContext(CartContext)
 
    const handlerDeleteItem = (id) => {
      deleteItemById(id)
    }

    return (
 

<div className="flex flex-col m-10 justify-center items-center">
  
 {
   cart.length > 0 ? (

    <>
    
    {/* <h1 className="uppercase font-semibold text-lg m-2">Cart</h1>
    <div className="w-[60%] flex relative h-[50px] bg-dimwhite m-1 font-medium">
    <div className="flex justify-center items-center w-[12%]">
    <div className="flex justify-center items-center w-[45%]">Product</div>
    <div className="flex justify-center items-center w-[15%]">Unit Price</div>
    <div className="flex justify-center items-center w-[12%]">Units</div>
    <div className="flex justify-center items-center w-[15%]">Total price</div>
    </div>
    </div> */}
    

    {
     cart.map(item => (
        <div key={item.id} className='w-[60%] flex relative h-[100px] bg-dimwhite m-1 ' >
       <div className="flex justify-center items-center w-[12%]">
        <button 
        onClick = {() => handlerDeleteItem(item.id)} 
        > 
        
        <FaTrash/>

        </button>
      </div>
      
      <div className="flex justify-center items-center  ">
        <img src={item.image} alt={item.name} className='h-[90px]'/>
      </div>
      
      <div className="flex items-center">
          <h3>{item.title}</h3>
     </div>
      
      <div className="flex items-center  justify-center w-[15%]">
          <h3>{item.price} p/u</h3>
     </div>
     
     <div className="flex items-center justify-center w-[12%]">
     <h3>{item.cantidad} u.</h3>
     </div>

     <div className="flex items-center justify-center w-[15%]">
     <h3> ${item.cantidad * item.price}</h3>
     </div>

        </div>
     ))


    }

<div className="w-[60%] flex justify-end m-1" >
        <div className="w-[42%] flex relative h-[50px] bg-dimwhite font-medium items-center justify-between px-8" >
            <h3 className="uppercase"> Total Cart: </h3>  
            <h3 className="text-rigth"> ${totalPrecioCarrito()} </h3>  
        </div>
    </div>
    
    <div className="w-[60%] flex justify-end m-1 gap5" >
      <button onClick={() => emptyCart()} className="px-5 py-2 bg-red-600 text-white font-medium uppercase"> Empty cart </button>
      {/* <Link to='/Checkout' className="px-5 py-2 bg-primary text-white font-medium uppercase"> Finish buying </Link> */}
    </div>
    
    </>
    
    ) : (
       <div className="flex flex-col items-center"> 
        <h1 className="text-2xl font-medium">The cart is empty!</h1>
        <div className="m-6">
         <Link to='/entregaFinalNazer/' className="text-white font-medium uppercase bg-primary py-2 px-4"> Back to shop </Link>
            
        </div>    
        </div>
    
    

    )

}
</div>




    )
}

export default CartView