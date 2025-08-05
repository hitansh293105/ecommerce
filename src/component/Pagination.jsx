import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Pagination = ({size,setSearchParams,searchParams}) => {
     
    function handlePageNo(e){

        if(e.currentTarget.value == "left"){

            const currentPage = Number(searchParams.get('pageNo'));
            console.log(currentPage);
            const prevPage = Math.max(currentPage-1,1);
            setSearchParams({ ...Object.fromEntries(searchParams),pageNo:prevPage});

        }

        else if(e.currentTarget.value == "right"){

              const currentPage = Number(searchParams.get('pageNo'));
            const nextPage = Math.min(currentPage+1,size);
            setSearchParams({ ...Object.fromEntries(searchParams),pageNo:nextPage});


        }

       else setSearchParams({ ...Object.fromEntries(searchParams),pageNo:e.currentTarget.value});
      
        
    }
     
  return (

    <>

    {size == 0 ? ('') : (<div className='flex justify-center m-9'>

         <button className='text-gray-300' value = "left" onClick={handlePageNo}>
       <FontAwesomeIcon  icon={faChevronLeft} /> 
        </button>

        {
        
        Array.from({ length: size }).map((_, index) => (

        <button onClick={handlePageNo}  className='border border-gray-300 w-full md:w-[5%] h-9 m-1 bg-gray-300 hover:bg-gray-400' value={index+1} key={index+1}>{index + 1}</button>

          ))

       }

        <button className='text-gray-300'value="right" onClick={handlePageNo} >
       <FontAwesomeIcon  icon={faChevronRight} /> 
      </button>
      
    </div>
      )}

      </>
  )
}

export default Pagination
