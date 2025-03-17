import React from 'react'
import HeaderSection from '../../../Components/Auth/HeaderSection'
import { Link } from 'react-router-dom'
import addClient from '../../../assets/IconDashboard/addClient.png'
import ClientCard from '../../../Components/Dashboard/DashboardBank/ClientCard'
import MetrixCard from '../../../Components/Dashboard/DashboardBank/MetrixCard'
import HeaderDashboard from '../../../Components/Dashboard/DashboardBank/HeaderDashboard'

const InformationClients = () => {
    const firstTitle = "Hello, Welcome Bank Employee"
    const titleSeconde = "Manage your properties efficiently."

    return (
        <div>
            <HeaderDashboard />
            <div className='min-h-screen flex flex-col   xl:w-[850px] 2xl:w-[1217px] pt-[55px] lg:pt-[97px] px-[18px] md:px-[40px] lg:px-[20px] xl:px-[40px] 2xl:px-[60px] '>
                <HeaderSection titleSeconde={titleSeconde} firstTitle={firstTitle} />
                <div className='mt-[28px]'>
                    <div className='flex justify-between '>
                        <h1 className='hidden lg:block font-bold text-[22px]'>Clients</h1>
                        <Link
                            className='w-[124px] h-[28px] rounded-[4px] py-[4px] px[12px] bg-[#076152] text-white text-[14px] font-bold flex justify-center items-center gap-[10px]'
                            to={'/bankemployee/clientPage/addClient'} >
                            <img src={addClient} alt='' />
                            <span>Add Client</span>
                        </Link>
                    </div>
                    <div className=' flex gap-3 overflow-x-hidden xl:w-[759px] 2xl:w-[1085px] '>
                        <ClientCard />
                        <ClientCard />
                        <ClientCard />

                    </div>

                    <MetrixCard />
                </div>
            </div>
        </div>
    )
}

export default InformationClients
