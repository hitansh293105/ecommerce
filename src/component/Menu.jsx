import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'
import {  faUser } from '@fortawesome/free-solid-svg-icons'

const Menu = () => {

      const isLogged = useSelector((state) => state.auth.isLoggedIn);
     const quantity = useSelector((state)=>state.cart.totalQuantity);

     
  return (
   
    <div className=' bg-gray-100 '>

        <ul className='flex flex-col items-center space-y-2 pr-4 mt-1 text-[13px] font-semibold'>
            <Link to = "/home"><li className='hover:text-blue-600'>Home</li></Link>
            <Link to="/product"><li className='hover:text-blue-600'>Product</li></Link>
            <Link to="/about"><li className='hover:text-blue-600'>About</li></Link>
            <Link to="/contact"><li className='hover:text-blue-600'>Contact</li></Link>
        </ul>
       


              
        
      
    </div>
  )
}

export default Menu
