import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import Filter from './Filter'
import '../App.css'
import axios from 'axios';
import NotFound from './NotFound';
import Pagination from './Pagination';
import { useSearchParams } from 'react-router-dom';

const Product = () => {

  const [product, setProduct] = useState([]);
  const[searchParams,setSearchParams] = useSearchParams({pageNo:1,pageSize:6});
  const[size,setSize] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.post(`https://decode007-1.onrender.com/api/getAll?${searchParams.toString()}`);
      
        console.log(response);
        console.log(response.data);
        setProduct(response.data.content);
        setSize(response.data.totalPages);
        console.log(response.data.totalPages);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [searchParams]);
   
    
  return (
    <div className=" h-screen mx-20 my-25">

  

        <Filter searchParams={searchParams} setSearchParams={setSearchParams}/>

        {product.length ==0 ?(

           <NotFound/>

        ):
        ( 
        <ProductCard product={product} />  )
      }

      <Pagination searchParams={searchParams} setSearchParams={setSearchParams} size ={size}/>
      
    </div>
  )
}

export default Product
