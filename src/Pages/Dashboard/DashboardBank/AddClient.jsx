import React from 'react'
import HeaderSection from '../../../Components/Auth/HeaderSection'
import notification from '../../../assets/IconDashboard/notification.png'
import FormAddClient from '../../../Components/Dashboard/DashboardBank/FormAddClient'
import HeaderDashboard from '../../../Components/Dashboard/DashboardBank/HeaderDashboard'

const AddClient = () => {
    const firstTitle = "Key Metrics Overview"
    const titleSeconde = "Summary of important data points"


    return (
        <div>
            <HeaderDashboard />

            <div className='min-h-screen flex flex-col   xl:w-[850px] 2xl:w-[1217px] 
                            pt-[55px] lg:pt-[97px] px-[18px] md:px-[40px] lg:px-[20px] xl:px-[40px] 2xl:px-[60px] '>
                <div className='hidden lg:flex justify-between items-center'>
                    <HeaderSection titleSeconde={titleSeconde} firstTitle={firstTitle} />
                    <div className='relative'>
                        <img src={notification} alt='' />
                        <span className='absolute top-[-3px] right-[-2px] w-[12px] h-[12px] bg-white
                                 rounded-full text-[10px] border border-[#D3D3D3] flex justify-center items-center'>1</span>
                    </div>
                </div>

                <FormAddClient />

            </div>
        </div>
    )
}

export default AddClient