import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, LabelList } from 'recharts';

const data = [
    { name: 'Submission', days: 3, label: '3 Days' },
    { name: 'Initial Rev', days: 7, label: '7 Days' },
    { name: 'Detailed Rev', days: 13, label: '13 Days' },
    { name: 'Final Decision', days: 5, label: '5 Days' },
];

const CustomBarChar = () => {
    return (
        <div className="">
            <BarChart
                width={200} 
                height={90}
                data={data}
                style={{ marginTop: '10px' }}
                barSize={20}
            >
                {/* X-Axis */}
                <XAxis
                    dataKey="name"
                    tick={{ fontSize: 6 }}
                    tickLine={false}
                    interval={0} 
                    height={30} 
                    textAnchor="middle"            
                         />

                {/* Y-Axis */}
                <YAxis
                    tick={{ fontSize: 8 }}
                    ticks={[0, 7, 14]}
                    domain={[0, 20]}
                    interval={0}
                    width={30} 
                    tickLine={false}
                    axisLine={{ stroke: '#328C71', strokeWidth: 1 }}
                    tickFormatter={(value) => (value === 7 ? '1 week' : value === 14 ? '2 week' : '')}
                />

                {/* Grid Lines */}
                <CartesianGrid
                    stroke="#D3D3D3"
                    strokeDasharray="3 3"
                    horizontal={false}
                    vertical={false}
                />

                {/* Bars */}
                <Bar dataKey="days" fill="#328C71" radius={[2, 2, 0, 0]}>
                    <LabelList
                        dataKey="label"
                        position="top"
                        style={{ fontSize: 8 }}
                    />
                </Bar>
            </BarChart>
        </div>
    );
};

export default CustomBarChar;
