import React from 'react';
import search from '../../../assets/IconDashboard/ic-search.png';
import ClosedDeals from './ClosedDeals';
import Information from '../../Pages/Information';
import about from '../../../assets/icons/aboutus.png';
import privacy from '../../../assets/icons/privacy.png';
import contact from '../../../assets/icons/contact.png';
import services from '../../../assets/icons/services.png';

const EndSection = ({ deals }) => {
    return (
        <div className='hidden fixed right-0 lg:w-[280px] xl:w-[331px] 2xl:w-[400px] border-l h-screen lg:flex flex-col justify-between items-center py-[40px]'>
            {/* Search Bar */}
            <div className='w-[243px] border-b border-[#D3D3D3] relative'>
                <input
                    type='text'
                    className='w-full h-full py-[8px] focus:outline-none'
                    placeholder='Search in site'
                />
                <img
                    className='absolute right-0 top-1/2 transform -translate-y-1/2'
                    src={search}
                    alt=''
                />
            </div>

            {/* Closed Deals and Information Sections */}
            {deals &&
                <ClosedDeals />
            }
            <Information about={about} privacy={privacy} contact={contact} services={services} />
        </div>
    );
};

export default EndSection;