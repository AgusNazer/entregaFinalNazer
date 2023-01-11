import React from 'react'

import { Link } from 'react-router-dom'

import CartWidget from './CartWidget'

const NavBar = () => {



    return (
      
        <>
        <nav className='containerNavBar bg-green-100 '>
        <Link to='/entregaFinalNazer/' className="  bg-teal-500 -none hover:bg-teal-700 hover:text-teal-100 text-white font-bold m-2 py-2 px-4 rounded-full uppercase text-xl font-[Poppins] ">Naiki store</Link>
        <Link to='/entregaFinalNazer/'><img className='rounded-full ' src='https://www.tradeinn.com/m/13812/138126109/nike-zapatillas-metcon-7.jpg'/></Link>       
    
            <div className='linkNavBar '>

                <Link to= {'/entregaFinalNazer/category/Running'} ><p className=' text-gray-700 hover:text-blue-700'>Running</p></Link>
                <Link to= {'/entregaFinalNazer/category/Crossfit'} ><p className='text-gray-700 hover:text-green-600'>Crossfit</p></Link>
                <Link to= {'/entregaFinalNazer/category/Trainning'} ><p className='text-gray-700 hover:text-purple-400'>Training</p></Link>
                <Link to= {'/entregaFinalNazer/category/Urban'} ><p className='text-gray-700 hover:text-orange-400'>Urban</p></Link>
            </div>
             <div className="">
               <CartWidget/>
             </div>
        </nav>
        </>
      
      
      
    )
  }
  
  export default NavBar



