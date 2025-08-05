import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp,faSearch } from '@fortawesome/free-solid-svg-icons'
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';


const Filter = ({searchParams,setSearchParams}) => {

  const[sortBy,setSortBy] = useState(null);
  const[category,setCategory] = useState('');
  const[keyword,setKeyword] = useState('');


  function handleClick(){

      let newSort;

      if(sortBy == null) newSort = "asc"; 
     else if(sortBy === "asc") newSort = "desc";
     else  newSort = "asc";
      
      setSortBy(newSort);
      console.log(newSort);
      setSearchParams({ ...Object.fromEntries(searchParams),sortBy:newSort});
    
     
  }
  function handleChange(e){
      
      if(e.target.value === ""){

         searchParams.delete('category');
         setCategory("");
          setSearchParams(searchParams);
          return;
      }
      setCategory(e.target.value);
      setSearchParams({ ...Object.fromEntries(searchParams),category:e.target.value});
      console.log(e.target.value);
  }

  function handleKeyword(e){

     if(e.target.value === ""){
        
         searchParams.delete('keyword');
         setKeyword("");
         setSearchParams(searchParams);
         return;
      }
     
      setKeyword(e.target.value);
      console.log(e.target.value);
      setSearchParams({ ...Object.fromEntries(searchParams),keyword:e.target.value});
  }

  
  function handleFilter(){
    
    setCategory("All");
    setKeyword("");
    setSortBy(null);
    setSearchParams({pageNo:1,pageSize:6});
  }

  

  return (
    <div className='flex justify-between mb-4'>

      <div className='relative'>
        <input value={keyword} onChange={handleKeyword}type="text" placeholder='Search Products' className='text-xs w-42 h-7 pl-4 border-2 border-solid border-blue-200 font-semibold'/>
        <FontAwesomeIcon icon={faSearch} className='text-gray-400 absolute top-2 right-2 text-sm'  />
      </div>

      <div className='flex gap-4'>
        
        <select onChange={handleChange}className='text-xs border-1 w-20 h-7 pl-1' value={category}>
          <option value="">All</option>
          <option value="Audio">Audio</option>
          <option value="Mobile">Mobile</option>
          <option value="Gaming">Gaming</option>
          <option value="Tv">Tv</option>
          <option value="Laptop">Laptop</option>
          <option value="Appliance">Appliance</option>

        </select>
        <button onClick={handleClick}className='rounded bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs w-18 h-7'>
          SortBy
          {
            sortBy == null ? (
                    <h1></h1>
            ) :(
                    <FontAwesomeIcon icon={sortBy === "asc" ? faArrowUp : faArrowDown} className='ml-1'/>
            )
        
          
         }
          </button>

          <button onClick={handleFilter}className='bg-purple-500 w-18 h-7 text-xs text-white hover:bg-purple-600 rounded'>Clear Filter</button>

      </div>
      
    </div>
  )
}

export default Filter

