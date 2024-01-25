import React, { useState } from 'react'
import {FaHeart, FaRegHeart} from 'react-icons/fa'


const Movielist = ({item}) => {
    const [like,setLike] = useState(false);
  return (
    <div className='w-[160px] sm:w-[200px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
    <div className='absolute top-0 left-0 w-full h-full hover:opacity-100 opacity-0 hover:bg-black/80 text-white'>
    <p >
               {like? <FaHeart  className='top-4 left-4 text-gray-300 absolute' /> : <FaRegHeart className='top-4 left-4 text-gray-300 absolute' /> }
           </p>
           <p className='white-space-normal h-full flex justify-center items-center text-sm font-bold'>{item?.title}</p>
          
       </div>
       <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w-500/${item?.backdrop_path}`} alt={item.title} />
      
   </div>
  )
}

export default Movielist