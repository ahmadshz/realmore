import React from 'react'
import SideBar from '../../../Components/Dashboard/DashboardBank/SideBar'
import EndSection from '../../../Components/Dashboard/DashboardBank/EndSection'
import { Outlet } from 'react-router-dom'
import logo from '../../../assets/Iconindividual/LogoHeaderIndividual.svg'
import notification from '../../../assets/Iconindividual/notification.svg'
import client from '../../../assets/Iconindividual/client.svg'
import overview from '../../../assets/Iconindividual/overview.svg'


const DashboardIndividual = () => {
    return (
        <div>
            <SideBar
                color='text-[#EE7A32]'
                pathDashboard='dashboard'
                pathClientPage='consultant'
                pathClientPage2='consultant/AddTaskInfo'
                pathClientPage3='consultant'
                logo={logo}
                notification={notification}
                iconCLient={client}
                overview={overview}
                bg='bg-[#EE7A32]'
            />
            <EndSection />
            <div className=' lg:ml-[210px] xl:ml-[260px]  2xl:ml-[305px] lg:w-[530px] xl:w-[900px] 2xl:w-[1242px] overflow-x-hidden'>
                <Outlet />
            </div>
        </div>
    )
}

export default DashboardIndividual