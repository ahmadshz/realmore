import React, { useState } from 'react';
import notification from '../../../assets/iconRealEstate/notification.png';
import HeaderSection from '../../../Components/Auth/HeaderSection';
import AddPropertiesDate from '../../../Components/Dashboard/DashboardEstate/AddPropertiesDate';
import HeaderDashboard from '../../../Components/Dashboard/DashboardBank/HeaderDashboard';
import header from '../../../assets/iconRealEstate/LogoHeader.png';
import AddPropertiesCSV from '../../../Components/Dashboard/DashboardEstate/AddPropertiesCSV';

const ClientPageRealEstate = () => {
    const firstTitle = 'Adding New Property';
    const titleSeconde = 'Property Preferences';

    // State 
    const [selected, setSelected] = useState('Date'); 

    return (
        <div>
            <HeaderDashboard logo={header} notification={notification} />

            <div className='min-h-screen flex flex-col xl:w-[850px] 2xl:w-[1205px] pt-[50px] lg:pt-[97px] px-[18px] md:px-[40px] lg:px-[20px] xl:px-[40px] 2xl:px-[60px] mb-10 overflow-x-hidden'>
                <HeaderSection titleSeconde={titleSeconde} firstTitle={firstTitle} notification={notification} />

                {/* Listed Properties */}
                <div className=' lg:border border-[#D3D3D3] min-h-[400px] rounded-[10px] lg:p-[60px] mt-[20px] lg:mt-[60px]'>
                    <div>
                        <h1 className='text-[26px] font-bold'>Listed Properties</h1>
                        <div className='flex items-center gap-2 mt-3 mb-[35px]'>
                            <div
                                onClick={() => setSelected('Date')}
                                className={`px-[14px] h-[36px] text-[12px]  flex justify-center items-center w-fit rounded-[6px] cursor-pointer  
                                ${selected === 'Date' ? "bg-[#714E95] text-white font-bold" : "border border-[#D3D3D3]"}`}>
                                Date
                            </div>
                            <div
                                onClick={() => setSelected('CSV')}
                                className={`px-[14px] h-[36px] text-[12px]  flex justify-center items-center w-fit rounded-[6px] cursor-pointer 
                                ${selected === 'CSV' ? "bg-[#714E95] text-white font-bold" : "border border-[#D3D3D3]"}`}>
                                CSV
                            </div>
                        </div>
                    </div>
                    {
                        selected === 'Date' ? <AddPropertiesDate /> : <AddPropertiesCSV />
                    }
                </div>
            </div>
        </div>
    );
};

export default ClientPageRealEstate;
