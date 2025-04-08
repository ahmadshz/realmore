import React from 'react'
import MetricCard from '../DashboardBank/MetricCard'


const MetricsIndividual = () => {
    return (
        <div className='flex flex-col gap-[28px]'>
            <div className='grid grid-cols-1 xl:grid-cols-3  gap-[10px] lg:gap-[20px]   '>
                <MetricCard
                    title="Number of a Properties Listed"
                    value="25.600 SAR"
                    empty
                    desc='+5% from last month'
                    classValue=' text-[20px] xl:text-[28px] text-[#EE7A32] font-bold'
                    className=" h-[95px] lg:h-[137px] rounded-[6px]  px-[10px] py-[6px] lg:p-[16px] order-2 xl:order-2"
                />
                <MetricCard
                    title="Number of Client Visits"
                    value="25.600 SAR"
                    empty
                    desc='-10% from last month'
                    classValue='text-[20px] xl:text-[28px] text-[#EE7A32] font-bold'
                    className=" h-[95px] lg:h-[137px] rounded-[6px]  px-[10px] py-[6px] lg:p-[16px] order-2 xl:order-2"
                />
                <MetricCard
                    title="Number of Properties Sold"
                    value="10"
                    empty
                    desc='+8% from last month'
                    classValue='text-[20px] xl:text-[28px] text-[#EE7A32] font-bold'
                    className="h-[95px] lg:h-[137px] rounded-[6px]  px-[10px] py-[6px] lg:p-[16px] order-2 xl:order-2"
                />
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-2  gap-[10px] lg:gap-[20px]   '>
                <MetricCard
                    title="Number of clients managed "
                    value="10"
                    desc='20%'
                    classValue=' text-[20px] xl:text-[28px] text-[#EE7A32] font-bold'
                    className=" h-[95px] lg:h-[124px] rounded-[6px]  px-[10px] py-[6px] lg:p-[16px] order-2 xl:order-2"
                />
                <MetricCard
                    title="Number of Client Visits"
                    value="15"
                    desc='-10%'
                    classValue='text-[20px] xl:text-[28px] text-[#EE7A32] font-bold'
                    className=" h-[95px] lg:h-[124px] rounded-[6px]  px-[10px] py-[6px] lg:p-[16px] order-2 xl:order-2"
                />
              
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-2  gap-[10px] lg:gap-[20px]   '>
                <MetricCard
                    title="Success rate of property visits "
                    value="80%"
                    desc='-2% from last month'
                    classValue=' text-[20px] xl:text-[28px] text-[#EE7A32] font-bold'
                    className=" h-[95px] lg:h-[124px] rounded-[6px]  px-[10px] py-[6px] lg:p-[16px] order-2 xl:order-2"
                />
                <MetricCard
                    title="Average time to close deals"
                    value="10"
                    desc='+3% from last month'
                    classValue='text-[20px] xl:text-[28px] text-[#EE7A32] font-bold'
                    className=" h-[95px] lg:h-[124px] rounded-[6px]  px-[10px] py-[6px] lg:p-[16px] order-2 xl:order-2"
                />
              
            </div>
        </div>
    )
}

export default MetricsIndividual