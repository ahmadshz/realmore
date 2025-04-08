import React from 'react'
import MetricCard from '../DashboardBank/MetricCard'

const ProgressStats = () => {
    return (
        <div className='px-[18px] md:px-[40px] lg:px-[20px] xl:px-[40px] 2xl:px-[60px]'>
            <div className='grid grid-cols-2 xl:grid-cols-3 gap-[15px] xl:gap-[20px]'>
                <MetricCard
                    title="Videos Completed"
                    value="5"
                    classValue=' text-[45px] xl:text-[28px] text-[#EE7A32] font-bold'
                    className="h-[89px] xl:h-[95px] border-[#feb18039]  rounded-[6px]  px-[10px] py-[6px] lg:p-[16px] order-2 xl:order-2"
                />
                <MetricCard
                    title="Total Videos"
                    value="12"
                    classValue=' text-[45px] xl:text-[28px] text-[#EE7A32] font-bold'
                    className=" h-[89px] xl:h-[95px] border-[#feb18039]  rounded-[6px]  px-[10px] py-[6px] lg:p-[16px] order-2 xl:order-2"
                />
                <MetricCard
                    title="Accomplish Ratio"
                    value="85%"
                    classValue=' text-[45px] xl:text-[28px] text-[#EE7A32] font-bold'
                    className=" h-[89px] xl:h-[95px] border-[#feb18039] col-span-2 xl:col-span-1  rounded-[6px]  px-[10px] py-[6px] lg:p-[16px] order-2 xl:order-2"
                />
            </div>
        </div>
    )
}

export default ProgressStats