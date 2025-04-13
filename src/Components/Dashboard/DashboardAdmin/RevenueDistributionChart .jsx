import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// Sample data
const data = [
  { name: 'Product Sales', value: 70 },
  { name: 'Subscriptions', value: 20 },
  { name: 'Services', value: 10 },
];

// Color palette
const COLORS = ['#0000001A', '#00000080', '#0000004b'];

const RevenueDistributionChart = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (entry, index) => {
    setActiveIndex(prev => (prev === index ? null : index)); // toggle selection
  };

  return (
    <div className="bg-white h-[410px] border rounded-[6px] py-[6px] relative">
      <div className="px-[10px] lg:p-[16px]">
        <h3 className="text-[20px] font-bold">Revenue Distribution</h3>
        <p className="text-[16px] text-[#00000080] mt-[10px]">Percentage</p>
      </div>

      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="40%"
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
              onClick={handleClick}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  stroke={index === activeIndex ? '#000' : 'none'}
                  strokeWidth={index === activeIndex ? 3 : 0}
                  cursor="pointer"
                  onClick={() => handleClick(entry, index)}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <h1 className="absolute bottom-5 right-4 text-[#00000080] text-[16px]">Revenue Streams</h1>
    </div>
  );
};

export default RevenueDistributionChart;
