import React from 'react'
import alert from '../../../assets/Iconindividual/alert.svg'

const AlertMessage = () => {
    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-[16px]'>
                <div className='flex items-center gap-[16px] bg-[#FEF1F1] h-[36px] rounded-[4px] px-[12px] '>
                    <img src={alert} alt='' />
                    <h1 className='text-[16px] text-[#EA2225] '>Alert 1</h1>
                </div>
                <h2 className='text-[16px] font-bold '>You have to upload your REGA certification</h2>
            </div>
            <div className='text-white text-[16px] font-bold bg-[#EE7A32] rounded-[8px] h-[48px] w-[150px] flex items-center justify-center '>Upload</div>

        </div>
    )
}

export default AlertMessage