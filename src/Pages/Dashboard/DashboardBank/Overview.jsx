import React from 'react'
import HeaderDashboard from '../../../Components/Dashboard/DashboardBank/HeaderDashboard';
import HeaderSection from '../../../Components/Auth/HeaderSection';
import MetricCard from '../../../Components/Dashboard/DashboardBank/MetricCard';
import add from '../../../assets/IconDashboard/added.svg'
import Progress from '../../../Components/Dashboard/DashboardBank/Progress';
import CustomBarChar from '../../../Components/Dashboard/DashboardBank/CustomBarChar';


const Overview = () => {

    const firstTitle = "Key Metrics Overview";
    const titleSeconde = "Summary of important data points";

    return (
        <div>
            <HeaderDashboard />
            <div className='min-h-screen w-f flex flex-col xl:w-[850px] 2xl:w-[1217px]
                    pt-[55px] lg:pt-[97px] px-[18px] md:px-[40px] lg:px-[20px] xl:px-[40px] 2xl:px-[60px]'>
                <HeaderSection titleSeconde={titleSeconde} firstTitle={firstTitle} />

                {/* Section 1 */}
                <div className='mt-[40px] flex flex-wrap gap-y-[30px] justify-between '>
                    <MetricCard
                        title="Number of a Properties Listed"
                        value="15"
                        icon={add}
                        desc='+5% from last month'
                        classValue='text-[28px] text-[#076152] font-bold'
                        className="w-[48.5%] md:w-[48%] xl:w-[28%] h-[136px] rounded-[6px]  p-[16px] order-1 xl:order-2"
                    />
                    <MetricCard
                        title="Number of a Properties Listed"
                        value="%80"
                        progressBar={<Progress />}
                        progress
                        desc='-10% from last month'
                        classValue='text-[28px] text-[#076152] font-bold'
                        className="w-full xl:w-[70%] h-[136px] rounded-[6px]  p-[16px] order-2 xl:order-2"
                    />

                    <MetricCard
                        title="Deals in Pipeline "
                        value="15"
                        icon={add}
                        desc='+5% from last month'
                        classValue='text-[28px] text-[#076152] font-bold'
                        className="w-[48.5%] md:w-[48%]  xl:w-[28%] h-[136px] rounded-[6px]  p-[16px] order-1 xl:order-2"
                    />
                    <MetricCard
                        title="Average time to process applications"
                        value="01"
                        progressBar={<CustomBarChar />}
                        desc='per month'
                        classValue='text-[28px] text-[#076152] font-bold'
                        className="w-full xl:w-[70%] h-[136px] rounded-[6px]  p-[16px] order-2 xl:order-2"
                    />

                    <MetricCard
                        title="Deals in Pipeline "
                        value="15"
                        desc='+20% '
                        classValue='text-[28px] text-[#076152] font-bold'
                        className="w-[49%] h-[136px] rounded-[6px]  p-[16px] order-2 xl:order-2"
                    />
                    <MetricCard
                        title="Number of deals closed"
                        value="-10%"
                        desc='per month'
                        classValue='text-[28px] text-[#076152] font-bold'
                        className="w-[49%] h-[136px] rounded-[6px]  p-[16px] order-2 xl:order-2"
                    />
                </div>

                {/* Section 1 */}
                <div className='my-[40px]'>
                    <div className='mb-[40px]'>
                        <HeaderSection titleSeconde='Track completed sales and financial summaries' firstTitle='Sales Dashboard' />
                    </div>
                    <div className='flex flex-col gap-[20px]'>
                        <MetricCard
                            title="Total Loans Amount"
                            value="70.000.000 SAR"
                            desc='+20%'
                            shadow='shadow-md'
                            classValue='text-[28px] text-[#328C71] font-bold'
                            className="w-full h-[136px] rounded-[6px]  p-[16px] order-2 xl:order-2"
                        />
                        <MetricCard
                            title="Total Loans Amount"
                            value="17,000,000 SAR"
                            shadow='shadow-md'
                            desc='-10%'
                            classValue='text-[28px] text-[#328C71] font-bold'
                            className="w-full h-[136px] rounded-[6px]  p-[16px] order-2 xl:order-2"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Overview