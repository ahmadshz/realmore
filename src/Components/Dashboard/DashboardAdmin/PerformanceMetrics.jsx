import React from 'react'
import MetricCard from '../DashboardBank/MetricCard'

const PerformanceMetrics = ({className}) => {
    return (
        <section className={`${className}`} >
            <div className='leading-5 flex flex-col lg:gap-[20px]  '>
                <h1 className='text-[18px] lg:text-[28px] font-bold '>Performance Metrics</h1>
                <h3 className='text-[13px] lg:text-[16px] '>View key metrics on consultant performance</h3>
            </div>

            {/*Metrics */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-[12px] lg:gap-[20px]'>
                <MetricCard
                    title="Number of Users Registered"
                    value="500"
                    desc='+25'
                    classValue='text-[20px] lg:text-[20px] lg:text-[28px]  font-bold'
                    className="w-full h-[93px] lg:h-[124px] rounded-[6px] p-[10px] lg:p-[16px] order-2 xl:order-2"
                />
                <MetricCard
                    title="Active Users"
                    value="300"
                    desc='+10'
                    classValue='text-[20px] lg:text-[28px]  font-bold'
                    className="w-full h-[93px] lg:h-[124px] rounded-[6px] p-[10px] lg:p-[16px] order-2 xl:order-2"
                />
            </div>
            {/*Metrics */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-[12px] lg:gap-[20px]'>
                <MetricCard
                    title="Average Transaction Value"
                    value='$3,000'
                    desc="+2%"
                    classValue='text-[20px] lg:text-[28px]  font-bold'
                    className="w-full h-[93px] lg:h-[124px] rounded-[6px] p-[10px] lg:p-[16px] order-2 xl:order-2"
                />
                <MetricCard
                    title="User Satisfaction"
                    value="4.5/5"
                    desc='+0.2'
                    classValue='text-[20px] lg:text-[28px]  font-bold'
                    className="w-full h-[93px] lg:h-[124px] rounded-[6px] p-[10px] lg:p-[16px] order-2 xl:order-2"
                />
            </div>
        </section>
    )
}

export default PerformanceMetrics