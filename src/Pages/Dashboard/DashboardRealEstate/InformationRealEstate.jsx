import React from 'react'
import HeaderSection from '../../../Components/Auth/HeaderSection'
import notification from '../../../assets/iconRealEstate/notification.png'
import real from '../../../assets/iconRealEstate/real.png'
import ListProperties from '../../../Components/Dashboard/DashboardEstate/ListProperties'
import PropertiesType from '../../../Components/Dashboard/DashboardEstate/PropertiesType'
import PropertiesCard from '../../../Components/Dashboard/DashboardEstate/PropertiesCard'
import ClientList from '../../../Components/Dashboard/DashboardEstate/ClientList'


const InformationRealEstate = () => {
    const firstTitle = 'Inventory Management'
    const titleSeconde = 'Manage your client deal'

    const propertyData = {
        image: real,
        type: "Duplex",
        budget: "5,000,000",
        visits: 12,
        preferences: [
            { label: "Property City", value: "Jedda" },
            { label: "Property Direction", value: "South" },
            { label: "Property District", value: "Albawadi" },
            { label: "Property Type", value: "Albawadi" },
            { label: "Property Build Type", value: "Jedda" },
            { label: "Property Bedrooms", value: "4 Bedrooms" },
            { label: "Property Area", value: "284 m²" },
        ],
        consultant: "Mohamed. M",
        visitDate: "10/10/2025",
        visitTime: "12:00 PM",
    };

    return (
        <div className='min-h-screen flex flex-col   xl:w-[850px] 2xl:w-[1205px] pt-[55px] lg:pt-[97px] px-[18px]
             md:px-[40px] lg:px-[20px] xl:px-[40px] 2xl:px-[60px] mb-10 overflow-x-hidden '>
            <HeaderSection titleSeconde={titleSeconde} firstTitle={firstTitle} notification={notification} />

            <ListProperties />

            {/*Filter */}
            <PropertiesType />

            <div className='flex items-center gap-4 mt-[32px] w-[90%] '>
                <PropertiesCard property={propertyData} />
                <PropertiesCard property={propertyData} />
                <PropertiesCard property={propertyData} />
            </div>

            <ClientList/>

        </div>
    )
}

export default InformationRealEstate