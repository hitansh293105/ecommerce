import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faHamburger, faUser,faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faWhatsapp, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';



const Footer = () => {

   
  return (
     
    <>
     <div className='h-32 flex justify-center items-center'>
      
      <Link to="/product"><button className=' bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-[15px]'>
        Go to Products
      <FontAwesomeIcon className ='text-white ml-1'icon={faArrowRight}/>
        </button></Link>
    
      
      </div>

    <div className='p-8 mt-5 bg-gray-900  grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-6'>
        
       
            <div className='flex flex-col gap-1 '>

                <h1 className='text-xl text-white font-bold'>E-Mart</h1>
                <p className='text-[10px] text-white'>Powering Your world with the Best in Electronics</p>
                <p className='text-[10px] text-white'>123 Electronics St,Style City, NY 10001</p>
                <p className='text-[10px] text-white'>Email: support@gmail.com</p>
                <p className='text-[10px] text-white'>Phone:1234567890</p>
            </div>

            <div className='flex flex-col gap-1 '>

                <h1 className='text-xl font-bold text-white'>Customer Service</h1>
                <p className='text-[10px] text-white'>Contact us</p>
                <p className='text-[10px] text-white'>Shipping & Returns</p>
                <p className='text-[10px] text-white'>FAQs</p>
                <p className='text-[10px] text-white'>Order Tracking</p>
                <p className='text-[10px] text-white'>Size Guide</p>

            </div>



            <div className='flex flex-col gap-1'>

                <h1 className='text-xl font-bold text-white'>Follow Us</h1>
                
                <div className='flex gap-1.5'>
                <FontAwesomeIcon className='text-white' icon={faWhatsapp}/>
                <FontAwesomeIcon  className='text-white' icon={faFacebook}/>
                <FontAwesomeIcon className='text-white' icon={faTwitter}/>
                <FontAwesomeIcon className='text-white' icon={faInstagram}/>
                </div>

                </div>


                <div className='flex flex-col gap-1.5'>
                  <h1 className='text-lg font-bold text-white'>Stay in the Loop</h1>
                  <p className='text-[10px] text-white'> Subscribe to get special offers and coupon code giveaways and more</p>
                  <div className='flex'>
                  <input type="text" placeholder='Your email address' className='border-1 text-[11px] px-2 py-1 border-white text-white' />
                  <button className='text-[11px] text-white bg-red-600 px-1 py-1 '> Subscribe</button>
                  </div>
                </div>

    </div>
    </>
  )
}

export default Footer
