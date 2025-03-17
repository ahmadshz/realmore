import React from 'react'

const HeaderSection = ({titleSeconde ,firstTitle}) => {
    return (
        <div className='flex flex-col'>
            <h1 className=' text-[18px] lg:text-[32px]'>{firstTitle}</h1>
            <h2 className='text-[13px] text-[#858585]  lg:text-[16px]'>{titleSeconde}</h2>
        </div>
    );
};

export default HeaderSection
