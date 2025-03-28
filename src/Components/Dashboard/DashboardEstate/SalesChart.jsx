import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
    { revenue: 700 },
    { revenue: 500 },
    { revenue: 300 },
    { revenue: 600 },
    { revenue: 450 },
    { revenue: 750 },
    { revenue: 500 },
];

const SalesChart = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024); // Adjust breakpoint as needed
        };

        handleResize(); 
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="bg-white p-4  lg:border border-[#D3D3D3] mt-[20px] rounded-[6px] ">
            <h3 className="text-[20px] font-bold text-gray-800 mb-3">Sales Trends</h3>
            <p className="text-[16px] text-[#000000] opacity-50 ">Revenue</p>

            <div className="h-[90px] lg:h-[280px] mt-2">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart  barSize={isMobile ? 30 : 90} data={data}>
                        <CartesianGrid strokeDasharray="2 2" horizontal={true} vertical={false} />
                        <XAxis 
                        dataKey="name"
                        axisLine={{ stroke: '#9C94A4' }} 
                        tickLine={false}            
                        tick={false}                
                      />                        <YAxis hide={true} tickLine={false} />
                        <Bar dataKey="revenue" fill="#714E95" opacity={0.8} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default SalesChart;
