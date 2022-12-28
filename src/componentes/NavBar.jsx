import React from 'react'

import { Link } from 'react-router-dom'

import CartWidget from './CartWidget'


const NavBar = () => {



  return (
    <div className='navBar__Flex'>
        <div className="navbar bg-green-100">
        <div className="flex-1">
            <Link to='/preEntregaNazer/' className="btn btn-ghost normal-case text-xl a__shoos__text">Shoos!</Link>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                
                <Link to='/preEntregaNazer/' ><img className='nike__celu' src='https://www.tradeinn.com/m/13812/138126109/nike-zapatillas-metcon-7.jpg'/></Link>
                </div>
            </label> 
            <div className="dropdown dropdown-end">


            <ul className='nav-items navbar m-1 text-lg font-medium  italic'>
                <li className='space-x-1.5 '>
                  <Link to= {'/preEntregaNazer/category/Running'} ><p>Running</p></Link>
                  <Link to= {'/preEntregaNazer/category/Crossfit'} ><p>Crossfit</p></Link>
                  <Link to= {'/preEntregaNazer/category/Trainning'} ><p>Training</p></Link>
                  <Link to= {'/preEntregaNazer/category/Urban'} ><p>Urban</p></Link>
                    
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
