import React from 'react'
import HeaderSection from '../../Auth/HeaderSection'

const ExportControls = ({bg ,border , textColor  ,mt}) => {
    return (
        <div className={`${mt ? "mt-[10px] lg:mt-[40px]" : ""}  flex flex-col gap-[15px] `}>
            <HeaderSection font='font-bold' firstTitle='Export Data' titleSeconde='Export data based on specific criteria.' />
            <div className='flex flex-col gap-[10px]  lg:gap-[24px]   '>
                {/* Date Filter */}
                <section className=' border border-[#D3D3D3] h-[57px] px-[16px] rounded-[10px] flex items-center justify-between'>
                    <div className='text-[16px] lg:text-[18px] text-[#858585]'>
                        Select Date Range
                    </div>

                    <div className={`${bg} opacity-70 text-white px-[8px] h-[37px] rounded-[4px] flex items-center justify-center `}>
                        Select Dates
                    </div>
                </section>

                <section>
                    <div className=' flex  flex-wrap xl:flex-nowrap gap-[10px] items-center '>
                        <div className='text-[16px] lg:text-[18px] text-[#858585] w-full xl:min-w-[350px] 2xl:w-3/6   border border-[#D3D3D3] h-[57px] px-[16px] rounded-[10px] flex items-center justify-between'>
                            Select Date Range
                        </div>

                        <div className='flex flex-col lg:flex-row lg:items-center justify-between xl:justify-end w-full
                                     gap-[10px] 2xl:gap-[24px] 2xl:w-3/6   '>
                            <h1 className='text-[20px] font-bold '>Date Range</h1>
                            <div className='flex  gap-[10px]'>
                                <div className='bg-[#F3F2F7] rounded-[6px] min-w-[90px] px-[10px]  h-[40px] flex justify-center items-center text-[14px] '>Last 7 days</div>
                                <div className='bg-[#F3F2F7] rounded-[6px] min-w-[98px] px-[10px] h-[40px] flex justify-center items-center text-[14px] '>Last 30 days</div>
                                <div className='bg-[#F3F2F7] rounded-[6px] min-w-[70px] px-[10px] h-[40px] flex justify-center items-center text-[14px] '>Custom</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Buttons */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-[10px] mt-[40px] lg:mt-0'>
                    <div className={`border ${border} rounded-[10px] h-[50px] flex justify-center items-center
                                     ${bg} lg:bg-white text-white ${textColor ? `lg:${textColor}` : "lg:text-[#050605]"}   text-[22px] font-bold`}>Export as PDF</div>
                    <div className={`${bg} text-white text-[22px] font-bold rounded-[10px] 
                                 h-[50px] flex justify-center items-center`}>Export as CSV</div>
                </div>
            </div>
        </div>
    )
}

export default ExportControls