import React from 'react'
import HeaderSection from '../../../Components/Auth/HeaderSection'
import ProfileHeader from '../../../Components/Dashboard/DashboardIndividual/ProfileHeader'
import Progress from '../../../Components/Dashboard/DashboardIndividual/Progress'
import ProgressStats from '../../../Components/Dashboard/DashboardIndividual/ProgressStats'
import ProgressChart from '../../../Components/Dashboard/DashboardIndividual/ProgressChart'
import headerLogo from '../../../assets/Iconindividual/LogoHeaderIndividual.svg'
import notification from '../../../assets/Iconindividual/notification.svg'
import HeaderDashboard from '../../../Components/Dashboard/DashboardBank/HeaderDashboard'

const InformationIndividual = () => {
    const firstTitle = "Hello, Welcome Consultant"
    const titleSeconde = "Manage your clients and deals efficiently"
    return (
        <div >
            <HeaderDashboard logo={headerLogo} notification={notification} />

            <div className='min-h-screen   xl:w-[850px] 2xl:w-[1205px] pt-[50px] lg:pt-[97px]  mb-10 overflow-x-hidden'>
                <div className='px-[18px] md:px-[40px] lg:px-[20px] xl:px-[40px] 2xl:px-[60px]'>
                    <HeaderSection titleSeconde={titleSeconde} firstTitle={firstTitle} />
                </div>
                <div className='flex flex-col gap-[40px] xl:gap-[60px] pr-1'>
                    <ProfileHeader />
                    <Progress />
                    <ProgressStats />
                    <div className='px-[18px] md:px-[40px] lg:px-[20px] xl:px-[40px] 2xl:px-[60px] p-2'>
                        <ProgressChart stroke={'#8c604539'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InformationIndividual