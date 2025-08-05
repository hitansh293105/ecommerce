import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import axios from 'axios';

const SignUp = () => {

    const[res,setResult] = useState('');
    const navigate = useNavigate();
    const[loading,setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState : {errors,isValid}
    } = useForm({mode : 'onChange'});

    const formSubmit = async (data) =>{

        setLoading(true);
        console.log(data);
          
     try{

     const response =  await axios.post("http://localhost:8080/api/user/signUp",{

            name:data.name,
            email:data.email,
            password:data.password
        });

         reset();

         navigate("/login");


    }
    catch(error){
        
        console.log(error);
        console.log(error.response);
        console.log(error.response.data);
        setResult(error.response.data + "    " + " Signup again");
        setTimeout(() => setResult(''), 1000000000);
        
    }

    setLoading(false);

    }

  return (
    <div className='min-h-screen flex justify-center items-center'>

        <form onSubmit={handleSubmit(formSubmit)}className='flex flex-col  max-w-sm w-full space-y-5 p-6 rounded-xl shadow-gray-500 shadow-md'>
            <h1 className='text-center text-xl font-semibold'>Sign Up</h1>
             
             {res && <p className='text-[13px] bg-pink-500 text-center px-2 py-2 rounded-lg  text-white'>{res}</p>}
            
            <div>
            <input type="text" 
                  placeholder='Name'
                  className='border-1 px-3 py-2 rounded text-black text-[14px] w-full shadow-md shadow-300
                             focus:outline-none focus:ring-1 focus: ring-blue-500'
                             {...register('name',{required:'Name is required'})}/>

               {errors.name && <p className='text-red-500 mt-1 text-[13px]'>{errors.name.message}</p>} 
               </div> 

                          
             
             <div>
            <input   type="email" 
                     placeholder='Email' 
                     className='border-1 px-3 py-2 rounded text-black text-[14px] w-full  shadow-md shadow-300
                                 focus:outline-none focus:ring-1 focus: ring-blue-500'
                     {...register('email',{required:'Email is required',
                                          pattern: {
                                                       value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                       message: "Enter a valid email address"} })}/>

              {errors.email && <p className='text-red-500 mt-1 text-[13px]'>{errors.email.message}</p>} 
              </div>

                                                          
                                                   
             <div>
             <input type="password" 
                    placeholder='Password' 
                    className='border-1 px-3 py-2 rounded text-black text-[14px] w-full shadow-md shadow-300
                                focus:outline-none focus:ring-1 focus: ring-blue-500 '
                    {...register('password',{required:' Password is required',minLength :{value : 5,message:'Password must be atleast 5'}})}/>

              {errors.password && <p className='text-red-600 mt-1 text-[13px]'>{errors.password.message}</p>}   
             </div>
          
          
            <button disabled={loading} type="submit"  className={` text-white py-2 rounded-lg 
               bg-blue-500 hover:bg-blue-600 ${!isValid || loading ? 'cursor-not-allowed' : ''}  }`}
                >{loading ? 'SigningUp' : 'Signup'}</button>

            <div className='flex justify-center space-x-2 text-[14px] text-gray-500'>
                <span>Already Have an Account ?</span>
                <Link className = 'hover:border-b-1 hover: border-blue-500 hover:text-blue-500' to="/login">Signin</Link>
            </div>
            
        </form>
      
    </div>
  )
}

export default SignUp
