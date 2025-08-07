
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { DeleteCart } from '../store/Cart';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Payment = () => {

  const token = useSelector((state)=>state.auth.auth.jwtToken)
  const orders = useSelector((state)=>state.auth.orders);
  const totalPrice = useSelector((state)=> state.cart.totalAmount);
  const dispatch = useDispatch();
  const navigate =useNavigate();
    
    useEffect(() => {
    const loadRazorpayScript = () => {
      return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
      });
    };

    const initPayment = async () => {
      const res = await loadRazorpayScript();

      if (!res) {
        alert("Failed to load Razorpay SDK");
        return;
      }

      const options = {
        key: orders.key, // Use your test key here
        amount: totalPrice.toFixed(2)*100, // Amount in paise (500 INR)
        currency: "INR",
        name: "Hitansh-Mart",
        description: "React Razorpay Test",
        image: "https://yourlogo.url/logo.png",
        handler: async function (response) {

          alert("Payment Successful!");
          console.log(response);
          dispatch(DeleteCart());

          await axios.post("https://decode007-1.onrender.com/order/paymentId/orderId",{},{
            params:{
              paymentId:response. razorpay_payment_id,
              orderId:orders.order_id
            },
            headers:{
              Authorization: `Bearer ${token}`
            }
          })

          navigate("/home");
        

        },
        prefill: {
          name: orders.username,
          email: orders.email,
          contact: 686797357,
        },
        theme: {
          color: "#3399cc",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    };


    initPayment();
  }, []);

   
  return (
    <div className='text-lg font-bold text-center m-20'>
      Redirecting to Payment Gateway..........
    </div>
  )
}

export default Payment
