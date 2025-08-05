import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='min-h-screen bg-gray-100 flex justify-center mt-20 '>

      <div className='bg-white  mt-9 w-[60%] p-5 shadow-xs shadow-gray-500 rounded-xl flex flex-col gap-5'>

          <div className='flex flex-col gap-3'>
          <h1 className='text-center text-xl font-bold '>About E-Mart</h1>

          <p className='text-[12px] text-gray-700'>Welcome to E-mart,your one stop destination for the latest and greatest in electronics. From cutting edges gadgest
             to must-have-accessories, we're here to power up your tech life with premium products and unbeatable service.
          </p>

          </div>


           <div className='flex flex-col gap-3'>
          <h1 className='text-lg font-bold  text-red-600'>Our Mission</h1>
          <p className='text-[11px] text-gray-700'>
            At E-mart our mission is to make innovate technology accessible to everyone.we are passionare about connecting people with the tools and tech they need to thrive in a digital world  all at competiting prices and delivered with speed and care
          </p>
          </div>


           <div className='flex flex-col gap-3'>
          <h1 className='text-lg font-bold  text-red-600'>Why Choose E-Mart ?</h1>
          <ul className='text-[11px] text-gray-700 flex flex-col gap-1 list-disc pl-2'>
            <li>Top quality electronic products from trusted brands</li>
            <li>Lightning-fast and secure shipping</li>
            <li>Reliable customer support, always ready to help</li>
            <li>Easy return and hassle-free shopping experience</li>
          </ul>
          </div>


           <div className='flex flex-col gap-3'>
          <h1 className='text-lg font-bold text-red-600'>Our Vision</h1>
          <p className='text-[11px] text-gray-700'>We envision a future where technology elevates everyday life. At E-mart, we're commited to staying ahead of the curve,offering
            cutting edge solution that are both practical and affordable</p>
            </div>

        <div className='flex flex-col items-center gap-2'>

        <h1 className='text-red-600 text-lg font-bold'>Join the E-mart Family</h1>
        <p className='text-[11px] text-gray-700'> Whether your're a tech enthusiast, a professional, or just looking for something cool and functional. E-Mart has something for you</p>
        
        <Link to="/product">
        <button className='bg-red-500 hover:bg-red-600 text-white px-2 py-1.5 rounded-lg text-[11px]'>Start Shopping</button>
       </Link>

      </div>

      </div>

      
    </div>
  )
}

export default About
