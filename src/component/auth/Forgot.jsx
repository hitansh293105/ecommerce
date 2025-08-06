import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Forgot = () => {

  const[res,setResult]  = useState('');
  const[loading, setLoading] = useState(false);
  const navigate = useNavigate();

    const {

        register,
        reset,
        handleSubmit,
        formState :{errors,isValid}
    } = useForm({mode:'onChange'});


    const formSubmit = async (data) =>{

      setLoading(true);

      console.log(data)
      console.log("hello");

    try{
       const response =  await axios.post("https://decode007-1.onrender.com/api/user/email",{
        
           username:data.email,
     })
       
       console.log(response);
       console.log(response.data);

       navigate("/otp", { state: { email:data.email } });

        reset();
    

       
    }

    catch(error){
       
        console.log(error);
        setResult(error.response.data);
        setTimeout(()=>setResult(''),9000);
        
    }

    setLoading(false);
  }

  return (
    <div onSubmit={handleSubmit(formSubmit)} className='min-h-screen flex justify-center items-center' >

        <form className=' flex flex-col  max-w-sm w-full p-6 space-y-6 shadow-md shadow-gray-500'>
           
           <h1 className='text-black font-semibold text-xl  text-center'>Verify your Email</h1>
          
            {res && <p className='bg-pink-500 text-center px-2 py-2 rounded-lg text-[13px] text-white'>{res}</p>}

             <div>
            <input type="email"
             placeholder='Email'
            className='border-1 px-3 py-2 rounded text-[14px] shadow-md shadow-gray-300 w-full focus:outline-none focus:ring-1 focus:ring-blue-500'
            {...register('email',{required : 'Email is required',pattern:{value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:'Enter a valid Email'}})}
            />

            {errors.email && <p className='text-[13px] text-red-500 mt-1'>{errors.email.message}</p>}
            </div>

  <button disabled={loading} type="submit"   className={` text-white py-2 rounded-lg 
               bg-blue-500 hover:bg-blue-600 ${!isValid || loading ? 'cursor-not-allowed' : ''}  }`}>{loading ? 'verifying' : 'Verify'}</button>
         
        </form>

      
    </div>
  )
}

export default Forgot
