import { Link } from "react-router-dom"
import React from "react"


const Item = ( {title, stock, id, price,image} ) => {

   
    return (
        <div className="flex justify-center " >
        <div className="rounded-lg shadow-lg bg-white max-w-sm carrd ">
          <a href="" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img className="rounded-t-lg" src={image}/>
          </a>
          <div className="p-6">
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











 
