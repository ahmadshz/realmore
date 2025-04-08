import React from 'react'
import img from '../../../assets/iconRealEstate/real.png'

const ProfileHeader = () => {
    return (
        <div className='flex justify-between items-center flex-wrap xl:flex-nowrap xl:gap-[40px] border-b h-[210px] xl:h-[265px] px-[18px] 
                                    md:px-[40px] lg:px-[20px] xl:px-[40px] 2xl:px-[60px] mt-5'>
            <img className= ' w-[65px] h-[65px] xl:w-[100px] xl:h-[100px] rounded-full  order-1 ' src={img} alt='' />
            <div className='h-[100px] flex flex-col gap-[12px] xl:justify-between xl:w-[500px] 2xl:w-[814px] order-3 xl:order-1'>
                <h1 className='text-[#EE7A32] text-[24px] '>John Doe</h1>
                <div className='text-[12px] bg-[#d9d9d98e]  h-[20px] w-fit flex items-center px-1 rounded-[2px] '>Certified Consultants</div>
                <h1 className='text-[16px]'>Welcome to your Consultants Dashboard</h1>
            </div>
            <div className='bg-[#EE7A32] h-[36px] xl:h-[48px] w-[136px] rounded-[8px] flex items-center justify-center text-white text-[13px] xl:text-[16px] font-bold order-2'>
                View Deals
            </div>
        </div>
    )
}

export default ProfileHeader