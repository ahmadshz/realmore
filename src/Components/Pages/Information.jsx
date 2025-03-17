import React from 'react'


const Information = ({ about, privacy, contact, services }) => {
    return (
        <div>
            <div className='lg:w-[220px]  xl:w-[263px] border border-[#D3D3D3] px-[16px] py-[6px]   rounded-[10px] flex flex-col justify-evenly'>
                <div className='flex py-[2px] justify-between items-center '>
                    <h1 className='text-[16px] text-[#858585]'>About us</h1>
                    <img className='w-[18px] h-[14px]' src={about} alt='' />
                </div>
                <div className='flex py-[2px]  justify-between items-center '>
                    <h1 className='text-[16px] text-[#858585]'>Privacy Policy</h1>
                    <img className='w-[18px] h-[14px]' src={privacy} alt='' />
                </div>
                <div className='flex py-[2px] justify-between items-center '>
                    <h1 className='text-[16px] text-[#858585]'>Contact us</h1>
                    <img className='w-[18px] h-[14px]' src={contact} alt='' />
                </div>
                <div className='flex py-[2px] justify-between items-center '>
                    <h1 className='text-[16px] text-[#858585]'>Terms of Servics</h1>
                    <img className='w-[18px] h-[14px]' src={services} alt='' />
                </div>
            </div>

        </div>
    )
}

export default Information
