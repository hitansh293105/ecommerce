import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faLocationDot,faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <div className='min-h-screen bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] flex justify-center items-center'>

       <div className=' shadow-md  shadow-gray-600 p-5  bg-white/10 rounded-lg'>
         <h1 className='text-white text-xl font-bold text-center mb-12'>Get in Touch with E-mart</h1>
          
          <div className='grid grid-cols-2 gap-9'>

         <div className='flex flex-col gap-2'>
          <h1 className='text-lg text-white font-bold'>Contact Info</h1>

          <p className='text-white text-[10px]'>Have a question or need support? we're here to help you with your electronucs journey</p>

          <p className='text-white text-[10px] mt-6'>
            <strong className='text-[11px]'><FontAwesomeIcon className='mr-0.5'icon={faLocationDot}/>Address</strong>: 123Tech Lane,Mumbai,India
            </p>

          <p className='text-white text-[10px]'>
            <strong className='text-[11px]' ><FontAwesomeIcon className='mr-0.5'  icon={faEnvelope}/> Email</strong>: support@gmail.com
            </p>

          <p className='text-white text-[10px]'>
            <strong className='text-[11px]'> <FontAwesomeIcon  className='mr-0.5' icon={faPhone}/>Phone</strong>: +915873853856
            </p>

         </div>

         <div className='flex flex-col gap-4 items-center'>
            <input className='border-1 bg-white rounded-lg text-[11px] px-2 py-1 w-[70%]' type="text" placeholder='Your Name'/>
            <input className='border-1 bg-white rounded-lg text-[11px] px-2 py-1 w-[70%]' type="text" placeholder='Email Address'/>
            <textarea className='text-[11px] px-2 py-1 bg-white w-[70%] rounded-lg ' rows={3} placeholder='Type your message....'/>
            <button className='bg-gradient-to-r from-red-500 to-purple-500 text-white px-1 py-1 rounded-lg text-[12px] w-[70%]'>Send Message</button>
         </div>
         </div>
       </div>
      
    </div>
  )
}

export default Contact
