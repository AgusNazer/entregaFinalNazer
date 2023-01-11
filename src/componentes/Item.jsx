import { Link } from "react-router-dom"
import React from "react"






 const Item = ( {title, stock, id, price,image} ) => {

   
    return (
        <div className="flex justify-center">
        <div class="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img className="rounded-t-lg" src={image}/>
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
            <p className="text-gray-700 text-base mb-4">
              {price}
            </p>
            <Link to={`/entregaFinalNazer/item/${id}`} className="btn border-none bg-blue-300 hover:bg-blue-400 hover:text-black text-white font-bold py-2 px-4">View Details</Link> 
          </div>
        </div>
      </div> 
    )
  }

 export default Item











 
// return anterior 
{/* <div className="m-5 bg-gray-400 p-5 divGris ">
          <div>{title}</div>
          <div>{stock}</div>
          <div>{price}</div>

          
          <figure className='w-80 mt-10 m-5 ml-5  '><img src={image} /></figure>
          <Link to={`/entregaFinalNazer/item/${id}`} className="btn border-none bg-blue-300 hover:bg-blue-400 hover:text-black text-white font-bold py-2 px-4">View Details</Link> 
           
          
      </div> */}


   