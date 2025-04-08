import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'

const ClientCard = ({budget, name , amount ,city,district , color ,iconMore ,iconCircle ,diagramIcon ,map ,location}) => {

    return (
        <div className='my-[25px] border border-[#D3D3D3] w-[309px] lg:w-[330px] min-h-[292px] rounded-[10px] 
                        p-[10px] lg:p-[20px] flex flex-col  gap-[20px] '>
            {/* Client Name */}
            <div className='flex  justify-between'>
                <h1 className='font-bold text-[18px] '>{name}</h1>
                <Link className=' flex items-center gap-[3px]' >
                    <img src={iconMore} alt='' />
                    <span className='text-[8px] text-[#858585]'>more info</span>
                </Link>
            </div>


            <div className=' flex flex-col gap-[16px]'>
                {/* Mortgage Details */}
                <div className='flex flex-col gap-[8px]'>
                    <h1 className='text-[12px] text-[#858585] '>Mortgage Details</h1>
                    <div className='flex justify-between gap-2 '>
                        <div className='w-[137px] h-[52px] border border-[#D3D3D3] rounded-[10px] p-[10px] flex gap-[8px] '>
                            <div className='flex justify-center items-center w-[32px] h-[32px] rounded-[6px] p-[6px]  bg-[#F6F6F6]'> <img src={iconCircle} alt='' /></div>
                            <div>
                                <h1 className='text-[8px] text-[#858585] '>Budget</h1>
                                <h1 className='text-[10px] font-bold text-[#858585] '>{budget} <span className={`${color}`}>SAR</span> </h1>

                            </div>
                        </div>
                        <div className='w-[137px] h-[52px] border border-[#D3D3D3] rounded-[10px] p-[10px] flex gap-[8px] '>
                            <div className='flex justify-center items-center w-[32px] h-[32px] rounded-[6px] p-[6px]  bg-[#F6F6F6]'> <img src={diagramIcon} alt='' /></div>
                            <div>
                                <h1 className='text-[8px] text-[#858585] '>Loan Amount</h1>
                                <h1 className='text-[10px] font-bold text-[#858585] '>{amount} <span className={`${color}`}>SAR</span> </h1>

                            </div>
                        </div>
                    </div>
                </div>
                {/* Property Details */}
                <div className='flex flex-col gap-[8px]'>
                    <h1 className='text-[12px] text-[#858585] '>Property Details</h1>
                    <div className='flex justify-between'>
                        <div className='w-[137px] h-[52px] border border-[#D3D3D3] rounded-[10px] p-[10px] flex gap-[8px] '>
                            <div className='flex justify-center items-center w-[32px] h-[32px] rounded-[6px] p-[6px]  bg-[#F6F6F6]'>
                             <img src={location} alt='' /></div>
                            <div>
                                <h1 className='text-[8px] text-[#858585] '>Property City</h1>
                                <h1 className='text-[10px] font-bold text-[#858585] '>{city} </h1>

                            </div>
                        </div>
                        <div className='w-[137px] h-[52px] border border-[#D3D3D3] rounded-[10px] p-[10px] flex gap-[8px] '>
                            <div className='flex justify-center items-center w-[32px] h-[32px] rounded-[6px] p-[6px]  bg-[#F6F6F6]'> <img src={map} alt='' /></div>
                            <div>
                                <h1 className='text-[8px] text-[#858585] '>Property District</h1>
                                <h1 className='text-[10px] font-bold text-[#858585] '>{district} </h1>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Property Details */}
                <div className='flex flex-col gap-[8px]'>
                    <h1 className='text-[12px] text-[#858585] '>Property Details</h1>
                    <div className='flex justify-between'>
                        <div className='text-[10px] w-[142px] h-[18px] rounded-[16px] bg-[#F6F6F6] text-[#858585] px-2 flex items-center gap-1'>
                            <span className='w-[5px] h-[5px] rounded-full inline-block bg-[#858585]'></span> Waiting for Consultant</div>
                        <Link className='w-fit flex items-center gap-1 text-[#858585]'>
                            <span className='text-[8px]'>more info</span>
                            <BsArrowRight className='w-[8px]' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientCard
