import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import SideBar from '../../../Components/Dashboard/DashboardBank/SideBar';
import EndSection from '../../../Components/Dashboard/DashboardBank/EndSection';
import logo from '../../../assets/IconAdmin/LogoHeader.svg';
import client from '../../../assets/IconAdmin/building.svg';
import notification from '../../../assets/IconAdmin/notification.svg';
import overview from '../../../assets/IconAdmin/overview.svg';

const DashboardQA = () => {
    const location = useLocation();

    // ✅ Check if current route includes 'dashboard' exactly at the end
    const isDashboardPage = location.pathname === '/admin/dashboard';

    return (
        <div>
            <SideBar
                logo={logo}
                pathDashboard='dashboard'
                pathClientPage='inventoryManagement'
                pathClientPage2='clientPage/addClient'
                pathClientPage3='inventoryManagement'
                notification={notification}
                iconCLient={client}
                overview={overview}
                bg='bg-[#050605]'
            />

            {/* ✅ Pass `deals` only on dashboard page */}
            {isDashboardPage ? <EndSection deals /> : <EndSection />}

            <div className='lg:ml-[210px] xl:ml-[260px] 2xl:ml-[305px] lg:w-[530px] xl:w-[900px] 2xl:w-[1242px] overflow-x-hidden'>
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardQA;
