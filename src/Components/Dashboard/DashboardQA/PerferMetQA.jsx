import React from 'react'
import MetricCard from '../DashboardBank/MetricCard'

const PerferMetQA = ({className}) => {
    return (
        <section className={`${className}`} >
            <div className='leading-5 flex flex-col lg:gap-[20px]  '>
                <h1 className='text-[18px] lg:text-[28px] font-bold '>Performance Metrics</h1>
                <h3 className='text-[13px] lg:text-[16px] '>View key metrics on consultant performance</h3>
            </div>

            {/*Metrics */}
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[12px] lg:gap-[20px]'>
                <MetricCard
                    title="Client Journeys Tracked"
                    value="874"
                    desc='+5%'
                    classValue='text-[20px] lg:text-[20px] lg:text-[28px]  font-bold'
                    className="w-full h-[93px] lg:h-[124px] rounded-[6px] p-[10px] lg:p-[16px] order-2 xl:order-2"
                />
                <MetricCard
                    title="Consultant Activities Monitored"
                    value="1200"
                    desc='+8.2%'
                    classValue='text-[20px] lg:text-[28px]  font-bold'
                    className="w-full h-[93px] lg:h-[124px] rounded-[6px] p-[10px] lg:p-[16px] order-2 xl:order-2"
                />
                <MetricCard
                    title="Appointments Monitored"
                    value="320"
                    desc='+2.3%'
                    classValue='text-[20px] lg:text-[20px] lg:text-[28px]  font-bold'
                    className="w-full h-[93px] lg:h-[124px] rounded-[6px] p-[10px] lg:p-[16px] order-2 xl:order-2"
                />
                <MetricCard
                    title="Consultant Productivity"
                    value="86%"
                    desc='+3%'
                    classValue='text-[20px] lg:text-[28px]  font-bold'
                    className="w-full h-[93px] lg:h-[124px] rounded-[6px] p-[10px] lg:p-[16px] order-2 xl:order-2"
                />
                <MetricCard
                    title="Compliance Score"
                    value="94%"
                    desc='-2%'
                    classValue='text-[20px] lg:text-[20px] lg:text-[28px]  font-bold'
                    className="w-full h-[93px] lg:h-[124px] rounded-[6px] p-[10px] lg:p-[16px] order-2 xl:order-2"
                />
                <MetricCard
                    title="Reassignment Rate"
                    value="8%"
                    desc='-1%'
                    classValue='text-[20px] lg:text-[28px]  font-bold'
                    className="w-full h-[93px] lg:h-[124px] rounded-[6px] p-[10px] lg:p-[16px] order-2 xl:order-2"
                />

            </div>
         
        </section>
    )
}

export default PerferMetQA