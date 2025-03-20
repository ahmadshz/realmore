import React from 'react';
import added from '../../../assets/IconDashboard/added.png';
import arrow from '../../../assets/IconDashboard/arrow-2.png';
import CustomBarChar from './CustomBarChar';
import MetricCard from './MetricCard'; import Progress from './Progress';
;

const MetrixCard = () => {
    return (
        <div className='flex flex-col gap-[24px] pb-[50px]'>
            <div>
                <h1 className='text-[22px] font-bold'>
                    <span>Performance</span>
                    <br />
                    <span>Metrics</span>
                </h1>
                <h1 className='mt-[9px] text-[15px]'>Track your progress</h1>
            </div>

            <div className='flex flex-wrap justify-between gap-y-[14px] lg:gap-y-[24px]'>
                {/* Client Added */}
                <MetricCard
                    title="Client Added"
                    value="15"
                    icon={added}
                    classValue='text-[45px] lg:text-[64px] font-bold text-[#328C71]'

                    className="w-[48.5%] md:w-[48%] xl:w-[210px] 2xl:w-[280px] min-h-[89px] lg:h-[136px] rounded-[10px]  p-[10px] lg:p-[20px] order-1"
                />

                {/* Closed Deals */}
                <MetricCard
                    title="Closed Deals"
                    value="%80"
                    classValue='text-[45px] lg:text-[64px] font-bold text-[#328C71]'
                    progress
                    progressBar={<Progress />}
                    className="w-full xl:w-[540px] 2xl:w-[794px] h-[120px] lg:h-[136px] order-3 xl:order-1 rounded-[10px] p-[20px]"
                />

                {/* Deals in Pipeline */}
                <MetricCard
                    title="Deals in Pipeline"
                    value="10"
                    classValue='text-[45px] lg:text-[64px] font-bold text-[#328C71]'

                    additionalText="Deals"
                    icon={arrow}
                    className="w-[48.5%] md:w-[48%] xl:w-[210px] 2xl:w-[280px] min-h-[89px] lg:h-[136px] order-2 xl:order-2 rounded-[10px] p-[10px] lg:p-[20px]"
                />

                {/* Average time to process applications */}
                <div className='w-full xl:w-[540px] 2xl:w-[794px] h-[120px] lg:h-[136px] border border-[#D3D3D3] order-4 xl:order-2 rounded-[10px] py-[10px] px-[20px] lg:p-[20px] flex'>
                    <div className='w-full leading-[1.2]'>
                        <h1 className=' text-[14px] lg:text-[16px] text-[#858585]'>Average time to process applications</h1>
                        <div className='w-[100%] xl:w-[70%] 2xl:w-[50%] relative flex justify-between'>
                            <div className='text-[45px] relative lg:static top-7 lg:text-[64px] font-bold text-[#328C71]'>01</div>
                            <h1 className='absolute bottom-6 lg:bottom-9 left-[47px] lg:left-[65px] text-[8px] text-[#328C71]'>per month</h1>
                            <CustomBarChar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MetrixCard;