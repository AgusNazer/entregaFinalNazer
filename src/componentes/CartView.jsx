import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FaTrash } from "react-icons/fa";

 export const CartView = () => {
    const {cart, totalPrecioCarrito, emptyCart, deleteItemById} = useContext(CartContext)
 
    const handlerDeleteItem = (id) => {
      deleteItemById(id)
    }

    return (
 

<div className="flex flex-col m-10 justify-center items-center backgroundCartView">
  
 {
   cart.length > 0 ? (

    <>
    {
     cart.map(item => 
      (
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
    
    <div className="w-[60%] flex justify-center m-1 gap5" >
      <Link to='/entregaFinalNazer/Checkout' className="bg-blue-300 hover:bg-sky-700 hover:text-blue-100 text-white font-bold py-2 px-4 rounded-full uppercase font-[popins]"> Finish buying! </Link>
      <button onClick={() => emptyCart()} className="bg-purple-100 hover:bg-pink-700 border-none hover:text-gray-100 font-bold py-2 px-4 rounded-full uppercase font-[popins]"> Empty cart </button>
    </div>
    
    </>
    
    ) : (
       <div className="flex flex-col items-center"> 
        <h1 className="text-2xl font-medium font-[popins]">The cart is empty!</h1>
        <div className="m-6">
         <Link to='/entregaFinalNazer/' className=" bg-orange-300 btn hover:bg-orange-400 hover:text-white border-none py-2 px-4 rounded-full uppercase font-[popins]"> Back to shop </Link>
         
            
        </div>    
        </div>
    
    

    )

}
</div>




    )
}

export default CartView