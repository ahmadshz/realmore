import React, { useState } from 'react'
import TopNavigation from './TopNavigation'
import ClientInfoCard from './ClientInfoCard'
import PropertiesType from '../DashboardEstate/PropertiesType'
import PropertyCard from './PropertyCard'
import real from '../../../assets/iconRealEstate/real.png'
import ScrollBarY from '../ScrollBarY'

const CurrentDeals = () => {
    const [selected, setSelected] = useState("Overview");
    const propertyTypes = ["Overview", "Properties", "Scheduled visits", "Offering"];

    const propertyData = [
        {
            image: real,
            type: "Overview",
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
            type: "Properties",
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
            type: "Properties",
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
        <div className='flex flex-col gap-[20px] '>
            <TopNavigation color={'#EE7A32'} />
            <div className="flex items-start gap-[20px]  ">
                {/* Fixed Client Info Card */}
                <div className="flex-none min-w-[320px] md:min-w-[350px]">
                    <ClientInfoCard />
                </div>

                {/* Property Cards Section */}
                <div className="flex flex-col flex-1 -mt-4 gap-1">
                    <PropertiesType selected={selected} setSelected={setSelected} propertyTypes={propertyTypes} bg={'bg-[#EA9B23]'} />

                    {/* Scrollable Property Cards */}
                    <ScrollBarY
                        width="auto"  // Container takes available space
                        scrollWidth="655px"  // Scrollable area limited to 600px
                        height="auto"
                        scrollBarHeight={2}
                        gap={12}
                        hideNativeScrollbar={true}
                        scrollSpeed={3} // 3x faster scrolling
                    >
                        <div className="mt-[10px] whitespace-nowrap flex gap-4">
                            {filteredProperties.length > 0 ? (
                                filteredProperties.map((item, index) => (
                                    <div key={index} className="flex-none w-[310px] lg:w-auto">
                                        <PropertyCard property={item} />
                                    </div>
                                ))
                            ) : (
                                <div className="w-full flex justify-center items-center">
                                </div>
                            )}
                        </div>
                    </ScrollBarY>
                </div>
            </div>

        </div>
    )
}

export default CurrentDeals