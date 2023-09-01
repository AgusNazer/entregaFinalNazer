import { Link } from "react-router-dom"
import React from "react"


const Item = ( {title, stock, id, price,image} ) => {

   
    return (
        <div className="flex justify-center" >
        <div className="rounded-lg shadow-lg bg-white  max-w-sm card">
          <a href="" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img className="rounded-t-lg mb-28" src={image}/>
          </a>
          <div className="p-6  absolute left-0 bottom-0 mt-20">
            <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
            <p className="text-gray-700 text-base font-[popins] mb-4">
              {price}
            </p>
            <Link to={`/entregaFinalNazer/item/${id}`} className="btn border-none bg-gray-300 hover:bg-gray-700 hover:text-gray-200 text-white font-bold py-2 px-4">View Details</Link> 
          </div>
        </div>
      </div> 
    )
  }

 export default Item











 
