import React, { useEffect, useState } from 'react'
import HeaderSection from '../../../Components/Auth/HeaderSection'
import { Link } from 'react-router-dom'
import addClient from '../../../assets/IconDashboard/addClient.png'
import notification from '../../../assets/IconDashboard/notification.png'
import ClientCard from '../../../Components/Dashboard/DashboardBank/ClientCard'
import MetrixCard from '../../../Components/Dashboard/DashboardBank/MetrixCard'
import HeaderDashboard from '../../../Components/Dashboard/DashboardBank/HeaderDashboard'
import axios from 'axios'
import { baseUrl } from '../../../Api/Api'
import Cookies from 'universal-cookie'

const InformationClients = () => {
    const [clients, setClients] = useState([])

    const cookies = new Cookies()
    const token = cookies.get('auth_token')

    const firstTitle = "Hello, Welcome Bank Employee"
    const titleSeconde = "Manage your properties efficiently."

    useEffect(() => {
        try {
            axios.get(`${baseUrl}/bankclient/clients`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
                .then(response => { setClients(response.data) })
        } catch (err) {
            console.log(err)
        }
    }, [])

    return (
        <div>
            <HeaderDashboard />
            <div className='min-h-screen flex flex-col   xl:w-[850px] 2xl:w-[1217px] pt-[55px] lg:pt-[97px] px-[18px]
             md:px-[40px] lg:px-[20px] xl:px-[40px] 2xl:px-[60px] '>
                <HeaderSection titleSeconde={titleSeconde} firstTitle={firstTitle} notification={notification} />
                <div className='mt-[40px]'>
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
                        {clients.map((item, index) => (
                            <ClientCard
                                key={index}
                                name={`${item.firstName} ${item.lastName}`}
                                budget={item.budget}
                                amount={item.approvedLoanAmount}
                                city={item.propertyCity}
                                district={item.propertyDistrict}
                            />
                        ))}

                    </div>

                    <MetrixCard />
                </div>
            </div>
        </div>
    )
}

export default InformationClients
