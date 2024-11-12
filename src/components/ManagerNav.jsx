import React from 'react'
import { MdMessage } from 'react-icons/md'

const ManagerNav = () => {
  return (
    <div className='h-[50px] shadow-sm w-full flex items-center justify-end px-[30px]'>
        <div className='flex gap-2 items-center'>
            <MdMessage />
            <div className='bg-gray-200 h-[40px] w-[40px] rounded-full flex items-center justify-center'>
                <h1>CM</h1>
            </div>
        </div>
    </div>
  )
}

export default ManagerNav