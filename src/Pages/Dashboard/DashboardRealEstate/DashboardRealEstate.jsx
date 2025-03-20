import React from 'react';
import SideBar from '../../../Components/Dashboard/DashboardBank/SideBar';
import EndSection from '../../../Components/Dashboard/DashboardBank/EndSection';
import { Outlet } from 'react-router-dom';
import logo from '../../../assets/iconRealEstate/LogoHeader.png';
import notification from '../../../assets/iconRealEstate/Notification.png';
import client from '../../../assets/iconRealEstate/iconClient.png';
import overview from '../../../assets/iconRealEstate/overview.png';

const DashboardRealEstate = () => {
    return (
        <div>
            <SideBar
                color='text-[#714E95]'
                pathDashboard='dashboardRealEstate'
                pathClientPage='clientPage'
                pathClientPage2='clientPage/addClient'
                pathClientPage3='clientPage'
                logo={logo}
                notification={notification}
                iconCLient={client}
                overview={overview}
                bg='bg-[#714E95]'
            />
            <EndSection />
            <div className=' lg:ml-[210px] xl:ml-[260px]  2xl:ml-[300px] lg:w-[530px] xl:w-[900px] 2xl:w-[1242px] overflow-x-hidden'>
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardRealEstate;
