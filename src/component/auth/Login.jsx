// LoginForm.jsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login, logout } from '../../store/storeDetailsReducer';

export default function Login() {

  const[res,setResult] = useState('');
  const[loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors,isValid },
  } = useForm({
    mode: 'onChange',
  });

 
  const formSubmit = async (data)=>{

    setLoading(true);

    console.log(data);

    try{

       const response = await axios.post("https://decode007-1.onrender.com/api/user/signIn",{

        username:data.email,
        password:data.password
       },
        
       )

       console.log(response.data);

       debugger

       dispatch(login(response.data));

  
       debugger

       navigate("/home")

       reset();
    }

    catch(error){

      debugger

     console.log(error.response);

     debugger

     setResult(error.response.data + "  " + "Invalid email or password " );

     setTimeout(() => setResult(''),8000);

    }
    
    setLoading(false);

  }

  return (

    <div className='min-h-screen flex justify-center items-center'>

        <form onSubmit={handleSubmit(formSubmit)}className=' w-full  p-6 flex flex-col space-y-5 rounded-lg shadow-gray-500 shadow-sm  max-w-sm'>

            <h1 className='text-black text-xl text-center font-semibold  '>Login</h1>

            {res && <p className='bg-pink-500 text-center px-2 py-2 rounded-lg  text-white text-[13px]'>{res}</p>}

            <div>
            <input  type="email"
                    placeholder='Email' 
                    className='font-sans border-1 px-3 py-2 rounded
           text-[14px]  shadow-gray-300 shadow-sm w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition'
                    {...register('email',{required:'Email is required',
                                          pattern: {
                                                       value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                       message: "Enter a valid email address",} })}/>
                                                       
              {errors.email && <p className='text-red-600 m-0 p-0 mt-1 text-[13px]'>{errors.email.message}</p>}
              </div>                                       
             
             <div>
            <input 
                      type="password" 
                      placeholder='Password' 
                      className='font-sans border-1 px-3 py-2 rounded text-[14px] w-full
                                shadow-sm shadow-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500' 
                      {...register('password',{required:'Password is required',minLength:{value:5,message:"Minimum length should be atleast 5"}})}          />

                      {errors.password && <p className='text-red-600 m-0 p-0 mt-1 text-[13px]'>{errors.password.message}</p>}


                      </div>

                  

            <button disabled={loading} type="submit"
            className={` text-white py-2 rounded-lg 
               bg-blue-500 hover:bg-blue-600 ${!isValid || loading ? 'cursor-not-allowed' : ''}  }`}
         >Login</button>
           
            <div className='text-sm flex justify-center space-x-2 text-gray-500' >
            <Link className='hover:border-b-1 hover:border-blue-500 hover:text-blue-500' to = "/forgot" >Forgot Password ? </Link>
            <span className=' hover:border-b hover:border-blue-400 hover:text-blue-500'><Link to="/signup">SignUp</Link></span>
            </div>

        </form>
    </div>
  )
}


