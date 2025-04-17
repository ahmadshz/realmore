import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import InfoCard from './InfoCard'

const ClientCard = ({ budget, name, amount, city, district, color, iconMore, iconCircle, diagramIcon, map, location }) => {

    return (
        <div className='my-[25px]  border border-[#D3D3D3] w-[309px] lg:w-[330px] min-h-[292px] rounded-[10px] 
                        p-[10px] lg:p-[20px] flex flex-col flex-shrink-0  gap-[20px]  '>
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
                    <div className='grid grid-cols-2 gap-2 '>
                        <InfoCard icon={iconCircle} title={'Budget'} value={budget} currency={'SAR'} />
                        <InfoCard icon={diagramIcon} title={'Budget'} value={budget} currency={'SAR'} />
                    </div>
                </div>
                {/* Property Details */}
                <div className='flex flex-col gap-[8px]'>
                    <h1 className='text-[12px] text-[#858585] '>Property Details</h1>
                    <div className='grid grid-cols-2 gap-[8px]'>
                        <InfoCard icon={location} title={'Budget'} value={budget} currency={'SAR'} />
                        <InfoCard icon={map} title={'Budget'} value={budget} currency={'SAR'} />
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
