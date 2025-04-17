import React from 'react'
import header from '../../../assets/IconAdmin/LogoHeader.svg'
import notification from '../../../assets/IconAdmin/notification.svg'
import HeaderDashboard from '../../../Components/Dashboard/DashboardBank/HeaderDashboard'
import HeaderSection from '../../../Components/Auth/HeaderSection'
import PerformanceMetrics from '../../../Components/Dashboard/DashboardAdmin/PerformanceMetrics'
import SysPerfMetrics from '../../../Components/Dashboard/DashboardAdmin/SysPerfMetrics'
import ProgressChartAdmin from '../../../Components/Dashboard/DashboardAdmin/ProgressChartAdmin'
import UserRatingsChart from '../../../Components/Dashboard/DashboardAdmin/UserRatingsChart'
import RevenueDistributionChart from '../../../Components/Dashboard/DashboardAdmin/RevenueDistributionChart '
import ExportControls from '../../../Components/Dashboard/DashboardEstate/ExportControls'
import ApplyFilter from '../../../Components/Dashboard/DashboardEstate/ApplyFilter'

const OverviewAdmin = () => {
    return (
        <div>
            {/* Header with logo and notification icon */}
            <HeaderDashboard logo={header} notification={notification} />

            <div className='min-h-screen w-full xl:w-[850px] 2xl:w-[1205px] pt-[50px] lg:pt-[97px] mb-10 
                px-[18px] md:px-[40px] lg:px-[20px] xl:px-[40px] 2xl:px-[60px]'>

                {/* Section displaying the main heading and subtitle */}
                <div className='px-[10px] pb-0 lg:px-0'>
                    <HeaderSection
                        titleSeconde={'Quick snapshot of important data points.'}
                        firstTitle={'Analytics & Performance'}
                        notification={notification} font='font-bold'
                    />
                </div>
                {/* Filter date section */}
                <div className='xl:border border-[#D3D3D3] rounded-[10px] xl:pt-0 xl:p-[40px] pt-0  lg:mt-[60px] px-[10px] pb-0 lg:px-0 '>
                    <ApplyFilter filters={["Apartment", "House", "Commercial"]}
                        className bg={'bg-black'} />
                </div>
                {/* Displaying performance metrics section */}
                <PerformanceMetrics  className='flex flex-col gap-[12px] lg:gap-[24px] lg:border-b pt-[40px] lg:py-[60px] 2xl:px-[60px]' />

                {/* Wrapping chart-related components in a flex container */}
                <div className=' py-[40px] lg:py-[60px] 2xl:p-[60px] flex flex-col gap-[60px]'>

                    {/* Grid container for progress and user ratings charts */}
                    <div className='grid grid-cols-1 xl:grid-cols-2 gap-[20px] 2xl:gap-[40px] '>
                        <ProgressChartAdmin title={'Response Times'} x={'Time'} y={'Response'} />
                        <UserRatingsChart />
                    </div>
                </div>

                {/* System performance metrics section */}
                <SysPerfMetrics />

                {/* Wrapping chart-related components in a flex container */}
                <div className='py-[25px] pt-[40px] lg:py-[60px] 2xl:p-[60px] flex flex-col gap-[12px] lg:gap-[40px]'>
                    <div className='leading-5 flex flex-col lg:gap-[20px] '>
                        <h1 className='text-[18px] lg:text-[28px] font-bold'>System Performance Metrics</h1>
                        <h3 className='text-[13px] lg:text-[16px]'>View performance trends over time</h3>
                    </div>
                    {/* Grid container for progress and user ratings charts */}
                    <div className='grid xl:grid-cols-2  gap-[20px] 2xl:gap-[40px]'>
                        <ProgressChartAdmin title={'Active Users Over Time'} x={'Months'} y={'Users'} />
                        <RevenueDistributionChart />
                    </div>
                </div>
                <div className=' 2xl:border  2xl:p-[60px] pt-0 rounded-[10px] '>
                    <ExportControls bg={'bg-black'} border={'border-black'} />
                </div>

            </div>
        </div>
    )
}

export default OverviewAdmin
