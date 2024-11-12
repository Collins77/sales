import React, { useState } from 'react'
import badge from '../assets/badge.png'
import { Line, Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Home = () => {
    const [activeTab, setActiveTab] = useState('daily');

    const dailySalesData = {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        datasets: [
            {
                label: "Daily Sales",
                data: [12, 19, 10, 15, 22, 18, 25, 23, 17, 20],
                fill: false,
                backgroundColor: "rgba(75, 192, 192, 0.6)",
                borderColor: "rgba(75, 192, 192, 1)"
            }
        ]
    };

    // Sample data for Monthly Sales (Bar Chart)
    const monthlySalesData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Monthly Sales",
                data: [300, 400, 350, 500, 450, 700, 650, 550, 600, 750, 800, 900],
                backgroundColor: "rgba(54, 162, 235, 0.6)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1
            }
        ]
    };


    return (
        <div className='w-full px-[30px] py-[20px] bg-slate-50'>
            <div className='flex gap-5'>
                <div className='bg-white shadow-sm w-[30%] h-[400px] p-2 rounded-sm'>
                    <div className='flex items-center justify-between gap-3 border-b pb-2'>
                        <div className='flex items-center gap-3'>
                            <div className='h-[50px] w-[50px] rounded-full bg-gray-200 flex items-center justify-center'>
                                <h1 className='font-bold'>CM</h1>
                            </div>
                            <div>
                                <h1 className='text-lg font-bold'>Collins Muema</h1>
                                <p className='text-gray-400 text-sm'>Sales Agent</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h1 className='text-gray-400'>Points Score</h1>
                            <div className='h-[60px] w-[60px] border-[10px] border-yellow-300 rounded-full flex items-center justify-center'>
                                <h1 className='font-bold'>56</h1>
                            </div>
                        </div>
                    </div>
                    <div className='border-b pb-3 border-dashed'>
                        <h1 className='font-semibold mb-2'>Perfomance Rating:</h1>
                        <div className='flex items-center justify-between'>
                            <div class="flex items-center">
                                <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            </div>
                            <div>
                                <p className='text-sm text-gray-400'>Good</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className='font-semibold mb-4'>Badges</h1>
                        <div className='grid grid-cols-6'>
                            <img src={badge} alt="" className='w-[40px] h-[40px] mb-2'/>
                            <img src={badge} alt="" className='w-[40px] h-[40px] mb-2'/>
                            <img src={badge} alt="" className='w-[40px] h-[40px] mb-2'/>
                            <img src={badge} alt="" className='w-[40px] h-[40px] mb-2'/>
                            <img src={badge} alt="" className='w-[40px] h-[40px] mb-2'/>
                            <img src={badge} alt="" className='w-[40px] h-[40px] mb-2'/>
                            <img src={badge} alt="" className='w-[40px] h-[40px] mb-2'/>
                            <img src={badge} alt="" className='w-[40px] h-[40px] mb-2'/>
                            <img src={badge} alt="" className='w-[40px] h-[40px] mb-2'/>
                            <img src={badge} alt="" className='w-[40px] h-[40px] mb-2'/>
                            <img src={badge} alt="" className='w-[40px] h-[40px] mb-2'/>
                            <img src={badge} alt="" className='w-[40px] h-[40px] mb-2'/>
                        </div>
                    </div>
                </div>
                <div className='bg-white shadow-sm w-[68%] h-[600px]'>
                    <div className='grid grid-cols-3 p-4 gap-2 pb-2 border-b border-gray-200 border-dotted'>
                        <div className='border border-gray-300 p-2 rounded-sm'>
                            <div className='flex flex-col gap-2'>
                                <p className='text-gray-400 text-sm'>Enrollments Today</p>
                                <h1 className='text-3xl font-bold'>4</h1>
                                <div>
                                    <div class="w-full bg-gray-200 rounded-full h-1.5">
                                        <div class="bg-red-600 h-1.5 rounded-full dark:bg-red-500" style={{ width: "45%" }}></div>
                                    </div>
                                    <p className='text-sm text-gray-400'>Progress to daily target: <span className='text-red-400'>30%</span></p>
                                </div>
                            </div>
                        </div>
                        <div className='border border-gray-300 p-2 rounded-sm'>
                            <div className='flex flex-col gap-2'>
                                <p className='text-gray-400 text-sm'>Enrollments This Month</p>
                                <h1 className='text-3xl font-bold'>24</h1>
                                <div>
                                    <div class="w-full bg-gray-200 rounded-full h-1.5">
                                        <div class="bg-yellow-600 h-1.5 rounded-full dark:bg-yellow-500" style={{ width: "60%" }}></div>
                                    </div>
                                    <p className='text-sm text-gray-400'>Progress to monthly target: <span className='text-yellow-400'>60%</span></p>
                                </div>
                            </div>
                        </div>
                        <div className='border border-gray-300 p-2 rounded-sm'>
                            <div className='flex flex-col gap-2'>
                                <p className='text-gray-400 text-sm'>Total Enrollments</p>
                                <h1 className='text-3xl font-bold'>246</h1>
                                <div>
                                    {/* <div class="w-full bg-gray-200 rounded-full h-1.5">
                                        <div class="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500" style={{ width: "45%" }}></div>
                                    </div> */}
                                    <p className='text-sm text-gray-400'>Perfomance: <span className='text-green-400'>Excellent</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='p-2'>
                        <h1>Graphical Analysis</h1>
                        <div className='flex gap-4 border-b border-gray-200 mt-2'>
                            {/* Tabs */}
                            <button
                                className={`py-2 px-4 ${activeTab === 'daily' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
                                onClick={() => setActiveTab('daily')}
                            >
                                Daily Sales(Nov)
                            </button>
                            <button
                                className={`py-2 px-4 ${activeTab === 'monthly' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
                                onClick={() => setActiveTab('monthly')}
                            >
                                Monthly Sales
                            </button>
                        </div>
                        <div className='mt-4'>
                            {activeTab === 'daily' && (
                                <div>
                                    <h2 className='text-lg font-semibold'>Daily Sales this Month</h2>
                                    <Line data={dailySalesData} height={100} />
                                </div>
                            )}
                            {activeTab === 'monthly' && (
                                <div>
                                    <h2 className='text-lg font-semibold'>Monthly Sales this Year</h2>
                                    <Bar height={100} data={monthlySalesData} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home