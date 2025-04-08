import React from 'react'
import HeaderSection from '../../../Components/Auth/HeaderSection'
import notification from '../../../assets/Iconindividual/notification.svg'
import AlertMessage from '../../../Components/Dashboard/DashboardIndividual/AlertMessage'
import TopNavigation from '../../../Components/Dashboard/DashboardIndividual/TopNavigation'
import CurrentDeals from '../../../Components/Dashboard/DashboardIndividual/CurrentDeals'

const ConsulatePage = () => {
    const firstTitle = "Hello, Welcome Consultant"
    const titleSeconde = "Manage your clients and deals efficiently"

    return (
        <div className='min-h-screen xl:w-[850px] 2xl:w-[1205px] pt-[50px] lg:pt-[97px]  mb-10 overflow-x-hidden
                        px-[18px] md:px-[40px] lg:px-[20px] xl:px-[40px] 2xl:px-[60px]'>
            <div className='flex flex-col gap-[50px] lg:gap-60px]'>
                <HeaderSection firstTitle={firstTitle} titleSeconde={titleSeconde} font='font-bold' notification={notification} />
                <AlertMessage />
                <CurrentDeals />
            </div>
        </div>
    )
}

export default ConsulatePage