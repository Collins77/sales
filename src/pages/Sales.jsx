import React from 'react'
import { MdOutlineEdit } from "react-icons/md";

const Sales = () => {
    return (
        <div className='px-[20px] py-[10px] bg-slate-50 w-full'>
            <div className='bg-white shadow-sm h-[80vh] w-full p-2'>
                <div className='border-b pb-4 mb-3'>
                    <h1 className='text-2xl font-bold'>Sales</h1>
                </div>
                <div className='flex gap-4'>
                    <div className='w-[50%]'>
                        <div className='mb-2 flex justify-between gap-2'>
                            <div className='flex flex-col gap-2 w-[50%]'>
                                <label htmlFor="" className='text-gray-400 text-sm'>Filter by period</label>
                                <select name="" id="" className='border rounded-md px-2 py-1'>
                                    <option value="">All</option>
                                    <option value="">Sales Today</option>
                                    <option value="">This Week</option>
                                    <option value="">This Month</option>
                                </select>
                            </div>
                            <div className='flex flex-col gap-2 w-[50%]'>
                                <label htmlFor="" className='text-gray-400 text-sm'>Filter by date</label>
                                <input type="date" className='border rounded-md px-2 py-1' />
                            </div>
                        </div>
                        <table className="w-full text-left text-sm font-light">
                            <thead className="border-b font-medium dark:border-neutral-500">
                                <tr>
                                    <th scope="col" className="px-6 py-4">#</th>
                                    <th scope="col" className="px-6 py-4">Enrollments</th>
                                    <th scope="col" className="px-6 py-4">Date</th>
                                    <th scope="col" className="px-6 py-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                    <td className="whitespace-nowrap px-6 py-4">24</td>
                                    <td className="whitespace-nowrap px-6 py-4">24/10/2024</td>
                                    <td className="whitespace-nowrap px-6 py-4">
                                        <MdOutlineEdit />
                                    </td>
                                </tr>
                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                    <td className="whitespace-nowrap px-6 py-4">24</td>
                                    <td className="whitespace-nowrap px-6 py-4">24/10/2024</td>
                                    <td className="whitespace-nowrap px-6 py-4">
                                        <MdOutlineEdit />
                                    </td>
                                </tr>
                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                    <td className="whitespace-nowrap px-6 py-4">24</td>
                                    <td className="whitespace-nowrap px-6 py-4">24/10/2024</td>
                                    <td className="whitespace-nowrap px-6 py-4">
                                        <MdOutlineEdit />
                                    </td>
                                </tr>
                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                    <td className="whitespace-nowrap px-6 py-4">24</td>
                                    <td className="whitespace-nowrap px-6 py-4">24/10/2024</td>
                                    <td className="whitespace-nowrap px-6 py-4">
                                        <MdOutlineEdit />
                                    </td>
                                </tr>
                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                    <td className="whitespace-nowrap px-6 py-4">24</td>
                                    <td className="whitespace-nowrap px-6 py-4">24/10/2024</td>
                                    <td className="whitespace-nowrap px-6 py-4">
                                        <MdOutlineEdit />
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                    <form action="" className='shadow-md rounded-sm bg-white w-[50%] p-4'>
                        <div className='mb-4 border-b pb-4'>
                            <h1 className='font-bold'>Record Enrollment</h1>
                        </div>
                        <div className='flex flex-col gap-2 mb-3'>
                            <label htmlFor="" className='text-gray-400 text-sm'>Date</label>
                            <input type="date" className='border rounded-md p-2 outline-none' />
                        </div>
                        <div className='flex flex-col gap-2 mb-3'>
                            <label htmlFor="" className='text-gray-400 text-sm'>No. of Enrollments</label>
                            <input type="number" className='border rounded-md p-2 outline-none' name="" id="" />
                        </div>
                        <div>
                            <button className='bg-blue-600 px-2 py-1 rounded-md text-white'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Sales