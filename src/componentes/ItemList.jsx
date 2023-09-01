import React from "react";
import Item from './Item'
import Loader from "./Loader";

export const ItemList = ({productList}) => {

    
    return (
      <div className="flex flex-wrap justify-center ">
      
        <div className="ItemList font-bold text-gray-100 flex flex-wrap justify-center gap-5 mb-5 mt-5 min-h-screen ">
        
            {
              productList.map(item => <Item key={item.id} 
                 title={item.title} 
                 description={item.description} 
                 price= {item.price} 
                 image={item.image}  
                 id={item.id} />)
            }
        </div>
       
        </div>
      )
    }
    export default ItemList

    