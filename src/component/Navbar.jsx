import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink,Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faHamburger, faUser } from '@fortawesome/free-solid-svg-icons'
import Menu from "./menu";
import { logout } from "../store/storeDetailsReducer";
import { useDispatch } from "react-redux";



const Navbar = () => {
    
    const [show,setShow] = useState(false);
    const[open,setOpen] = useState(false);
    const isLogged = useSelector((state) => state.auth.isLoggedIn);
    const quantity = useSelector((state)=>state.cart.totalQuantity);
    const dispatch = useDispatch();

     const handleLogout = ()=>{

       localStorage.removeItem("auth");
       dispatch(logout())
        setShow(false);
        
     }
 
        return (

          <>
        <div className='fixed w-full top-0 left-0 z-10  p-3 md:p-0 bg-gray-700  flex justify-around items-center  mt-1  '>
      

        <div>
            <h3 className='font-bold text-lg text-white'>Hitansh-Mart</h3>
        </div>

        <ul className=' hidden md:flex gap-3 text-[13px] text-black  bg-white p-4 rounded-4xl my-3'>

            <li><NavLink to="/home" className={({ isActive }) => isActive
          ? "text-blue-500 border-b-1 border-blue-600" : ""  }>Home</NavLink></li>

            <li><NavLink to="/product" className={({ isActive }) => isActive
          ? "text-blue-500 border-b-1 border-blue-600" : ""  }>Products</NavLink></li>

            <li><NavLink to="/about" className={({ isActive }) => isActive
          ? "text-blue-500 border-b-1 border-blue-600" : ""  }>About</NavLink></li>

            <li><NavLink to="/contact" className={({ isActive }) => isActive
          ? "text-blue-500 border-b-1 border-blue-600" : ""  }>Contact</NavLink></li>

        </ul>

        <div className="relative" >
       <Link to="/cart"><FontAwesomeIcon className="text-white" size="lg" icon={faCartShopping}/></Link>
  
        <span className="absolute -top-3.5 -right-2 bg-blue-500 font-semibold text-white text-[10px] rounded-full w-4 h-4 flex justify-center ">
        {quantity}
        </span>
       </div> 
         
        <div className="relative">
            
          {
          isLogged ? (<FontAwesomeIcon
                       icon={faUser}
                       size="lg"
                       onClick={()=>setShow(!show)}
                      className="text-white  border border-gray-300 bg-gray-300 p-1 rounded-full  "
               />
      ) :
          (  <button className="bg-white hover:scale-110 text-[14px] text-black font-semibold px-4 py-2 rounded-4xl transition">
            <Link to="/login">Login</Link>
            </button>)

          }    

          {show ? (
         <button onClick = {handleLogout} className=' mt-1 absolute top-full left-0 bg-gradient-to-r from-red-500 to-purple-500 text-white text-[12px] px-3 py-1.5 rounded-md'>Logout</button>) : ('')
         }
         
        </div>

      
        <div className="md:hidden">
          <FontAwesomeIcon onClick={()=> setOpen(!open)} className='text-white' icon={faBars}/>
        </div>
      
    </div>

    {open && <Menu/>}

    </>
     
       
        )           
  
};

export default Navbar;