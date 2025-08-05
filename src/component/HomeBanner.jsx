import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import emptyCart from '../assets/empty-cart.png'

const HomeBanner = () => {
  const [abc, setAbc] = useState([]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.in/api/products?limit=6");
        setAbc(response.data.products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchProduct();
  }, []);

  console.log("Products array:", abc);

  return (
     
        <Slider {...settings}>
 
          {abc.map(product => (
             <>
            <div key={product.id} className="flex justify-center items-center mt-25 bg-gradient-to-r from-[#260141] via-[#9131f2] to-[#d384e4]
 h-[300px]">
                
              <div className="flex justify-center gap-9">

               <div className="w-[35%] flex flex-col gap-3">

                <p className=" text-white text-xl font-bold line-clamp-3">{product.title}</p>
                <p className="text-[11px]  text-white text-semibold line-clamp-2">{product.description}</p>
                <button className=" text-[13px] bg-gradient-to-r from-red-500 to-purple-500 text-white  py-1 rounded-lg w-[60%] md:w-[20%]">Shop now</button>

               </div>
                
               <div >
               <img className="w-56 h-56 rounded-full" src={product.image}/>
               </div>
               </div>

            </div>
            </>
          ))}

          
        </Slider>
     
 
  );
};

export default HomeBanner;
