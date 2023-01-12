import React, {  useState } from 'react'

const ItemCount = ({stock, onAdd}) => {
   const [count, setCount] = useState(0)
  
   const click = () => {
    setCount(count +1)
    setCount(count -1)
   console.log(click)
 
}

 return (
    <div className='  cart'>
        
        <button 
        onClick={() => setCount(count+1)} className='btn hover:bg-blue-300 border-none boton__aumentar m-1' disabled={count === stock}>+</button>
         <strong className='contador' >{count}</strong>
         <button 
         onClick={() => setCount(count -1)} disabled={count ===0} className='btn hover:bg-red-300 border-none  boton__disminuir m-1'>-</button>
         <button 
         onClick={() => onAdd(count)}  className='btn hover:bg-orange-400 border-none boton__reset m-1 font-[popins]'>Add to cart</button>
         </div>
  )
  
}

export default ItemCount













