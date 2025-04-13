import React from 'react'

const FilterDate = ({ className }) => {
    return (
        <div className={`h-fit  mt-[30px] lg:mt-[40px] flex flex-col gap-[20px] lg:gap-[40px] ${className}`}>
            <div className='flex flex-col gap-[24px]'>
                <h1 className='font-bold text-[24px] leading-5'>Filter</h1>
                <div className='grid grid-cols-2 gap-[20px] lg:gap-[24px]'>
                    {['Start Date', 'End Date'].map((item, index) => (
                        <input key={index} className='border border-[#D3D3D3] h-[40px] lg:h-[50px] px-[16px] text-[18px]
                                flex items-center text-[#858585] rounded-[10px] '
                            placeholder={item}
                        />
                    ))}

                </div>
            </div>
            <button className='text-[18px] lg:text-[22px] font-bold text-white h-[40px] lg:h-[50px] bg-black rounded-[10px] flex justify-center items-center '>
                Apply Filters
            </button>
        </div>
    )
}

export default FilterDate