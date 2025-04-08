import React from 'react'
import HeaderSection from '../../../Components/Auth/HeaderSection'
import notification from '../../../assets/IconAdmin/notification.svg'
import NotificationAlerts from '../../../Components/Dashboard/DashboardAdmin/NotificationAlerts'
import AuditLogs from '../../../Components/Dashboard/DashboardAdmin/AuditLogs'

const InformationAdmin = () => {
    const firstTitle = "Hello, Welcome Quality Assurance"
    const titleSeconde = "Manage your properties efficiently."

    return (
        <div className='min-h-screen flex flex-col xl:w-[850px] 2xl:w-[1201px] pt-[50px] lg:pt-[97px] mb-10
                        '>
            {/*Sextion 1 */}
            <section className='px-[18px] md:px-[40px] lg:px-[20px] xl:px-[40px] 2xl:px-[60px]  overflow-x-hidden
                                lg:border-b mb-10 lg:pb-14 flex flex-col gap-[40px] lg:gap-[60px]'>
                <HeaderSection titleSeconde={titleSeconde} firstTitle={firstTitle} notification={notification} font='font-bold' />
                <NotificationAlerts />
            </section>

            {/*Sextion 1 */}
            <section className='px-[18px] md:px-[40px] lg:px-[20px] xl:px-[40px] 2xl:px-[60px]  overflow-x-hidden lg:border-b  pb-14 flex flex-col gap-[60px]'>
                <AuditLogs />
            </section>

        </div>
    )
}

export default InformationAdmin