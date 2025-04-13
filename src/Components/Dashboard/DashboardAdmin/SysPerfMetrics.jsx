import React from 'react'
import MetricCard from '../DashboardBank/MetricCard'

const SysPerfMetrics = () => {
    return (
        <section className='  flex flex-col gap-[12px] lg:gap-[24px] lg:border-b lg:pb-[60px] 2xl:px-[60px] pt-0 '>
            <div className='leading-5 flex flex-col lg:gap-[20px] '>
                <h1 className='text-[18px] lg:text-[28px] font-bold'>System Performance Metrics</h1>
                <h3 className='text-[13px] lg:text-[16px]'>View key metrics on consultant performance</h3>
            </div>

            {/*Metrics */}
            <div className='grid grid-cols-1  xl:grid-cols-3 gap-[20px]'>
                <MetricCard
                    title="Response Time"
                    value="50 Min."
                    desc='+25'
                    classValue='text-[20px] lg:text-[28px]  font-bold'
                    className="w-full h-[93px] lg:h-[124px] rounded-[6px] p-[10px] lg:p-[16px] "
                />
                <MetricCard
                    title="Uptime"
                    value="40 Min."
                    desc='+10'
                    classValue='text-[20px] lg:text-[28px]  font-bold'
                    className="w-full h-[93px] lg:h-[124px] rounded-[6px] p-[10px] lg:p-[16px] "
                />
                <MetricCard
                    title="Total Revenue"
                    value="3,000 SAR"
                    desc='+2%'
                    classValue='text-[20px] lg:text-[28px]  font-bold'
                    className="w-full h-[93px]   lg:h-[124px] rounded-[6px] p-[10px] lg:p-[16px] "
                />
            </div>

            {/*Metrics */}
            <div className='leading-5 flex flex-col lg:gap-[8px] xl:gap-[20px]  '>
                <h1 className='text-[18px] lg:text-[28px] font-bold '>Financial summaries</h1>
                <h3 className='text-[13px] lg:text-[16px]'>View key metrics on consultant performance</h3>
            </div>

            <div className='grid grid-cols-1  xl:grid-cols-3 gap-[20px]'>
                <MetricCard
                    title="Total Revenue"
                    value='12,000,000 SAR'
                    desc="+25"
                    classValue='text-[20px] lg:text-[28px]  font-bold'
                    className="w-full h-[93px] lg:h-[124px] rounded-[6px] p-[10px] lg:p-[16px]  "
                />
                <MetricCard
                    title="Average Transaction Value"
                    value="800,000 SAR"
                    desc='+10'
                    classValue='text-[20px] lg:text-[28px]  font-bold'
                    className="w-full h-[93px] lg:h-[124px] rounded-[6px] p-[10px] lg:p-[16px]  "
                />
                <MetricCard
                    title="Total Revenue"
                    value="1,000,000 SAR"
                    desc='+2%'
                    classValue='text-[20px] lg:text-[28px]  font-bold'
                    className="w-full h-[93px] lg:h-[124px] rounded-[6px] p-[10px] lg:p-[16px] "
                />
            </div>
        </section>
    )
}

export default SysPerfMetrics