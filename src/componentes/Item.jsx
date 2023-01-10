import { Link } from "react-router-dom"
import React from "react"






 const Item = ( {title, stock, id, price,image} ) => {

   
    return (
      // <div style={{backgroundImage: `url("https://4drendimiento.es/wp-content/uploads/2019/12/imagen-destacada-deportista.png")`}}>
      <div className="m-5 bg-gray-400 p-5 ">
          <div>{title}</div>
          <div>{stock}</div>
          <div>{price}</div>
          <figure className='w-80 mt-10 m-5 ml-5 imagen_container '><img src={image} /></figure>
          <Link to={`/entregaFinalNazer/item/${id}`} className="btn border-none bg-blue-300 hover:bg-blue-400 hover:text-black text-white font-bold py-2 px-4">View Details</Link> 
           
          
      {/* </div> */}
      </div>
    )
  }

 export default Item










 