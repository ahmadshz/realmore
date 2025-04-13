import React from 'react'
import HeaderSection from '../../../Components/Auth/HeaderSection'
import notification from '../../../assets/IconAdmin/notification.svg'
import NotificationAlerts from '../../../Components/Dashboard/DashboardAdmin/NotificationAlerts'
import AuditLogs from '../../../Components/Dashboard/DashboardAdmin/AuditLogs'
import header from '../../../assets/IconAdmin/LogoHeader.svg'
import HeaderDashboard from '../../../Components/Dashboard/DashboardBank/HeaderDashboard'

const InformationAdmin = () => {
    const firstTitle = "Hello, Welcome Quality Assurance"
    const titleSeconde = "Manage your properties efficiently."

    return (
        <div>
            <HeaderDashboard logo={header} notification={notification} />
            <div className='min-h-screen flex flex-col gap-[40px] lg:gap-[60px] xl:w-[850px] 2xl:w-[1201px] pt-[50px] lg:pt-[97px] mb-10 '>
                {/*Sextion 1 */}
                <section className='px-[18px] md:px-[40px] lg:px-[20px] xl:px-[40px] 2xl:px-[60px]  overflow-x-hidden
                                lg:border-b  lg:pb-14 flex flex-col gap-[40px] lg:gap-[60px]'>
                    <HeaderSection titleSeconde={titleSeconde} firstTitle={firstTitle} notification={notification} font='font-bold' />
                    <NotificationAlerts />
                </section>

                {/*Sextion 1 */}
                <section className='px-[18px] md:px-[40px] lg:px-[20px] xl:px-[40px] 2xl:px-[60px]  overflow-x-hidden
                                lg:border-b  pb-8'>
                    <AuditLogs />
                </section>
            </div>
        </div>
    )
}

export default InformationAdmin