/* import React, { useState } from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)


    const plus = ()=>{
        stock > count ? setCount(count + 1) : setCount(count)
    }

    const less = ()=>{
        count > 1 ? setCount(count - 1) : setCount(count)
    }

    const add = ()=>{
        onAdd(count)
    }

  return (
    <div className='m-5 p-24 border-2'>
        <div className='flex flex-row m-5  space-x-10'>
        <button className="btn btn-outline btn-info"  onClick={less}>-</button>
        <p>{count}</p>
        <button className="btn btn-outline btn-info" onClick={plus}>+</button>
        </div>
        <button className="btn btn-primary"  onClick={add}>Add to cart</button>
    </div>
  )
}

export default ItemCount */

////////////////////////////////////


import React, {  useEffect, useState } from 'react'
import Item from './ItemDetail'






const ItemCount = () => {
   const [count, setCount] = useState(0)
  
   const click = () => {
    setCount(count +1)
    setCount(count -1)
   console.log(click)
  // const Item = () => {

  // }
  
}

 return (
  
 
    <div className='  cart'>
        
        <button 
        onClick={() => setCount(count+1)} className='btn boton__aumentar m-1'>+</button>
         <strong className='contador' >{count}</strong>
         <button 
         onClick={() => setCount(count -1)} disabled={count ===0} className='btn boton__disminuir m-1'>-</button>
         {/* <button 
         onClick={() => setCount(0)}  className='btn boton__reset m-1'>Add to cart</button>
         <button 
           className='btn  m-1'>Buy</button> */}
         
    </div>
  
       
 
  
  )
  
}

export default ItemCount