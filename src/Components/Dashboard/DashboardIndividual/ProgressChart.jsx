import React from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { name: "Jan", progress: 80 },
    { name: "Feb", progress: 40 },
    { name: "Mar", progress: 90 },
    { name: "Apr", progress: 60 },
    { name: "May", progress: 100 },
    { name: "Jun", progress: 85 },
];



const ProgressChart = () => {
    return (
        <div className=" bg-white   border border-[#feb18039] rounded-[10px] px-[10px] py-[6px] lg:p-[16px]  ">
            <h3 className="text-[#EE7A32] text-[20px] font-bold">Progress over Time</h3>
            <p className="text-[16px] text-[#373737] mt-[10px]">Progress Level</p>
            <ResponsiveContainer className={"ml-[15px]"} width="100%" height={window.innerWidth > 768 ? 250 : 120}>
                <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 20 }}>
                    <defs>
                        <defs>
                            <linearGradient id="colorProgress" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#EA9B23" stopOpacity={0.8} />
                                <stop offset="100%" stopColor="#EE7A32" stopOpacity={0} />
                            </linearGradient>
                        </defs>

                    </defs>
                    <XAxis
                        axisLine={{ stroke: '#8c604539' }}
                        tickLine={false}
                        tick={false}
                    />


                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#feb18039" />
                    <Area type="monotone" dataKey="progress" stroke="#ff7f0e" fill="url(#colorProgress)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ProgressChart;
