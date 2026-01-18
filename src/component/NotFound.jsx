import React from 'react'

const NotFound = ({loading,products}) => {
  return (
    <div className='flex justify-center items-center h-1/2'>

        {loading && <h1 className='text-lg font-bold'>Loading Products...</h1>}
        {products.length == 0 && <h1 className='text-lg font-bold'>No Products Found</h1> }

       
      
    </div>
  )
}

export default NotFound
