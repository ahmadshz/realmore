import React from 'react'

const LogoSection = ({logo}) => {
    return (
        <div >
            <div className='h-screen  lg:w-[200px] xl:w-[305px] hidden lg:flex justify-center items-center border-r border-[#D3D3D3]-r'>
                <img className='lg:w-[140px] xl:w-[155px] 2xl:w-[186px]' src={logo} alt="Logo" />
            </div>
        </div>
    );
};

export default LogoSection
