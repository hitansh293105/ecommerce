import React, { useState } from 'react';
import Address from './Address';
import AddressSelection from './AddressSelection';
import { useDispatch, useSelector } from 'react-redux';
import OrderSummary from './OrderSummary';
import axios from 'axios';
import Payment from './Payment';
import { addOrders } from '../store/storeDetailsReducer';
import { toast } from 'react-toastify';



const Checkout = () => {
    const[step,setStep] = useState(0);
    const steps = ["Address","Address Selection","Order Summary","Payment"];
    const [complete,setComplete] = useState(Array(4).fill(''));
    const items = useSelector((state)=> state.cart.items);
    const token = useSelector((state)=>state.auth.auth.jwtToken)
    const addressId = useSelector((state)=> state.auth.selectedAddress.id)
    const selected = useSelector((state)=>state.auth.selectedAddress);

    const dispatch = useDispatch();

    const handleBack = () =>{

      const newComplete = [...complete]

      newComplete[Math.max(0,step-1)] = '';
      setStep(Math.max(0,step-1));
      setComplete(newComplete); 
         
    }

    const handleNext = async () =>{

      const newComplete = [...complete];
     
      if(step == 1 && Object.keys(selected).length === 0){
         
        toast.success("Please Select Address");
        return;
      }


      if(step == 1){
         
         const response = await axios.post("https://decode007-1.onrender.com/api/Add/cart/product",{  

            cardItemDtoList:items

          },{
            headers:{
              Authorization : `Bearer ${token}`
            }
          })

          console.log(response);
      }

      if(step == 2){

        const response = await axios.post(`https://decode007-1.onrender.com/order/user/payment/${addressId}`,
         
          {},
          {
            headers:{
              Authorization : `Bearer ${token}`
          }})
       

        console.log(response);
        dispatch(addOrders(response.data));
      }

      newComplete[Math.min(4,step)] = '1';
      setStep(Math.min(4,step+1));
      setComplete(newComplete);



    }

   return(
        
       <div className='mx-auto w-1/2 mt-20'>

             <div className='flex '>

            {steps.map((value,index)=>(  

                <div className='flex flex-col space-y-4  items-center relative p-6 '>

           {index !== steps.length - 1 && 
          <div
          className={`absolute top-10 left-1/2 w-1/2 h-0.5 -z-10 ${
          complete[index] ? 'bg-green-400' : 'bg-gray-300'
          }`}
          />
           }

          {index !== 0 && 
          <div
         className={`absolute top-10 right-1/2 w-1/2 h-0.5 -z-10 ${
         complete[index - 1] ? 'bg-green-400' : 'bg-gray-300'
         }`}
        />
          }


               <div className={`border-1 rounded-full w-8 h-8 flex justify-center items-center text-white ${complete[index] ? 'bg-green-400 ' : 'bg-blue-500'}`}>                
                    {complete[index] ?  '✓' : index+1}
                 </div>
                <div className='mr-3 text-gray-700 text-[15px]'>{value}</div>

                 </div>
                
            ))}

            </div>

            <div>

              {step == 0 && <Address/>}
              {step == 1 && <AddressSelection/>}
              {step == 2 && <OrderSummary/>}
               {step == 3 && <Payment/>}
              
                
            </div>

            <div className='flex justify-between'>
                <button onClick={handleBack} className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg '>Back</button>
                <button onClick={handleNext}className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg'>Next</button>
                 
            </div>

      
       </div>
   )
  
}

export default Checkout; 