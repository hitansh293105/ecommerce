import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { updateAddress } from '../store/storeDetailsReducer';

const Backdrop = ({address,setdata,setmodal}) => {

  const token =  useSelector((state)=>state.auth.auth.jwtToken)
  const [loader,setLoader]  = useState(false)
  const dispatch = useDispatch();

  const{
    register,
    handleSubmit,
    reset,
    formState:{errors,isValid}
  } = useForm({mode:'onChange',defaultValues: address});

  const handleClick = (data) =>{

      
       setmodal(false)
     
  }

  const handleUpdate = async (data) =>{

    setLoader(true)

    console.log(data);

    const response =  await axios.put(`http://localhost:8080/api/user/update/Address/${address.id}`,{

        country:data.country,
        state:data.state,
        city:data.city,
        street:data.street,
        buildingName:data.buildingName,
        postalCode:data.postalCode
      },
    {
      headers:{
        Authorization : `Bearer ${token}`
      }
    })

      console.log(response.data);

      dispatch(updateAddress(response.data))

      
      setmodal(false)
      setLoader(false)
       
        
  }
  return (
     <div className="fixed inset-0 backdrop-blur-xs backdrop-brightness-25  backdrop-opacity-100 flex justify-center items-center">

      <form onSubmit={handleSubmit(handleUpdate)} className='flex flex-col  w-[30%] bg-gray-100 p-6 shadow-md shadow-gray-500 space-y-4'>

        <h1 className='text-black font-bold text-lg text-center'>Update Address</h1>
         
        <div>
        <input   text="text" 
                 placeholder='Country' 
                 className='border-1 px-2 py-2 rounded-lg shadow-md shadow-gray-300 w-full ' 
                 {...register('country',{required:'Country is required'})}/>

          {errors.country && <p className='text-red-600 text-[13px]'>{errors.country.message}</p>}
        </div>

        <div>
        <input  text="text" 
                placeholder='State' 
                className='border-1 px-2 py-2 rounded-lg shadow-md shadow-gray-300 w-full' 
                 {...register('state',{required:'State is required'})}
                />
           {errors.state && <p className='text-red-600 text-[13px]'>{errors.state.message}</p>}
        </div>

        <div>
        <input   text="text" 
                 placeholder ='City' 
                className='border-1 px-2 py-2 rounded-lg shadow-md shadow-gray-300 w-full'
                 {...register('city',{required:'City is required'})}/>

                {errors.city && <p className='text-red-600 text-[13px]'>{errors.city.message}</p>}  
        </div>

        <div>
        <input  text="text" 
                placeholder='Street' 
                className='border-1 px-2 py-2 rounded-lg shadow-md shadow-gray-300 w-full' 
                 {...register('street',{required:'Street is required'})}/>

                  {errors.street && <p className='text-red-600 text-[13px]'>{errors.street.message}</p>}
        </div>

        <div>
        <input   text="text"
               placeholder='Building' 
              className='border-1 px-2 py-2 rounded-lg shadow-md shadow-gray-300 w-full ' 
               {...register('buildingName',{required:'BuildingName is required'})}/>

                {errors.buildingName && <p className='text-red-600 text-[13px]'>{errors.buildingName.message}</p>}
        </div>

        <div>
        <input      text="text"
                   placeholder='PostalCode' 
                  className='border-1 px-2 py-2 rounded-lg shadow-md shadow-gray-300 w-full ' 
                     {...register('postalCode',{required:'PostalCode is required'})}/>

                    {errors.postalCode && <p className='text-red-600 text-[13px]'>{errors.postalCode.message}</p>}
        </div>
        
        <div className='flex justify-between'>
        <button type="button" onClick={handleClick} className='bg-gray-200 text-black  font-semibold px-2 py-2 rounded-lg w-full sm:w-[40%] md-w-[30%] lg-w[20%] '>Cancel</button>
        <button disabled={loader}  type="submit" className='bg-blue-500 text-white rounded-lg px-2 py-2  w-full sm:w-[40%] md-w-[30%] lg-w[20%]'>{!loader ? 'Submit' : 'Submitting'}</button>
        </div>


      </form>
      
    </div>
  )
}

export default Backdrop
