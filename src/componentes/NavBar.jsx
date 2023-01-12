import React from 'react'

import { Link } from 'react-router-dom'

import CartWidget from './CartWidget'

const NavBar = () => {



    return (
      
        <nav className='bg-green-100 py-4  relative'>
        <div className=' mx-auto flex  '>
        <Link to='/entregaFinalNazer/' className="  bg-teal-500  hover:bg-teal-700 hover:text-teal-100 text-white font-bold m-2 py-3 px-8 rounded-full uppercase text-xl font-[Poppins] ">Naiki Store</Link>
        <Link to='/entregaFinalNazer/'><img className='rounded-full ' src='https://www.tradeinn.com/m/13812/138126109/nike-zapatillas-metcon-7.jpg'/></Link>
        </div>
           <div className='md:flex justify-between m-1 px-8 items-center  text-2xl font-[poppins] text-gray-600'>
           <Link to= {'/entregaFinalNazer/category/Running'} ><p className='  hover:text-blue-700 '>Running</p></Link>
                  <Link to= {'/entregaFinalNazer/category/Crossfit'} ><p className=' hover:text-green-600'>Crossfit</p></Link>
                  <Link to= {'/entregaFinalNazer/category/Trainning'} ><p className=' hover:text-purple-400'>Training</p></Link>
                  <Link to= {'/entregaFinalNazer/category/Urban'} ><p className=' hover:text-orange-400'>Urban</p></Link>
                  <CartWidget/>
           </div>
           
  
      </nav>
       
      
      
      
    )
  }
  
  export default NavBar



   


