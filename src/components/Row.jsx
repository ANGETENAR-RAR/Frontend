import React, { useEffect, useState } from 'react'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
 import axios from 'axios'
import Movielist from './Movielist';

const Row = ({title, fetchURL, rowID}) => {
    const [movies, setMovies] = useState([]);
   

    useEffect(()=>{
        axios.get(fetchURL).then((response)=>{
            setMovies(response.data.results)
        })
    },[fetchURL])

    const slideLeft = ()=>{
        var slide = document.getElementById('slider' + rowID);
        slide.scrollLeft = slide.scrollLeft - 800;
    }
    const slideRight = ()=>{
        var slide = document.getElementById('slider' + rowID);
        slide.scrollLeft = slide.scrollLeft + 800;
    }

  return (
    <>
    <h2 className='text-white font-bold p-4 md:text-xl'>{title}</h2>
    <div className='relative flex items-center group'>
        <MdChevronLeft onClick={slideLeft} className='bg-white w-[40px] h-[40px] rounded-full absolute opacity-50 hidden hover:opacity-100 cursor-pointer z-10 group-hover:block' />
        <div id={'slider' + rowID} className='w-full left-0 h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
            {movies.map((item,id) => {
             return <Movielist key={id} item={item} />
            })}
        </div>
        <MdChevronRight onClick={slideRight} className='bg-white w-[40px] h-[40px] right-0 hidden rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block' />

    </div>
    </>
  )
}

export default Row