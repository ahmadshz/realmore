import React from 'react'
import SideBar from '../../../Components/Dashboard/DashboardBank/SideBar'
import { Outlet } from 'react-router-dom'
import EndSection from '../../../Components/Dashboard/DashboardBank/EndSection'

const DashboardBank = () => {
    return (
        <div>
            <SideBar />
            <EndSection />
            <div className=' lg:ml-[210px] xl:ml-[260px]  2xl:ml-[300px] lg:w-[530px] xl:w-[900px] 2xl:w-[1242px] overflow-x-hidden'>
                <Outlet />
            </div>
        </div>
    )
}

export default DashboardBank
