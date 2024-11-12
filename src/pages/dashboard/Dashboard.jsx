import React, { useState } from 'react'
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
import { FaArrowRightLong } from "react-icons/fa6";

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



const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('today');
    // Sample data for Monthly Sales (Bar Chart)
    const monthlySalesData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Monthly Enrollments",
                data: [300, 400, 350, 500, 450, 700, 650, 550, 600, 750, 800, 900],
                backgroundColor: "rgba(54, 162, 235, 0.6)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1
            }
        ]
    };

    return (
        <div className='bg-gray-50 w-full px-[10px] py-[10px] h-[85vh]'>
            <div className='bg-white px-[20px] py-[10px] mb-2'>
                <div className='grid grid-cols-4 gap-3'>
                    <div className='border p-2 rounded-md'>
                        <h1 className='text-sm text-gray-400'>Total Agents</h1>
                        <p className='font-bold text-2xl'>124</p>
                        <a className='underline text-gray-400 flex gap-1 items-center' href="/agents">
                            View Agents
                            <FaArrowRightLong />
                        </a>
                    </div>
                    <div className='border p-2 rounded-md'>
                        <h1 className='text-sm text-gray-400'>Total Enrollments</h1>
                        <p className='font-bold text-2xl'>2400</p>
                        <a className='underline text-gray-400 flex gap-1 items-center' href="/reports">
                            View Reports
                            <FaArrowRightLong />
                        </a>
                    </div>
                    <div className='border p-2 rounded-md'>
                        <h1 className='text-sm text-gray-400'>Enrollments Today</h1>
                        <p className='font-bold text-2xl'>124</p>
                        <a className='underline text-gray-400 flex gap-1 items-center' href="/agents">
                            View Agent Reports
                            <FaArrowRightLong />
                        </a>
                    </div>
                </div>
            </div>
            <div className='bg-white px-[20px] py-[10px]'>
                <div className='flex gap-4'>
                    <div className='w-[40%] p-2 shadow-md rounded-md h-[350px]'>
                        <h1 className='font-bold'>Top Performing Agents</h1>
                        <div className='flex gap-4 border-b border-gray-200 mb-4'>
                            <button
                                className={`py-2 px-4 ${activeTab === 'today' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
                                onClick={() => setActiveTab('today')}
                            >
                                Today
                            </button>
                            <button
                                className={`py-2 px-4 ${activeTab === 'month' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
                                onClick={() => setActiveTab('month')}
                            >
                                This Month
                            </button>
                        </div>
                        <div>
                            {activeTab === 'today' && (
                                <div>
                                    <p>Displaying top performing agents for today...</p>
                                    {/* Add content for today's top performing agents here */}
                                </div>
                            )}
                            {activeTab === 'month' && (
                                <div>
                                    <p>Displaying top performing agents for this month...</p>
                                    {/* Add content for this month's top performing agents here */}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='w-[60%]'>
                        <Bar height={170} data={monthlySalesData} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard