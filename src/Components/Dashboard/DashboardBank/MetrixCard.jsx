import React from 'react'
import added from '../../../assets/IconDashboard/added.png'
import arrow from '../../../assets/IconDashboard/arrow-2.png'
import CustomBarChar from './CustomBarChar'

const MetrixCard = () => {
    return (
        <div className='flex flex-col gap-[24px] pb-[50px]'>
            <div>
                <h1 className='text-[22px] font-bold '>
                    <span>Performance</span>
                    <br />
                    <span>Metrics</span>
                </h1>
                <h1 className='mt-[9px] text-[15px]  '>Track your progress</h1>
            </div>

            <div className='flex flex-wrap justify-between gap-y-[14px] lg:gap-y-[24px] '>
                {/* Client Added */}
                <div className='w-[48.5%] md:w-[48%]  xl:w-[210px]  2xl:w-[280px]  h-[89px] lg:h-[136px] border border-[#D3D3D3] rounded-[10px] order-1 
                    p-[20px] flex items-center justify-between'>
                    <div className='flex flex-col justify-center leading-[1.2]'>
                        <h1 className='text-[14px] lg:text-[16px] text-[#858585]'>Client Added</h1>
                        <div className=' text-[45px] lg:text-[64px] font-bold text-[#328C71]'>15</div>
                    </div>
                    <img src={added} alt='' />
                </div>

                {/* Closed Deals */}
                <div className='w-full xl:w-[540px] 2xl:w-[794px]  h-[120px] lg:h-[136px] border border-[#D3D3D3] order-3 xl:order-1 
                                rounded-[10px] p-[20px] flex justify-between'>
                    <div className='flex flex-col justify-center leading-[1.2]'>
                        <h1 className='text-[16px] text-[#858585]'>Closed Deals</h1>
                        <div className='text-[45px] lg:text-[64px] font-bold text-[#328C71]'>%80</div>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <div />
                        <div className='flex flex-col gap-1   lg:gap-4'>
                            {/* Labels for Progress Bar */}
                            <div>
                                <div className='flex justify-between w-[156px] text-[10px] text-[#328C71] font-bold'>
                                    <span>00</span>
                                    <span>20</span>
                                    <span>40</span>
                                    <span>60</span>
                                    <span>80</span>
                                    <span>100</span>
                                </div>

                                {/* Progress Bar */}
                                <div className='w-[156px] h-[5px] rounded-[7px] bg-[#D3D3D3]'>
                                    <div className='w-[100px] h-[5px] rounded-[7px] bg-[#328C71]'></div>
                                </div>
                            </div>

                            {/* Percentage Text */}
                            <h1 className='text-[10px] text-end text-[#328C71] font-bold'>%20 Left</h1>
                        </div>
                    </div>
                </div>
                {/* Deals in Pipeline */}
                <div className=' w-[48.5%] md:w-[48%]  xl:w-[210px]  2xl:w-[280px] h-[89px] lg:h-[136px] border border-[#D3D3D3]
                                order-2 xl:order-2 rounded-[10px] p-[20px] flex items-center justify-between'>
                    <div className='flex flex-col justify-center leading-[1.2]'>
                        <h1 className='text-[14px] lg:text-[16px] text-[#858585]'>Deals in Pipeline</h1>
                        <div className='text-[45px] lg:text-[64px] font-bold text-[#328C71]'>10</div>
                    </div>
                    <div className='flex items-center gap-1'>
                        <span className='text-[12px] text-[#858585]'>Deals</span>
                        <img className='w-[16px] h-[16px]' src={arrow} alt='' />
                    </div>
                </div>

                {/* Average time to process applications */}
                <div className='w-full xl:w-[540px] 2xl:w-[794px]  h-[120px] lg:h-[136px] border border-[#D3D3D3] 
                                order-4 xl:order-2 rounded-[10px] py-[10px] px-[20px]  lg:p-[20px] flex'>
                    <div className='w-full leading-[1.2]'>
                        <h1 className='text-[16px] text-[#858585]'>Average time to process applications</h1>
                        <div className='w-[100%] xl:w-[70%] 2xl:w-[50%]  relative flex justify-between'>
                            <div className='text-[45px] relative lg:static top-7 lg:text-[64px] font-bold text-[#328C71]'>01</div>
                            <h1 className='absolute   bottom-6 lg:bottom-9 left-[47px] lg:left-[65px] text-[8px] text-[#328C71]'>per month</h1>
                            <CustomBarChar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MetrixCard