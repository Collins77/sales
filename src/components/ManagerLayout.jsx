import React from 'react'
import Sidebar from './Sidebar'
import ManagerNav from './ManagerNav'
import Footer from './Footer'

const ManagerLayout = ({children}) => {
  return (
    <div className='flex w-full'>
        <Sidebar />
        <div className='w-full'>
            <ManagerNav />
            <div className='w-full'>
                {children}
            </div>
            <Footer />
        </div>
        
    </div>
  )
}

export default ManagerLayout