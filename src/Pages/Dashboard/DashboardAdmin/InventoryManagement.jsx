import React, { useState } from 'react'
import HeaderDashboard from '../../../Components/Dashboard/DashboardBank/HeaderDashboard'
import header from '../../../assets/IconAdmin/LogoHeader.svg'
import notification from '../../../assets/IconAdmin/notification.svg'
import HeaderSection from '../../../Components/Auth/HeaderSection'
import ListProperties from '../../../Components/Dashboard/DashboardEstate/ListProperties'
import PropertiesType from '../../../Components/Dashboard/DashboardEstate/PropertiesType'
import PropertiesCard from '../../../Components/Dashboard/DashboardEstate/PropertiesCard'
import real from '../../../assets/iconRealEstate/real.png'
import circle from '../../../assets/IconAdmin/circle.svg'
import location from '../../../assets/IconAdmin/location.svg'
import map from '../../../assets/IconAdmin/map.svg'
import ScrollBarY from '../../../Components/Dashboard/ScrollBarY'

const InventoryManagement = () => {
    const firstTitle = 'Inventory Management';
    const titleSeconde = 'Manage your client deal';

    const [selected, setSelected] = useState("Duplex");

    const propertyData = [
        {
            image: real,
            type: "Duplex",
            budget: "5,000,000",
            visits: 12,
            preferences: [
                { label: "Property City", value: "Jedda", icon: location },
                { label: "Property Direction", value: "South", icon: map },
                { label: "Property District", value: "Albawadi", icon: map },
                { label: "Property Type", value: "Albawadi", icon: map },
                { label: "Property Build Type", value: "Jedda", icon: location },
                { label: "Property Bedrooms", value: "4 Bedrooms", icon: map },
                { label: "Property Area", value: "284 m²", icon: map },
            ],
            consultant: "Mohamed. M",
            visitDate: "10/10/2025",
            visitTime: "12:00 PM",
        },
        {
            image: real,
            type: "Duplex",
            budget: "5,000,000",
            visits: 12,
            preferences: [
                { label: "Property City", value: "Jedda", icon: location },
                { label: "Property Direction", value: "South", icon: map },
                { label: "Property District", value: "Albawadi", icon: map },
                { label: "Property Type", value: "Albawadi", icon: map },
                { label: "Property Build Type", value: "Jedda", icon: location },
                { label: "Property Bedrooms", value: "4 Bedrooms", icon: map },
                { label: "Property Area", value: "284 m²", icon: map },
            ],
            consultant: "Mohamed. M",
            visitDate: "10/10/2025",
            visitTime: "12:00 PM",
        },
        {
            image: real,
            type: "Duplex",
            budget: "5,000,000",
            visits: 12,
            preferences: [
                { label: "Property City", value: "Jedda", icon: location },
                { label: "Property Direction", value: "South", icon: map },
                { label: "Property District", value: "Albawadi", icon: map },
                { label: "Property Type", value: "Albawadi", icon: map },
                { label: "Property Build Type", value: "Jedda", icon: location },
                { label: "Property Bedrooms", value: "4 Bedrooms", icon: map },
                { label: "Property Area", value: "284 m²", icon: map },
            ],
            consultant: "Mohamed. M",
            visitDate: "10/10/2025",
            visitTime: "12:00 PM",
        },
        {
            image: real,
            type: "Duplex",
            budget: "5,000,000",
            visits: 12,
            preferences: [
                { label: "Property City", value: "Jedda", icon: location },
                { label: "Property Direction", value: "South", icon: map },
                { label: "Property District", value: "Albawadi", icon: map },
                { label: "Property Type", value: "Albawadi", icon: map },
                { label: "Property Build Type", value: "Jedda", icon: location },
                { label: "Property Bedrooms", value: "4 Bedrooms", icon: map },
                { label: "Property Area", value: "284 m²", icon: map },
            ],
            consultant: "Mohamed. M",
            visitDate: "10/10/2025",
            visitTime: "12:00 PM",
        },
        {
            image: real,
            type: "Duplex",
            budget: "5,000,000",
            visits: 12,
            preferences: [
                { label: "Property City", value: "Jedda", icon: location },
                { label: "Property Direction", value: "South", icon: map },
                { label: "Property District", value: "Albawadi", icon: map },
                { label: "Property Type", value: "Albawadi", icon: map },
                { label: "Property Build Type", value: "Jedda", icon: location },
                { label: "Property Bedrooms", value: "4 Bedrooms", icon: map },
                { label: "Property Area", value: "284 m²", icon: map },
            ],
            consultant: "Mohamed. M",
            visitDate: "10/10/2025",
            visitTime: "12:00 PM",
        },
        {
            image: real,
            type: "Villa",
            budget: "5,000,000",
            visits: 12,
            preferences: [
                { label: "Property City", value: "Jedda", icon: location },
                { label: "Property Direction", value: "South", icon: map },
                { label: "Property District", value: "Albawadi", icon: map },
                { label: "Property Type", value: "Albawadi", icon: map },
                { label: "Property Build Type", value: "Jedda", icon: location },
                { label: "Property Bedrooms", value: "4 Bedrooms", icon: map },
                { label: "Property Area", value: "284 m²", icon: map },
            ],
            consultant: "Mohamed. M",
            visitDate: "10/10/2025",
            visitTime: "12:00 PM",
        },
        {
            image: real,
            type: "Villa",
            budget: "5,000,000",
            visits: 12,
            preferences: [
                { label: "Property City", value: "Jedda", icon: location },
                { label: "Property Direction", value: "South", icon: map },
                { label: "Property District", value: "Albawadi", icon: map },
                { label: "Property Type", value: "Albawadi", icon: map },
                { label: "Property Build Type", value: "Jedda", icon: location },
                { label: "Property Bedrooms", value: "4 Bedrooms", icon: map },
                { label: "Property Area", value: "284 m²", icon: map },
            ],
            consultant: "Mohamed. M",
            visitDate: "10/10/2025",
            visitTime: "12:00 PM",
        },
        {
            image: real,
            type: "Apartment",
            budget: "5,000,000",
            visits: 12,
            preferences: [
                { label: "Property City", value: "Jedda", icon: location },
                { label: "Property Direction", value: "South", icon: map },
                { label: "Property District", value: "Albawadi", icon: map },
                { label: "Property Type", value: "Albawadi", icon: map },
                { label: "Property Build Type", value: "Jedda", icon: location },
                { label: "Property Bedrooms", value: "4 Bedrooms", icon: map },
                { label: "Property Area", value: "284 m²", icon: map },
            ],
            consultant: "Mohamed. M",
            visitDate: "10/10/2025",
            visitTime: "12:00 PM",
        },


    ];

    // Filter propertyData based on the selected type
    const filteredProperties = propertyData.filter(
        (property) => property.type === selected
    );

    const propertyTypes = ["Duplex", "Villa", "Apartment", "By Developer: Developer name"];



    return (
        <div>
            <HeaderDashboard logo={header} notification={notification} />
            <div className='min-h-screen w-full xl:w-[850px] 2xl:w-[1205px] pt-[50px] lg:pt-[97px]  mb-10 
                        px-[18px] md:px-[40px] lg:px-[20px] xl:px-[40px] 2xl:px-[60px]'>
                {/* Inventory Management Header */}
                <HeaderSection titleSeconde={titleSeconde} firstTitle={firstTitle} notification={notification} />

                {/* Add Properties Button */}
                <ListProperties add='Add Properties' bg={'bg-black'} search="Search clients" title='Listed Properties' />

                {/* Property Type Filter Tabs */}
                <PropertiesType selected={selected} setSelected={setSelected} propertyTypes={propertyTypes} bg={'bg-black'} justify={'justify-center'} />

                {/* Scrollable Property Cards based on selected type */}
                <div className='flex items-center  lg:h-[700px] gap-4 mt-[32px] '>

                    <ScrollBarY
                        width={" w-[385px] xl:w-[765px] 2xl:w-[1080px]"}
                        scrollWidth={" w-[385px] xl:w-[765px] 2xl:w-[1080px]"}
                        height="auto"
                        scrollBarHeight={2}
                        gap={12}
                        hideNativeScrollbar={true}
                        scrollSpeed={5}
                    >
                        {filteredProperties.length > 0 ? (
                            filteredProperties.map((item, index) => (
                                <div key={index} className="flex-none w-[310px] lg:w-auto mb-5 ">

                                    <PropertiesCard property={item} bg={'bg-black'} circle={circle} />

                                </div>
                            ))
                        ) : (
                            // Fallback message if no properties found
                            <div className="w-full flex justify-center items-center">
                                <p className="text-[#858585] text-lg">No properties found for the selected type.</p>
                            </div>
                        )}
                    </ScrollBarY>
                </div>
            </div>
        </div>
    )
}

export default InventoryManagement