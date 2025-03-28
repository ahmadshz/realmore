import React, { useState } from 'react';
import HeaderSection from '../../../Components/Auth/HeaderSection';
import notification from '../../../assets/iconRealEstate/notification.png';
import real from '../../../assets/iconRealEstate/real.png';
import headerLogo from '../../../assets/iconRealEstate/LogoHeader.png';
import ListProperties from '../../../Components/Dashboard/DashboardEstate/ListProperties';
import PropertiesType from '../../../Components/Dashboard/DashboardEstate/PropertiesType';
import PropertiesCard from '../../../Components/Dashboard/DashboardEstate/PropertiesCard';
import ClientList from '../../../Components/Dashboard/DashboardEstate/ClientList';
import TrackerVisit from '../../../Components/Dashboard/DashboardEstate/TrackerVisit';
import MetricCard from '../../../Components/Dashboard/DashboardBank/MetricCard';
import SalesChart from '../../../Components/Dashboard/DashboardEstate/SalesChart';
import HeaderDashboard from '../../../Components/Dashboard/DashboardBank/HeaderDashboard';

const InformationRealEstate = () => {
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
        },
        {
            image: real,
            type: "Villa",
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
        },
        {
            image: real,
            type: "Villa",
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
        },
        {
            image: real,
            type: "Apartment",
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
        },
    ];

    // Filter propertyData based on the selected type
    const filteredProperties = propertyData.filter(
        (property) => property.type === selected
    );

    return (
        <div>
            <HeaderDashboard logo={headerLogo} notification={notification} />

            <div className='min-h-screen flex flex-col xl:w-[850px] 2xl:w-[1205px] pt-[50px] lg:pt-[97px] px-[18px] md:px-[40px] lg:px-[20px] xl:px-[40px] 2xl:px-[60px] mb-10 overflow-x-hidden'>
                <HeaderSection titleSeconde={titleSeconde} firstTitle={firstTitle} notification={notification} />

                <ListProperties />

                {/* Filter */}
                <PropertiesType selected={selected} setSelected={setSelected} />

                <div className='flex items-center lg:h-[700px] gap-4 mt-[32px] overflow-x-auto whitespace-nowrap'>
                    {filteredProperties.length > 0 ? (
                        filteredProperties.map((item, index) => (
                            <div key={index} className="flex-none w-[310px] lg:w-auto">
                                <PropertiesCard property={item} />
                            </div>
                        ))
                    ) : (
                        <div className="w-full flex justify-center items-center">
                            <p className="text-[#858585] text-lg">No properties found for the selected type.</p>
                        </div>
                    )}
                </div>


                <ClientList />

                <HeaderSection titleSeconde='Client Visit Tracker' firstTitle='View the listed visits' />
                <TrackerVisit />

                <HeaderSection titleSeconde='Track completed sales and financial summaries' firstTitle='Sales Dashboard' />
                <div className='flex flex-col lg:flex-row gap-[10px] lg:gap-[20px]  mt-[40px]'>
                    <MetricCard
                        title="Completed Sales"
                        value="100"
                        desc='+20%'
                        classValue='text-[20px] xl:text-[28px] text-[#714E95] font-bold'
                        className="w-full lg:w-[49%] h-[95px] lg:h-[136px] rounded-[6px]  px-[10px] py-[6px] lg:p-[16px] order-2 xl:order-2"
                    />
                    <MetricCard
                        title="Total Revenue"
                        value="$1,000,000"
                        desc='-10%'
                        classValue='text-[20px] xl:text-[28px] text-[#714E95] font-bold'
                        className="w-full lg:w-[49%] h-[95px] lg:h-[136px] rounded-[6px]  px-[10px] py-[6px] lg:p-[16px] order-2 xl:order-2"
                    />
                </div>
                <SalesChart />

            </div>
        </div>
    );
};

export default InformationRealEstate;