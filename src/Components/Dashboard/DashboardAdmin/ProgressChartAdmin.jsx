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



const ProgressChartAdmin = ({title , x , y}) => {
    return (
        <div className=" bg-white  h-[216px] md:h-[410px]  border  rounded-[6px] py-[6px] relative  ">
            <div className="px-[10px]  lg:p-[16px]">
                <h3 className=" text-[20px] font-bold">{title}</h3>
                <p className="text-[16px] text-[#00000080] mt-[10px]">{y}</p>
            </div>
            <ResponsiveContainer className={"w-full "} width="100%" height={window.innerWidth > 426 ? 288 : 120}>
                <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                    <defs>
                        <defs>
                            <linearGradient id="colorProgress" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="" stopOpacity={0.8} />
                                <stop offset="100%" stopColor="" stopOpacity={0} />
                            </linearGradient>
                        </defs>

                    </defs>
                    <XAxis
                        axisLine={{ stroke: '#0000001A' }}
                        tickLine={false}
                        tick={false}
                    />


                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#0000001A" />
                    <Area type="monotone" dataKey="progress" stroke="#000000" fill="url(#colorProgress)" />
                </AreaChart>
            </ResponsiveContainer>
            <h1 className="absolute bottom-5 right-4 text-[#00000080] text-[16px] ">{x}</h1>
        </div>
    );
};

export default ProgressChartAdmin;
