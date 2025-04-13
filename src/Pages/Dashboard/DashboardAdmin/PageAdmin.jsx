import React, { useState } from 'react'
import header from '../../../assets/IconAdmin/LogoHeader.svg'
import notification from '../../../assets/IconAdmin/notification.svg'
import HeaderDashboard from '../../../Components/Dashboard/DashboardBank/HeaderDashboard'
import HeaderSection from '../../../Components/Auth/HeaderSection'
import Table from '../../../Components/Dashboard/DashboardAdmin/Table'
import PlatformSettings from '../../../Components/Dashboard/DashboardAdmin/PlatformSettings'

const PageAdmin = () => {
    const [filter, setFilter] = useState('All')

    return (
        <div>
            <HeaderDashboard logo={header} notification={notification} />

            <div className='min-h-screen w-full xl:w-[850px] 2xl:w-[1205px] pt-[50px] lg:pt-[97px]  mb-10 
                        px-[18px] md:px-[40px] lg:px-[20px] xl:px-[40px] 2xl:px-[60px] flex flex-col gap-[30px] lg:gap-[60px]'>

                <HeaderSection
                    titleSeconde={'Manage your properties efficiently.'}
                    firstTitle={'Hello, Welcome Admin'}
                    notification={notification}
                    font={'font-bold'}
                />

                <section className='flex flex-col gap-[16px] lg:gap-[24px]'>
                    <div className='flex flex-col gap-[10px] lg:gap-[24px] leading-6'>
                        <h1 className='text-[22px] lg:text-[40px]'>Users Permission</h1>
                        <h2 className='text-[12px] lg:text-[16px]'>Find the details below to about users</h2>
                        <div className='flex items-center gap-[12px]'>
                            {
                                ["All", "Notifications", "Alerts"].map(item => (
                                    <div
                                        key={item}
                                        onClick={() => setFilter(item)}
                                        className={`h-[36px] px-[12px] w-fit flex items-center justify-center border border-[#D3D3D3] rounded-[6px]
                                                           text-[12px] cursor-pointer
                                                   ${filter === item ? "bg-black text-white font-bold" : ""}
                                                   `}>
                                        {item}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>

                {/* Table Component */}
                <Table />

                {/* */}
                <PlatformSettings />

            </div>
        </div>
    )
}

export default PageAdmin