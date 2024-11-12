import React from 'react'
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdOutlineDashboard } from "react-icons/md";
import { IoAnalyticsOutline, IoPersonAddOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className='w-[15%] p-2 bg-white shadow-sm h-[100vh] border-r'>
      <div className='mb-4'>
        <h1 className='font-bold text-xl'>Sales</h1>
      </div>
      <div>
        <ul>
          <li className='w-full rounded-md hover:bg-gray-100 px-2 py-1 mb-0.5'>
            <a className='text-gray-600 flex gap-2 items-center' href="/dashboard">
            <MdOutlineDashboard />
            Dashboard
            </a>
          </li>
          <h1 className='text-sm font-semibold'>Manage Agents</h1>
          <li className='w-full rounded-md hover:bg-gray-100 px-2 py-1 mb-0.5'>
            <a className='text-gray-600 flex gap-2 items-center' href="/agents">
              <TfiHeadphoneAlt />
              View Agents
            </a>
          </li>
          <li className='w-full rounded-md hover:bg-gray-100 px-2 py-1 mb-0.5'>
            <a className='text-gray-600 flex gap-2 items-center' href="/enroll-agent">
              <IoPersonAddOutline />
              Enroll Agent
            </a>
          </li>
          <h1 className='text-sm font-semibold'>Reports</h1>
          <li className='w-full rounded-md hover:bg-gray-100 px-2 py-1 mb-0.5'>
            <a className='text-gray-600 flex gap-2 items-center' href="/agents">
              <IoAnalyticsOutline />
              View Reports
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar