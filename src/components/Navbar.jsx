import React from 'react'
import { MdMessage } from "react-icons/md";

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-[70px] shadow-md w-full bg-white px-[40px] sticky top-0'>
      <div>
        <h1 className='text-xl font-bold'>Sales</h1>
      </div>
      <div>
        <ul className='flex items-center gap-4 text-sm'>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/sales">Record Sale</a>
          </li>
          <li>
            <a href="/reports">Reports</a>
          </li>
        </ul>
      </div>
      <div className='flex items-center gap-3'>
        <div className='bg-blue-100 p-1 rounded-lg'>
          <p>Points: 28</p>
        </div>
        <div className='rounded-full p-2 bg-orange-100 hover:bg-orange-400 cursor-pointer flex items-center justify-center'>
          <MdMessage />
        </div>
        <div className='rounded-full p-3 bg-gray-300 text-black font-bold flex items-center justify-center'>
          <h1>CM</h1>
        </div>
      </div>
    </div>
  )
}

export default Navbar