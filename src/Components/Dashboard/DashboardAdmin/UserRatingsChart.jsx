import { BarChart, Bar, XAxis, YAxis,  ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
    { revenue: 700 },
    { revenue: 500 },
    { revenue: 300 },
    { revenue: 600 },
    { revenue: 450 },
    { revenue: 750 },
    { revenue: 500 },
];

const UserRatingsChart = () => {


    return (
        <div className=" bg-white h-[216px] md:h-[410px]  border  rounded-[6px] py-[6px] relative px-[10px]  lg:p-[16px]   ">
                <h3 className=" text-[20px] font-bold">Response Times</h3>
                <p className="text-[16px] text-[#00000080] mt-[10px]">Response</p>

            <ResponsiveContainer className={"w-full "} width="100%" height={window.innerWidth > 426 ? 308 : 120}>
                    <BarChart  data={data} margin={{top:30 , bottom: 0}}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#0000001A" />
                        <XAxis
                            dataKey="name"
                            axisLine={{ stroke: '#0000001A' }}
                            tickLine={false}
                            tick={false}
                        />                  
                              <YAxis hide={true} tickLine={false} />
                        <Bar dataKey="revenue" fill="#00000080" opacity={0.8} />
                    </BarChart>
                </ResponsiveContainer>
                <h1 className="absolute bottom-5 right-4 text-[#00000080] text-[16px] ">Rating</h1>
        </div>
    );
};

export default UserRatingsChart;
