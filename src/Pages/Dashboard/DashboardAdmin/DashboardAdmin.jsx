import React from 'react'
import SideBar from '../../../Components/Dashboard/DashboardBank/SideBar'
import { Outlet } from 'react-router-dom'
import EndSection from '../../../Components/Dashboard/DashboardBank/EndSection'
import logo from '../../../assets/IconAdmin/LogoHeader.svg';
import client from '../../../assets/IconAdmin/building.svg';
import notification from '../../../assets/IconAdmin/notification.svg';
import overview from '../../../assets/IconAdmin/overview.svg';

const DashboardAdmin = () => {
    return (
        <div>
            <SideBar
                logo={logo}
                pathDashboard='dashboard'
                pathClientPage='clientPage'
                pathClientPage2='clientPage/addClient'
                pathClientPage3='clientPage'
                notification={notification}
                iconCLient={client}
                overview={overview}
                bg='bg-[#050605]' />
            <EndSection deals />
            <div className=' lg:ml-[210px] xl:ml-[260px]  2xl:ml-[305px] lg:w-[530px] xl:w-[900px] 2xl:w-[1242px] overflow-x-hidden'>
                <Outlet />
            </div>
        </div>
    )
}

export default DashboardAdmin
