import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faCheck, faCity, faEnvelopeOpenText, faGlobe, faMap, faRoad, faTrash ,faEdit} from '@fortawesome/free-solid-svg-icons'
import { deleteAddress, selectAddress } from '../store/storeDetailsReducer'
import axios from 'axios'
import Backdrop from './Backdrop'

const AddressSelection = () => {

  const token  = useSelector((state)=>state.auth.auth.jwtToken)
  const [modal,setModal] = useState(false)
  const [data,setData] = useState(null)

  
   
  const select = useSelector((state) => state.auth.selectedAddress.id)
  const dispatch = useDispatch();

  const address = useSelector((state) => state.auth.address)

  const handleRemove = async (id) =>{

    const response =  axios.delete("https://decode007-1.onrender.com/api/user/delete/Address",{

         params:{
            addressId:id
         },
                                   
          headers:{
              Authorization : `Bearer ${token}`
          
        }
      })

      console.log(response);

      dispatch(deleteAddress(id));
          

  }

  const handleEdit = (value) =>{

    console.log(value);
    setModal(true);
    setData(value);

  }

  return (
   <>
    <h1 className='text-center font-bold text-lg mb-5 mt-20'>Select Address</h1>
  
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5'>
 
      {address.map((value,index) =>(

         <div key={value.id} onClick={() => dispatch(selectAddress(value))} className='p-4 shadow-md   shadow-gray-300 bg-gray-50'>
             
          
            <div className='flex justify-between items-center'>
            
            <div className='flex items-center space-x-2'>

            <FontAwesomeIcon icon={faGlobe}/>
            <p className='text-[15px]  text-gray-700'>{value.country}</p>
             {select == value.id && 
            <FontAwesomeIcon className='text-white bg-green-400  border-2 p-0.5 rounded-full ' icon={faCheck}/>
            }

             </div>

             <FontAwesomeIcon onClick={(e) => {e.stopPropagation()
                                               handleRemove(value.id)
             }} className='text-red-500'icon={faTrash}/>

              </div>

              <div className='flex justify-between items-center'>
             
             <div className='flex items-center space-x-1.5'>
             <FontAwesomeIcon icon={faMap}/>
            <p className=' text-[15px]  text-gray-700' >{value.state}</p>
             </div>

             <FontAwesomeIcon  onClick={(e)=>{e.stopPropagation()
                                            handleEdit(value)}
             }className='text-green-500'icon={faEdit}/>

              </div>
              
              <div className='flex items-center space-x-1.5'>
             <FontAwesomeIcon icon={faCity}/>
            <p className=  'text-[15px]  text-gray-700'>{value.city}</p>
             </div>

              <div className='flex items-center space-x-1.5'>
             <FontAwesomeIcon icon={faRoad}/>
            <p className= 'text-[15px]  text-gray-700'>{value.street}</p>
             </div>

              <div className='flex items-center space-x-1.5'>
             <FontAwesomeIcon icon={faBuilding}/>
            <p className= 'text-[15px]  text-gray-700'>{value.buildingName}</p>
             </div>
              
              <div className='flex items-center space-x-1.5'>
             <FontAwesomeIcon icon={faEnvelopeOpenText}/>
            <p className='text-[15px]  text-gray-700'>{value.postalCode}</p>
             </div>
            
            
           
          </div>
      ))
      
      }

    </div>

     {modal && <Backdrop address={data} setdata={setData} setmodal={setModal}/>
     }


    </>
  )
}

export default AddressSelection
