import React from 'react'
import { useForm} from 'react-hook-form'
import { useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import axios from 'axios'
const Password = () => {

    const[loading,setLoading] = useState('');
    const navigate = useNavigate();
    const[res,setResult] = useState('');

    const location = useLocation(); 
   const email = location.state?.email;

    const{
        register,
        handleSubmit,
        formState :{errors,isValid}
    }  = useForm({mode: 'onChange'});

    const formSubmit = async (data) =>{

        setLoading(true);

        const response = await axios.post("http://localhost:8080/api/user/change/password",{
            username:email,
            password:data.password
        })

        console.log(response);

        setTimeout(() =>navigate("/login"),8000);

    }

  return (
    <div className='min-h-screen flex justify-center items-center'>

        <form onSubmit = {handleSubmit(formSubmit)}className='shadow-md shadow-gray-500 p-6 flex flex-col space-y-6 max-w-sm w-full  '>

              <h1 className='text-center text-xl '>Change Password</h1>

             <div>
            <input className='w-full  border-1 px-3 py-2 rounded text-[13px] shadow-md shadow-gray-300' 
                   type="password" 
                   placeholder='Password'
                   {...register('password',{required:'Password is required',minLength:{value:6 ,message:'Password must be atleast 6'}})}/>

                   {errors.password && <p className='text-red-500 mt-1 text-[13px]'>{errors.password.message}</p>}

            </div>

            <button className={`bg-blue-500 h-9 text-white rounded-lg hover:bg-blue-600 ${!isValid || loading ? 'cursor-not-allowed' : ''}`}>{loading ?'Submitting' :'Submit'}</button>       
              
        </form>
      
    </div>
  )
}

export default Password
