import React from 'react'
import { useSelector } from 'react-redux'

const OrderSummary = () => {

    const selected = useSelector((state)=> state.auth.selectedAddress)
    const items = useSelector((state)=>state.cart.items)

    console.log(selected);

  return (
    <div className='flex flex-wrap space-y-4 mb-6 mt-20'>

        <div className='shadow-md shadow-gray-200  p-1.5 w-full sm:w-[80%] md:w-[60%] lg:w-[50%]'>
            <h1 className='text-black font-lg font-bold  '>Billing Address</h1>
            <div className='flex space-x-0.5 text-[13px]'>
                <p className='font-semibold'>Building Name :</p>
                <p>{selected.buildingName}</p>
            </div>

              <div className='flex space-x-0.5 text-[13px]'>
                <p className='font-semibold'>Street :</p>
                <p>{selected.street}</p>
            </div>

              <div className='flex space-x-0.5 text-[13px]'>
                <p className='font-semibold'>City :</p>
                <p>{selected.city}</p>

            </div >

              <div className='flex space-x-0.5 text-[13px]'>
                <p className='font-semibold'>State :</p>
                <p>{selected.state}</p>
            </div>

              <div className='flex space-x-0.5 text-[13px]'>
                <p className='font-semibold'>Country :</p>
                <p>{selected.country}</p>
            </div>


        </div>

        <div className='p-1.5 w-full sm:w-[80%] md:w-[60%] lg:w-[50%] shadow-md shadow-gray-200'>

            <h1 className='text-lg font-bold'>Order Items</h1>
             {items.map((value)=>(

                <div>
                <div className='font-semibold text-[13px]' key={value.id}>{value.productName}</div>
                <div className='text-[12px] '>{value.quantity} × ₹{value.specialPrice} = ₹{value.quantity*value.specialPrice}</div>

                </div>
             ))}

        </div>

        <div className='w-full sm:w-[80%] md:w-[60%] lg:w-[50%] shadow-md shadow-gray-200 p-1.5'>
            <h1 className='text-lg font-bold'>Payment Method</h1>
            <div className='flex space-x-0.5'>
                <p className='text-[13px] font-semibold'>Method :</p>
                <p className='text-[13px]'>Razorpay</p>
            </div>
        </div>
      
    </div>
  )
}

export default OrderSummary
