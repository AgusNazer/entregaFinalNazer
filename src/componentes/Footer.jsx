

import React from 'react'
import {FaLinkedin } from 'react-icons/fa'
import {FaGithub } from 'react-icons/fa'




const Footer = () => {
  return (
   <>
    
    <div className={' mx-6 pt-3 pb-4'}>
        <div className='flex flex-col justify-center items-center text-center border-t border-gray-300 pt-4 text-gray-600 pt-3'>

            <p>© 2023 <a href='https://theshopyohjiyamamoto.com/' target='_blank'>Agustin Nazer</a>. All Rights reserved.</p>
            <p>Developed by Agustin Nazer with 💚  & passion👨🏽‍💻 </p>

            <div className='flex flex-row justify-center items-center gap-x-2 pt-1'>
                <a href='https://github.com/AgusNazer' target='_blank'>
                 <FaGithub/> 
                </a>
                <a href='https://www.linkedin.com/in/agustínnazer/' target='_blank'>
                <FaLinkedin/>
                    
                </a>
            </div>
        </div>
    </div>
</>
    
  )
}

export default Footer