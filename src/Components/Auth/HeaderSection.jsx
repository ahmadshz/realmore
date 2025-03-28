import React from 'react'

const HeaderSection = ({ titleSeconde, firstTitle, notification,font }) => {
    return (
        <div className=' flex justify-between items-center'>
            <div className='flex flex-col'>
                <h1 className={`text-[18px] lg:text-[32px] ${font}`}>{firstTitle}</h1>
                <h2 className='text-[13px] text-[#858585]  lg:text-[16px]'>{titleSeconde}</h2>
            </div>
            <img className='hidden lg:block' src={notification} alt='' />
        </div>
    );
};

export default HeaderSection
