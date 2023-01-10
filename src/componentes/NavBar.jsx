import React from 'react'

import { Link } from 'react-router-dom'

import CartWidget from './CartWidget'


const NavBar = () => {



  return (
    
    <div className=''>
        <div className="navbar bg-green-100">
        <div className="flex-1">
            <Link to='/entregaFinalNazer/' className=" bg-teal-500 border-none hover:bg-teal-700 hover:text-teal-100 text-white font-bold py-2 px-4 rounded-full uppercase text-xl a__shoos__text ">Yor-ShooStore!</Link>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                
                <Link to='/entregaFinalNazer/' ><img className='nike__celu' src='https://www.tradeinn.com/m/13812/138126109/nike-zapatillas-metcon-7.jpg'/></Link>
                </div>
            </label> 
            <div className="dropdown dropdown-end">


            <ul className='nav-items navbar m-1 text-lg font-medium  italic '>
                <li className='space-x-1.5 '>
                  <Link to= {'/entregaFinalNazer/category/Running'} ><p className='hover:text-blue-700'>Running</p></Link>
                  <Link to= {'/entregaFinalNazer/category/Crossfit'} ><p className='hover:text-green-600'>Crossfit</p></Link>
                  <Link to= {'/entregaFinalNazer/category/Trainning'} ><p className='hover:text-purple-400'>Training</p></Link>
                  <Link to= {'/entregaFinalNazer/category/Urban'} ><p className='hover:text-orange-400'>Urban</p></Link>
                    
                </li>
            </ul>
            
             </div>
        </div>
        <div className="flex-none">
            <div className="dropdown dropdown-end">
            <CartWidget/>
        </div>
        
            <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">         

                <img src="https://thumbs.dreamstime.com/b/l%C3%ADnea-icono-del-negro-avatar-perfil-de-usuario-121102131.jpg" />
                </div>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                <a className="justify-between">
                    Profile
                    <span className="badge">My profile</span>
                </a>
                </li>
                <li><a>Logout</a></li>
                <li><a></a></li>
            </ul>
             </div>
        </div>
        </div>
    </div>
    
    
    
  )
}

export default NavBar
