import React from 'react'

const Agents = () => {
  return (
    <div className='w-full bg-slate-50 h-[85vh] px-[10px] py-[10px]'>
      <div className='bg-white px-[30px] py-[20px]'>
        <div className='flex justify-between items-center w-full border-b pb-4 mb-4 border-dashed'>
          <h1 className='font-bold text-2xl'>Agents</h1>
          <a href="/enroll-agent" className='bg-blue-500 px-2 py-1 rounded-md text-white hover:bg-blue-900'>Enroll Agent</a>
        </div>
        <div>
          <table class="w-full bg-white shadow-md rounded-md">
            <thead>
              <tr class="bg-blue-gray-100 text-gray-700">
                <th class="py-3 px-4 text-left">Full Name</th>
                <th class="py-3 px-4 text-left">Email</th>
                <th class="py-3 px-4 text-left">Enrollments</th>
                <th class="py-3 px-4 text-left">Rating</th>
                <th class="py-3 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody class="text-blue-gray-900">
              <tr class="border-b border-blue-gray-200">
                <td class="py-3 px-4">Collins Muema</td>
                <td class="py-3 px-4">collinsmuemah@gmail.com</td>
                <td class="py-3 px-4">100</td>
                <td class="py-3 px-4">Excellent</td>
                <td class="py-3 px-4">
                  <a href="/" class="font-medium text-blue-600 hover:text-blue-800">Edit</a>
                </td>
              </tr>
              <tr class="border-b border-blue-gray-200">
                <td class="py-3 px-4">Collins Muema</td>
                <td class="py-3 px-4">collinsmuemah@gmail.com</td>
                <td class="py-3 px-4">100</td>
                <td class="py-3 px-4">Excellent</td>
                <td class="py-3 px-4">
                  <a href="/" class="font-medium text-blue-600 hover:text-blue-800">Edit</a>
                </td>
              </tr>
              <tr class="border-b border-blue-gray-200">
                <td class="py-3 px-4">Collins Muema</td>
                <td class="py-3 px-4">collinsmuemah@gmail.com</td>
                <td class="py-3 px-4">100</td>
                <td class="py-3 px-4">Excellent</td>
                <td class="py-3 px-4">
                  <a href="/" class="font-medium text-blue-600 hover:text-blue-800">Edit</a>
                </td>
              </tr>
              <tr class="border-b border-blue-gray-200">
                <td class="py-3 px-4">Collins Muema</td>
                <td class="py-3 px-4">collinsmuemah@gmail.com</td>
                <td class="py-3 px-4">100</td>
                <td class="py-3 px-4">Excellent</td>
                <td class="py-3 px-4">
                  <a href="/" class="font-medium text-blue-600 hover:text-blue-800">Edit</a>
                </td>
              </tr>
              <tr class="border-b border-blue-gray-200">
                <td class="py-3 px-4">Collins Muema</td>
                <td class="py-3 px-4">collinsmuemah@gmail.com</td>
                <td class="py-3 px-4">100</td>
                <td class="py-3 px-4">Excellent</td>
                <td class="py-3 px-4">
                  <a href="/" class="font-medium text-blue-600 hover:text-blue-800">Edit</a>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Agents