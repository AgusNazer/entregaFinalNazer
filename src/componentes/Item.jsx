import { Link } from "react-router-dom"
import React from "react"






 const Item = ( {title, stock, id, price,image} ) => {

   
    return (
      <div className="m-5 bg-gray-400 p-5 Item ">
          <div>{title}</div>
          <div>{stock}</div>
          <div>{price}</div>
          <figure className='w-80 mt-10 m-5 ml-5 imagen_container '><img src={image} /></figure>
          <Link to={`/entregaFinalNazer/item/${id}`} className="btn btn-info">View Details</Link> 
           
          
      </div>
    )
  }

 export default Item










 