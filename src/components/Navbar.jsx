import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4 z-[100] w-full absolute'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
        <div>
            <button className='text-white px-6 py-2'>Sign In</button>
            <button className='bg-red-600 text-white py-2 rounded cursor-pointer px-6'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar