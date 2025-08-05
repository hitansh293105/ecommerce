import React from 'react'
import '../App.css'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../store/Cart';

const ProductCard = ({product}) => {

  const isLogged = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (product) =>{

     if(!isLogged) navigate("/login");

     console.log(product);

     dispatch(addToCart(product));

      
  }
  return (
    
     <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 '>

          { product.map(product =>(
              
                 <div className='p-1.5  border border-red-100 shadow-md shadow-blue-600 rounded-xl ' key={product.productId}>

              <img  className ='w-36 h-36 mx-auto mt-2 hover:scale-110'  src={product.img}/>
              <h3 className='mt-1 mb-4 font-bold text-xs text-center line-clamp-1 leading-snug'>{product.productName}</h3>
              <p className='text-[11px] mx-4 mb-3 line-clamp-2 overflow-hidden'>{product.description}</p>
               <span className='text-gray-500 line-through text-xs block pl-3'>{`₹${product.price}`}</span>
               <span className='text-md font-bold pl-3 text-blue-500'>{`₹${product.specialPrice}`}</span>
               
               
                {product.quantity>0 ? (<button onClick={()=>handleSubmit(product)} className="text-xs w-28 h-8 ml-13 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
            <FontAwesomeIcon className='mr-1'icon={faShoppingCart}  />
        Add to Cart
         </button> ) : (<button className='text-xs w-28 h-8 ml-13 text-white bg-blue-400 rounded-lg'>Stock out</button>)}
         
          </div>


           ))}
            
            </div>

   
  


  )
}

export default ProductCard
