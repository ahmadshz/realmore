import React from 'react'

const ApplyFilter = () => {
    return (
        <div className='min-h-[270px] lg:border border-[#D3D3D3] rounded-[10px] p-[10px] lg:p-[24px] mt-[30px] lg:mt-[40px] flex flex-col gap-[20px] lg:gap-[40px] '>

            <div className='flex flex-col gap-[20px] lg:gap-[24px] '>
                {/* Date Filter */}
                <div className='grid grid-cols-2 gap-[20px] lg:gap-[24px]'>
                    <div className='border border-[#D3D3D3] h-[40px] lg:h-[50px] px-[16px] text-[18px]
                                    flex items-center text-[#858585] rounded-[10px] '>Select Date</div>
                    <div className='border border-[#D3D3D3] h-[40px] lg:h-[50px] px-[16px] text-[18px] 
                                    flex items-center text-[#858585] rounded-[10px] '>Select Date</div>
                </div>

                {/** Status Filter */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-[20px] lg:gap-[24px]'>
                    <div className='border border-[#714E95] h-[40px] lg:h-[50px] px-[16px] text-[18px] bg-[#714E95] text-[#FFFFFF]
                                    flex  items-center rounded-[10px]  '>Apartment</div>
                    <div className=' h-[40px] lg:h-[50px] px-[16px] text-[18px]  bg-[#F2F2F2] 
                                    flex  items-center text-[#797979] rounded-[10px] '>House</div>
                    <div className=' h-[40px] lg:h-[50px] px-[16px] text-[18px] bg-[#F2F2F2]   
                                    flex  items-center text-[#797979] rounded-[10px] '>Commercial</div>
                </div>
            </div>

            <button className='text-[18px] lg:text-[22px] font-bold text-white h-[40px] lg:h-[50px] bg-[#714E95] rounded-[10px] flex justify-center items-center '>
                Apply Filters
            </button>

        </div>
    )
}

export default ApplyFilter