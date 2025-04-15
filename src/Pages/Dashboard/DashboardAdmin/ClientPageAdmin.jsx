import React, { useState } from 'react'
import notification from '../../../assets/IconAdmin/notification.svg'
import HeaderSection from '../../../Components/Auth/HeaderSection'
import ClientList from '../../../Components/Dashboard/DashboardEstate/ClientList'
import HeaderDashboard from '../../../Components/Dashboard/DashboardBank/HeaderDashboard'
import header from '../../../assets/IconAdmin/LogoHeader.svg'

const ClientPageAdmin = ({title}) => {
    const [selected, setSelected] = useState('All Deals')


    const titleSeconde = "Manage your properties efficiently."
    const clients = [
        {
            name: "Client Name",
            phone: "05 123 456 78",
            consultant: "Consultant Name",
            mortgage: {
                budget: "5,000,000",
                loan: "1,000,000",
            },
            properties: [
                { label: "Property City", value: "Jedda" },
                { label: "Property District", value: "Albawadi" },
                { label: "Property District", value: "Albawadi" },
                { label: "Property City", value: "Jedda" },
                { label: "Property District", value: "Albawadi" },
                { label: "Property District", value: "Albawadi" },
            ],
        },
        {
            name: "Ahmad",
            phone: "05 123 456 78",
            consultant: "Consultant Name",
            mortgage: {
                budget: "5,000,000",
                loan: "1,000,000",
            },
            properties: [
                { label: "Property City", value: "Jedda" },
                { label: "Property District", value: "Albawadi" },
                { label: "Property District", value: "Albawadi" },
                { label: "Property City", value: "Jedda" },
                { label: "Property District", value: "Albawadi" },
                { label: "Property District", value: "Albawadi" },
            ],
        },


    ];

    return (
        <div>
        <HeaderDashboard logo={header} notification={notification} />

            <div className='min-h-screen w-full xl:w-[850px] 2xl:w-[1205px] pt-[50px] lg:pt-[97px]  mb-10 overflow-x-hidden
                        px-[18px] md:px-[40px] lg:px-[20px] xl:px-[40px] 2xl:px-[60px]'>
                <HeaderSection firstTitle={title} titleSeconde={titleSeconde} font='font-bold' notification={notification} />
                <ClientList clients={clients} title="Clients" add="Add Client" search="Search clients" bg={'bg-black'} mb />
                <ClientList
                    mt={'mt-0'}
                    mb
                    clients={clients}
                    add="Add Deals"
                    bg={'bg-black'}
                    search="Search clients"
                    title='Deals'
                    filterType
                    selected={selected}
                    setSelected={setSelected}
                    closedDeals
                    notes
                    bgDeal={'bg-[#DDFFE3]'}
                    textColor={'text-[#1BC13F]'}
                />
                <ClientList
                    mt={'mt-0'}
                    mb
                    clients={clients}
                    add="Add Consultant"
                    bg={'bg-black'}
                    search="Search Consultants"
                    title='Consultants'
                    closedDeals
                    notes
                    bgDeal={'bg-[#FFF1DD]'}
                    textColor={'text-[#EA9A22]'}
                />
            </div>
        </div>
    )
}

export default ClientPageAdmin