import React from "react";
import Item from './Item'

export const ItemList = ({productList}) => {

    
    return (
        <div className="ItemList ">
        
            {
              productList.map(item => <Item key={item.id} 
                 title={item.title} 
                 description={item.description} 
                 price={item.price} 
                 image={item.image}  
                //  stock={item.stock} 
                 id={item.id} />)
            }
        </div>
      )
    }
    export default ItemList