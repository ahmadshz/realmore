import React from 'react'

const Progress = () => {
    return (
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
    )
}

export default Progress