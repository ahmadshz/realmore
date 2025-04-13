import React, { useState } from 'react'

const ApplyFilter = ({ filters , className , bg }) => {
    const [selected, setSelected] = useState('Apartment')

    return (
        <div className={` h-fit ${className ? "" : "lg:border border-[#D3D3D3] rounded-[10px] p-[10px] lg:p-[24px]"}  mt-[30px] lg:mt-[40px] 
                        flex flex-col gap-[20px] lg:gap-[40px] `}>
            <div className='flex flex-col gap-[20px] lg:gap-[24px] '>
                {/* Date Filter */}
                <div className='grid grid-cols-2 gap-[20px] lg:gap-[24px]'>
                    {['Select Date', 'Select Date'].map((item, index) => (
                        <input key={index} className='border border-[#D3D3D3] h-[40px] lg:h-[50px] px-[16px] text-[18px]
                                    flex items-center text-[#858585] rounded-[10px] '
                            placeholder={item}
                        />
                    ))}

                </div>

                {/** Status Filter */}
                {filters &&
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-[20px] lg:gap-[24px]'>
                        {filters.map((item, index) => (
                            <div
                                onClick={() => setSelected(item)}
                                key={index}
                                className={` ${selected === item ? `border border-[#D3D3D3] ${bg} text-white` : "bg-[#F2F2F2] text-[#858585]"}
                                 h-[40px] lg:h-[50px] px-[16px] text-[18px]  flex  items-center rounded-[10px] cursor-pointer`}>
                                {item}
                            </div>
                        ))}
                    </div>
                }
            </div>

            <button className={`text-[18px] lg:text-[22px] font-bold text-white h-[40px] lg:h-[50px] ${bg} rounded-[10px]
                               flex justify-center items-center cursor-pointer `}>
                Apply Filters
            </button>

        </div>
    )
}

export default ApplyFilter