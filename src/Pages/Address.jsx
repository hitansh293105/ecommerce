import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { addAddress } from '../store/storeDetailsReducer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




const Address = () => {

  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.auth.jwtToken)

  const{
     register,
     handleSubmit,
     reset,
     formState : {errors,isValid}
  } = useForm({mode:'onChange'});

  const dispatch = useDispatch();

  const formSubmit = async (data) => {
      
       console.log(data)

       console.log(token);
       const response = await axios.post(
        
      "https://decode007-1.onrender.com/api/user/create-address",  
      
      {

        country:data.country,
        state:data.state,
        city:data.city,
        street:data.street,
        buildingName:data.building,
        postalCode:data.postalcode
             
       },

      {headers : {
        Authorization:`Bearer ${token}`
      }}
    )

     debugger

        console.log(response);
       console.log(response.data);

       debugger

       dispatch(addAddress({...response.data}));

       debugger

       reset()
      
  }



  return (
    <div className='flex justify-center  mb-10 '>

      <form  onSubmit={handleSubmit(formSubmit)}className='flex flex-col shadow-md shadow-gray-500 max-w-sm w-full space-y-3 p-6'>

        <h1 className='text-center text-black font-bold text-lg'>Billing Details</h1>
        
        <div>
        <input className='border-1 px-3 py-2 rounded shadow-md shadow-gray-300 w-full text-[14px]' 
              type="text" 
              placeholder='Country'
              {...register('country',{required:'Country is required'})}
              />

            {errors.country && <p className='text-red-600 text-[13px] mt-1'>{errors.country.message}</p>}
             </div>
         
         <div>
        <input className='border-1 px-3 py-2 rounded shadow-md shadow-gray-300 w-full text-[14px]' 
               type="text" 
               placeholder='State'
                {...register('state',{required:'State is required'})}
               />

             {errors.state && <p className='text-red-600 text-[13px] mt-1'>{errors.state.message}</p>}

               </div>
          
            <div>
        <input className='border-1 px-3 py-2 rounded shadow-md shadow-gray-300 w-full text-[14px]' 
               type="text" 
               placeholder='City'
               {...register('city',{required:'City is required'})}
               />

                {errors.city && <p className='text-red-600 text-[13px] mt-1'>{errors.city.message}</p>}

                  </div>
         
           <div>
        <input className='border-1 px-3 py-2 rounded shadow-md shadow-gray-300 w-full text-[14px]' 
               type="text" 
               placeholder='Street'
                 {...register('street',{required:'Street is required'})}/>

             {errors.street && <p className='text-red-600 text-[13px] mt-1'>{errors.street.message}</p>}

               </div>
          
            <div>
        <input className='border-1 px-3 py-2 rounded shadow-md shadow-gray-300 w-full text-[14px]' 
                type="text" 
                placeholder='Building'
                  {...register('building',{required:'BuildingName is required'})}
                />

                {errors.building && <p className='text-red-600 text-[13px] mt-1'> {errors.building.message}</p>}  

                  </div>
          
            <div>
        <input className='border-1 px-3 py-2 rounded shadow-md shadow-gray-300  w-full text-[14px]' 
               type="text" 
               placeholder='PostalCode'
              {...register('postalcode',{required:'PostalCode is required'})}
               />

                {errors.postalcode && <p className='text-red-600 text-[13px] mt-1'>{errors.postalcode.message}</p>} 

                </div>  

              

        <button className='bg-blue-500 text-white px-2 py-3 rounded-lg hover:bg-blue-600'>Submit</button>

      </form>
      
    </div>
  )
}

export default Address
