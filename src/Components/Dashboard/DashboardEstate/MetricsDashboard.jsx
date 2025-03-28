import React from 'react'
import MetricCard from '../DashboardBank/MetricCard'

const MetricsDashboard = () => {
    return (
        <div>
            <div className='grid grid-cols-1 xl:grid-cols-3  gap-[10px] lg:gap-[20px]  mt-[10px]  lg:mt-[40px] '>
                <MetricCard
                    title="Number of Properties Listed"
                    value="1200"
                    empty
                    desc='+5% from last month'
                    classValue=' text-[20px] xl:text-[28px] text-[#714E95] font-bold'
                    className=" h-[95px] lg:h-[151px] rounded-[6px]  px-[10px] py-[6px] lg:p-[16px] order-2 xl:order-2"
                />
                <MetricCard
                    title="Number of Client Visits"
                    value="2500"
                    empty
                    desc='-10% from last month'
                    classValue='text-[20px] xl:text-[28px] text-[#714E95] font-bold'
                    className=" h-[95px] lg:h-[151px] rounded-[6px]  px-[10px] py-[6px] lg:p-[16px] order-2 xl:order-2"
                />
                <MetricCard
                    title="Number of Client Visits"
                    value="2500"
                    empty
                    desc='-10% from last month'
                    classValue='text-[20px] xl:text-[28px] text-[#714E95] font-bold'
                    className="h-[95px] lg:h-[151px] rounded-[6px]  px-[10px] py-[6px] lg:p-[16px] order-2 xl:order-2"
                />
            </div>

            <div className='grid grid-cols-1 xl:grid-cols-2 gap-[10px] lg:gap-[20px]  mt-[10px] lg:mt-[20px]'>
                <MetricCard
                    title="Completed Sales"
                    value="100"
                    desc='+20%'
                    classValue='text-[20px] xl:text-[28px] text-[#714E95] font-bold'
                    className=" h-[95px] lg:h-[151px] rounded-[6px]  px-[10px] py-[6px] lg:p-[16px] order-2 xl:order-2"
                />
                <MetricCard
                    title="Total Revenue"
                    value="$1,000,000"
                    desc='-10%'
                    classValue='text-[20px] xl:text-[28px] text-[#714E95] font-bold'
                    className=" h-[95px] lg:h-[151px] rounded-[6px]  px-[10px] py-[6px] lg:p-[16px] order-2 xl:order-2"
                />
            </div>

            <div className='grid grid-cols-1 xl:grid-cols-2  gap-[10px] lg:gap-[20px]  mt-[10px] lg:mt-[20px]'>
                <MetricCard
                    title="Total Sales"
                    value="15,000,000"
                    desc='-2% from last month'
                    classValue='text-[20px] xl:text-[28px] text-[#714E95] font-bold'
                    className=" h-[95px] lg:h-[151px] rounded-[6px]  px-[10px] py-[6px] lg:p-[16px] order-2 xl:order-2"
                />
                <MetricCard
                    title="Average Property Price"
                    value="250,000"
                    desc='+3% from last month'
                    classValue='text-[20px] xl:text-[28px] text-[#714E95] font-bold'
                    className=" h-[95px] lg:h-[151px] rounded-[6px]  px-[10px] py-[6px] lg:p-[16px] order-2 xl:order-2"
                />
            </div></div>
    )
}

export default MetricsDashboard