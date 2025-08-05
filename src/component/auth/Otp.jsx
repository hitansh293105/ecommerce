import React, { useEffect } from 'react'
import { useState,useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'

const Otp = () => {

  const[input,setInput] = useState(Array(4).fill(''))
  const inputRef = useRef([]);
  const [seconds,setSeconds] = useState(59);
  const [iscomplete,setIsComplete] = useState(false);
  const[res,setResult] = useState('');
  const[loading,setLoading] = useState(false);

 const location = useLocation(); 
 const email = location.state?.email;
 const navigate = useNavigate();
  


  useEffect(()=>{
     
    inputRef.current[0].focus();

  },[])

    useEffect(() => {
  if (seconds <= 0) {

    return; 
  }

  const timer = setInterval(() => {

    setSeconds(prev => prev - 1);

    console.log(seconds);

  }, 1000);

  return () => clearInterval(timer); 
}, [seconds]);


   const handleResendCode =async () => {

      setSeconds(59);
       
    const response = await axios.post("http://localhost:8080/api/user/resend/code",{
        username:email
    })
      console.log(response);

       
  
   }



  const handleChange = (e,index) =>{

    if(isNaN(e.target.value)) return;

    const newOtp = [...input];

    newOtp[index] = e.target.value.slice(-1);

    setInput(newOtp);

    inputRef.current[index+1]?.focus();

    setIsComplete(newOtp.join(''));
      
  }

  const handleKeyDown = (e,index) =>{

       
        const newOtp = [...input];
 
        if(e.key === 'Backspace'){

            if(e.target.value){

  
               newOtp[index] = '';
               setInput(newOtp);
            }

            else{
                 
                 inputRef.current[index-1]?.focus();
                 newOtp[index-1] = '';
                 setInput(newOtp);
            }
        } 
        
        setIsComplete(newOtp.join(''));
      
  }

  const handleSubmit = async () =>{

      setLoading(true);
      console.log(email);
      console.log(iscomplete);
       try{

      const response = await axios.get("http://localhost:8080/api/user/verify/code",{
        params:{
          email:email,
          otp:iscomplete
        }
       })
          console.log(response);
          navigate("/password", { state: { email:email } })
      }
      catch(err){

        console.log(err);
        setResult(err.response.data);
        setTimeout(()=>setResult(''),8000);
      }

      setLoading(false);
    
  }

  return (
    <div className='min-h-screen flex justify-center items-center'>

       <div className=' max-w-sm w-full shadow-md shadow-gray-500 p-6'>
             
              <h1 className=' text-center text-xl font-semibold mb-5'>Verify otp</h1>

             {res && <p className='text-[13px] bg-pink-500 text-center px-2 py-2 rounded-lg mb-3 text-white'>{res}</p>}

              <div  className='flex justify-between'>
                 <button  disabled= {seconds != 0} onClick ={handleResendCode} className={`text-xs border-b-1 ${seconds == 0 ?  'text-blue-500 hoer:bg-blue-600'
                   : 'text-gray-600 cursor-not-allowed'}`}>Resend code</button>

                 <span className='text-[13px]  text-gray-700'>{`Time remaining : 00:${seconds < 10 ? `0${seconds}` : seconds}`}</span>
                 
              </div>

           { input.map((val,index) => (

                 <input type="text" 
                         key={index}
                         value = {val}
                         onChange = {(e) => handleChange(e,index)}
                         onKeyDown={(e) => handleKeyDown(e,index)}
                         ref = { el  => inputRef.current[index] = el}
                         className='border-1 w-10 h-9 pl-3.5 m-4 focus:outline-none focus:ring-1 focus:ring-blue-500' />
            ))}

              
              <button onClick={handleSubmit} disabled={iscomplete.length != 4 || seconds==0 || loading} className= {`w-full bg-blue-500 hover:bg-blue-600 text-white h-9 rounded-lg mt-5  ${iscomplete.length !=4 || seconds == 0 || loading ? 'cursor-not-allowed' : ''}`}>{loading ? 'Submitting' :'Submit'}</button>

       </div>
        
      
    </div>
  )
}

export default Otp
