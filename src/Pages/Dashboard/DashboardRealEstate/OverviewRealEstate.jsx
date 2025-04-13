import React from 'react'
import HeaderSection from '../../../Components/Auth/HeaderSection'
import SalesChart from '../../../Components/Dashboard/DashboardEstate/SalesChart'
import ApplyFilter from '../../../Components/Dashboard/DashboardEstate/ApplyFilter'
import MetricsDashboard from '../../../Components/Dashboard/DashboardEstate/MetricsDashboard'
import ExportControls from '../../../Components/Dashboard/DashboardEstate/ExportControls'
import HeaderDashboard from '../../../Components/Dashboard/DashboardBank/HeaderDashboard'
import logo from '../../../assets/iconRealEstate/LogoHeader.png'
import notification from '../../../assets/iconRealEstate/notification.png'

const OverviewRealEstate = () => {
  return (
    <div>
      <HeaderDashboard logo={logo} notification={notification} />

      <div className='min-h-screen flex flex-col xl:w-[850px] 2xl:w-[1205px] pt-[37px] lg:pt-[97px] px-[18px]
                    md:px-[40px] lg:px-[20px] xl:px-[40px] 2xl:px-[60px] mb-10 overflow-x-hidden'>
        {/*  Apply Filter */}
        <HeaderSection font='font-bold' firstTitle='Key Metrics Overview' titleSeconde='Summary of important data points' />
        <ApplyFilter filters={["Apartment", "House", "Commercial"]}
          bg={'bg-[#714E95]'}
        />

        {/*  Metrics Dashboard */}
        <div className='mt-[20px] lg:my-[30px]'>
          <HeaderSection firstTitle='Sales Dashboard' titleSeconde='Track completed sales and financial summaries' />
        </div>
        <div className='flex flex-col'>
          <div className=' order-2 lg:order-1'>
            <SalesChart />
          </div>
          <div className='order-1 lg:order-2'>
            <MetricsDashboard />
          </div>
        </div>

        {/*  Export Controls  */}
        <ExportControls bg={"bg-[#714E95]"} border={'border-[#714E95]'} textColor={'text-[#714E95]'} mt />
      </div>
    </div>
  )
}

export default OverviewRealEstate