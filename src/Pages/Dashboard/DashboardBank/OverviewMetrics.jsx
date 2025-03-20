import React from 'react'
import HeaderSection from '../../../Components/Auth/HeaderSection';
import MetricCard from '../../../Components/Dashboard/DashboardBank/MetricCard';
import HeaderDashboard from '../../../Components/Dashboard/DashboardBank/HeaderDashboard';
import Progress from '../../../Components/Dashboard/DashboardBank/Progress';
import CustomBarChar from '../../../Components/Dashboard/DashboardBank/CustomBarChar';
import add from '../../../assets/IconDashboard/added.png'
import arrow from '../../../assets/IconDashboard/arrow-2.png'
import Overview from './Overview';

const OverviewMetrics = () => {
    const firstTitle = "Key Metrics Overview";
    const titleSeconde = "Summary of important data points";

    return (
        <div>
         <Overview/>
            <div className='min-h-screen w-f flex flex-col xl:w-[850px] 2xl:w-[1217px]
            pt-[55px] lg:pt-[97px] px-[18px] md:px-[40px] lg:px-[20px] xl:px-[40px] 2xl:px-[60px]'>
                <div className='hidden lg:block'>
                    <HeaderSection titleSeconde={titleSeconde} firstTitle={firstTitle} />
                </div>

                <div className=' lg:hidden'>
                    <h1 className='text-[22px] font-bold flex flex-col '>
                        <span>Performance</span>
                        <span>Metrics</span>
                    </h1>
                    <h1 className=' text-[15px]'>Track your progress</h1>
                </div>

                {/* Section 1 */}
                <div className='flex flex-wrap justify-between gap-y-[14px] lg:gap-y-[24px] mt-[40px]'>
                    {/* Client Added */}
                    <MetricCard
                        title="Client Added"
                        value="15"
                        icon={add}
                        classValue='text-[45px] lg:text-[64px] font-bold text-[#328C71]'

                        className="w-[48.5%] md:w-[48%] xl:w-[210px] 2xl:w-[280px] h-[121px] lg:h-[136px] rounded-[10px]  py-[10px] px-[20px] lg:p-[20px] order-1"
                    />

                    {/* Closed Deals */}
                    <MetricCard
                        title="Closed Deals"
                        value="%80"
                        classValue='text-[45px] lg:text-[64px] font-bold text-[#328C71]'
                        progress
                        progressBar={<Progress />}
                        className="w-full xl:w-[540px] 2xl:w-[794px] h-[121px] lg:h-[136px] order-3 xl:order-1 rounded-[10px] py-[10px] px-[20px] lg:p-[20px]"
                    />

                    {/* Deals in Pipeline */}
                    <MetricCard
                        title="Deals in Pipeline"
                        value="10"
                        icon={arrow}
                        classValue='text-[45px] lg:text-[64px] font-bold text-[#328C71]'

                        additionalText="Deals"
                        className="w-[48.5%] md:w-[48%] xl:w-[210px] 2xl:w-[280px] h-[121px] lg:h-[136px] order-2 xl:order-2 rounded-[10px] py-[10px] px-[20px] lg:p-[20px]"
                    />

                    {/* Average time to process applications */}
                    <div className='w-full xl:w-[540px] 2xl:w-[794px] h-[121px] lg:h-[136px] 
                                    border border-[#D3D3D3] order-4 xl:order-2 rounded-[10px] py-[10px] px-[20px] lg:p-[20px] '>
                        <h1 className=' text-[14px] lg:text-[16px] text-[#858585]'>Average time to process applications</h1>

                        <div className='flex justify-between'>
                            <div className='w-full leading-[1.2] pb-4'>
                                <div className='w-[100%] xl:w-[70%] 2xl:w-[50%] relative flex justify-between'>
                                    <div className='text-[45px] relative lg:static top-7 lg:text-[64px] font-bold text-[#328C71]'>01</div>
                                    <h1 className='absolute -bottom-5 lg:bottom-3 left-[47px] lg:left-[65px] text-[8px] text-[#328C71]'>per month</h1>
                                </div>

                            </div>
                            <CustomBarChar />
                        </div>
                    </div>
                </div>

                {/* Section 1 */}
                <div className='my-[40px]'>
                    <div className='mb-[40px]'>
                        <HeaderSection notification titleSeconde='Track completed sales and financial summaries' firstTitle='Sales Dashboard' />
                    </div>
                    <div className='flex flex-col gap-[20px]'>
                        <MetricCard
                            title="Total Loans Amount"
                            value="70.000.000 SAR"
                            shadow='shadow-md'
                            description='20%'
                            classValue='text-[32px] xl:text-[64px] font-bold text-[#328C71]'
                            className="w-full h-[155px] rounded-[6px]  p-[16px] order-2 xl:order-2"
                        />
                        <MetricCard
                            title="Total Loans Amount"
                            value="17,000,000 SAR"
                            shadow='shadow-md'
                            description='-10%'
                            classValue='text-[32px] xl:text-[64px] font-bold text-[#328C71]'
                            className="w-full h-[155px] rounded-[6px]  p-[16px] order-2 xl:order-2"
                        />
                    </div>
                </div>
            </div>

        </div >
    )
}

export default OverviewMetrics