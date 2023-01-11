import React from 'react'

import { Link } from 'react-router-dom'

import CartWidget from './CartWidget'

const NavBar = () => {



    return (
      
    
      <div className='nav'>
        <div className="navbar bg-green-100">
          <div className="">
          <Link to='/entregaFinalNazer/' className=" bg-teal-500 -none hover:bg-teal-700 hover:text-teal-100 text-white font-bold py-2 px-4 rounded-full uppercase text-xl font-[Poppins] ">Yor-ShooStore!</Link>
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
              
              <Link to='/entregaFinalNazer/' ><img className='nike__celu' src='https://www.tradeinn.com/m/13812/138126109/nike-zapatillas-metcon-7.jpg'/></Link>
              </div>
          </label> 
          </div>
          <div className="">
         <ul className=' navbar m-2 text-lg font-medium  italic  '>
              <li className='space-x-1.5  '>
                <Link to= {'/entregaFinalNazer/category/Running'} ><p className='hover:text-blue-700'>Running</p></Link>
                <Link to= {'/entregaFinalNazer/category/Crossfit'} ><p className='hover:text-green-600'>Crossfit</p></Link>
                <Link to= {'/entregaFinalNazer/category/Trainning'} ><p className='hover:text-purple-400'>Training</p></Link>
                <Link to= {'/entregaFinalNazer/category/Urban'} ><p className='hover:text-orange-400'>Urban</p></Link>
                  
              </li>
          </ul>
           </div>
             <div className="  ">
               <CartWidget/>
             </div>
        
         </div>
      </div>
      
      
    )
  }
  
  export default NavBar



{/* */}


// Prueba de menu hamburguesa










    //menu original
// probar para el carrito al final > md:flex items-center justify-between bg-white py-4 md:px-10 px-7
