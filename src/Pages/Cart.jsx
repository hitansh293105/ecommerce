import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faTrash,faAdd,faSubtract,faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import {updateCart,removeFromCart} from '../store/Cart.js'
import emptyCart from '../assets/empty-cart.png'
import {Link} from 'react-router-dom'




const Cart = () => {

  const items = useSelector((state)=>state.cart.items);
  const rawTotalAmount = useSelector((state)=> state.cart.totalAmount);
  const dispatch = useDispatch();
  const totalAmount = parseFloat(rawTotalAmount.toFixed(2));
  const totalPrice  = (totalAmount + 40 + 100).toFixed(2);
 

  const handleInc = (productId) =>{

    dispatch(updateCart({id:productId,type:'INCREMENT'}))
           
  }

  const handleDec  = (productId) =>{

      dispatch(updateCart({id:productId,type:'DECREMENT'}))      
   
  }

  const handleRemove  = (productId) =>{

      dispatch(removeFromCart(productId)) 
   
  }

  return (

    <>

    {items.length == 0 ? (

      <div className='flex  flex-col justify-center items-center mt-12'>
        <h1 className='font-bold text-black text-2xl'>Oh no ? Your Cart is Empty</h1>
        <img className='w-52 h-52' src={emptyCart}/>
       <Link to='/product'> <button className='bg-blue-500 py-2 px-2 text-[15px] text-white rounded-lg hover:bg-blue-600'>
          <FontAwesomeIcon className='mr-1' icon={faArrowLeft}/>Continue Shopping</button></Link>
      </div>
    ) :
    ( <div className=' mx-15 my-25 '>
         
        <div className='flex items-center justify-center space-x-2 m-5'>
        <FontAwesomeIcon icon={faCartShopping}/>  
        <h1 className='text-black text-lg font-bold'>Your Cart</h1>
        </div>

         
         {items.map((product) => (
     <div key={product.productId} className="grid grid-cols-1 space-y-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center  bg-gray-100 p-3 m-2 rounded-lg ">
    
    
    <div className="flex items-center space-x-3">
      <img className="w-16 h-16 object-cover" src={product.img}  />
      <div>
        <h1 className="font-semibold text-[14px]">{product.productName}</h1>
      </div>
    </div>

  
    <div className=" text-md font-bold flex justify-center text-blue-500">
      ₹{product.specialPrice}
    </div>


    <div className='flex justify-center '>
      
      <div className='flex items-center bg-blue-500 space-x-2 p-1 rounded text-white'>
      <FontAwesomeIcon  onClick={()=>handleDec(product.productId)}className='text-[10px]' icon={faSubtract}/>
       <p>{product.quantitynew}</p>
       <FontAwesomeIcon onClick ={()=>handleInc(product.productId)} className='text-[10px]' icon={faAdd}/>
       </div>

      </div>

   
    <div className="flex justify-center text-blue-500 cursor-pointer hover:text-blue-700 text-xl ">
      <FontAwesomeIcon onClick={()=>handleRemove(product.productId)} icon={faTrash} />
    </div>

  </div>
))}
    <div className='flex justify-start  '>
    <div className=" bg-white rounded-lg shadow-md p-5 mt-5 flex flex-col space-y-4 lg:w-[50%] md:w-[60%] sm:w-[80%]">
  <h1 className="text-lg font-bold text-gray-800 border-b pb-2">Bill Details</h1>

  <div className="flex justify-between text-sm text-gray-600 text-[13px]">
    <p>Subtotal</p>
    <span>₹{totalAmount}</span>
  </div>

  <div className="flex justify-between text-sm text-gray-600 text-[13px]">
    <p>Shipping</p>
    <span>₹40</span>
  </div>

  <div className="flex justify-between text-sm text-gray-600 text-[13px]">
    <p>Tax</p>
    <span>₹100</span>
  </div>

  <div className="border-t pt-2 flex justify-between text-base font-semibold text-gray-800 text-[15px]">
    <p>Total</p>
    <span>₹{totalPrice}</span>
  </div>

  <Link to="/checkout"><button className=" bg-blue-600 hover:bg-blue-700 text-white px-2 py-2 rounded-lg text-[15px]">
    Proceed to Checkout
  </button></Link>
</div>

</div>

  

     </div>)

}
</>
  )

}

export default Cart
