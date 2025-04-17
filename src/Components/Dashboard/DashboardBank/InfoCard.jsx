import React from 'react'


const InfoCard = ({ icon, title, value, currency }) => {
    return (
        <div className=' h-[52px] border border-[#D3D3D3] rounded-[10px] p-[10px] flex items-center gap-[8px] '>
            <div className='flex justify-center items-center w-[32px] h-[32px] rounded-[6px] p-[6px]  bg-[#F6F6F6]'>
                <img src={icon} alt='' />
            </div>
            <div>
                <h1 className='text-[8px] text-[#858585] '>{title}</h1>
                <h1 className='text-[10px] font-bold  text-[#858585] '>{value} <span className='text-[#318C70]'>{currency}</span> </h1>
            </div>

        </div>
    )
}

export default InfoCard