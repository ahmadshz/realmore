import React from 'react';
import arrow from '../../../assets/IconDashboard/arrowRight.png';

const ClosedDeals = () => {
    return (
        <div className='lg:w-[220px] lg:min-h-[300px] xl:w-[263px] xl:h-[350px] 2xl:w-[263px] 2xl:h-[350px] rounded-[10px] border border-[#D3D3D3]'>
            {/* Header */}
            <div className='p-4 border-b mb-2 border-[#D3D3D3] font-bold text-[16px]'>Closed Deals</div>

            {/* List of Closed Deals */}
            <div className='px-4 py-1 flex justify-between items-center'>
                <div>
                    <h1 className='text-[13px]'>Talal Hamada</h1>
                    <h1 className='text-[9px] text-[#858585]'>1 week ago</h1>
                </div>
                <img src={arrow} alt='' />
            </div>
            <div className='px-4 py-1 flex justify-between items-center'>
                <div>
                    <h1 className='text-[13px]'>Talal Hamada</h1>
                    <h1 className='text-[9px] text-[#858585]'>1 week ago</h1>
                </div>
                <img src={arrow} alt='' />
            </div>
            <div className='px-4 py-1 flex justify-between items-center'>
                <div>
                    <h1 className='text-[13px]'>Talal Hamada</h1>
                    <h1 className='text-[9px] text-[#858585]'>1 week ago</h1>
                </div>
                <img src={arrow} alt='' />
            </div>
            <div className='px-4 py-1 flex justify-between items-center'>
                <div>
                    <h1 className='text-[13px]'>Talal Hamada</h1>
                    <h1 className='text-[9px] text-[#858585]'>1 week ago</h1>
                </div>
                <img src={arrow} alt='' />
            </div>
            <div className='px-4 py-1 flex justify-between items-center'>
                <div>
                    <h1 className='text-[13px]'>Talal Hamada</h1>
                    <h1 className='text-[9px] text-[#858585]'>1 week ago</h1>
                </div>
                <img src={arrow} alt='' />
            </div>
            <div className='px-4 py-1 flex justify-between items-center'>
                <div>
                    <h1 className='text-[13px]'>Talal Hamada</h1>
                    <h1 className='text-[9px] text-[#858585]'>1 week ago</h1>
                </div>
                <img src={arrow} alt='' />
            </div>

            {/* More Link */}
            <div className='underline px-4 py-1 text-[10px] font-bold'>More</div>
        </div>
    );
};

export default ClosedDeals;