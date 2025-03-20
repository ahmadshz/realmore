import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const SideBar = ({
    logo,
    color,
    notification,
    bg,
    iconCLient,
    overview,
    pathDashboard,
    pathClientPage,
    pathClientPage2,
    pathClientPage3,
}) => {
    const location = useLocation();

    const navLinks = [
        {
            path: pathDashboard,
            title: 'Dashboard',
            icon: notification,
            notifications: 1,
            icon2: true,
        },
        {
            path: pathClientPage,
            title: 'Client',
            icon: iconCLient,
            path2: pathClientPage2,
            path3: pathClientPage3,
        },
        {
            path: 'overview/metrics',
            title: 'Overview',
            icon: overview,
        },
    ];

    return (
        <div className='hidden lg:w-[200px] xl:w-[260px] 2xl:w-[306px] h-screen fixed lg:flex flex-col justify-between items-center py-[40px] border border-[#D3D3D3]-r'>
            {/* Logo Section */}
            <img className='w-[140px] xl:w-[155px] 2xl:w-[180px]' src={logo} alt='Logo' />

            {/* NavLinks Section */}
            <div className='flex flex-col gap-[12px]'>
    {navLinks.map((link, index) => {
        const isParentActive =
            location.pathname.includes(link.path) ||
            location.pathname.includes(link.path2) ||
            location.pathname.includes(link.path3);

        return (
            <div key={index} className='relative'>
                {/* Parent NavLink */}
                <NavLink
                    to={link.path}
                    className={
                        `relative flex flex-col py-[10px] lg:px-[10px] xl:px-[20px] ${color}
                        ${isParentActive ? 'bg-[#F0F0F0] font-bold' : 'bg-white'} 
                        lg:w-[160px] xl:w-[218px] 2xl:w-[218px] min-h-[44px] rounded-[4px]`
                    }
                >
                    {/* Icon and Title */}
                    <div className='flex items-center gap-[12px]'>
                        <div className='relative'>
                            <img src={link.icon} alt={`${link.title} Icon`} />
                            {link.notifications && (
                                <div className='absolute top-[-3px] right-[-2px] w-[12px] h-[12px] bg-white rounded-full 
                                            text-[10px] border border-[#D3D3D3] flex justify-center items-center'>
                                    {link.notifications}
                                </div>
                            )}
                        </div>
                        <div className='text-[16px]'>{link.title}</div>
                    </div>

                    {/* Icon2 circle notification */}
                    {link.icon2 && (
                        <div className={`absolute bottom-3 right-[20px] w-[18px] h-[18px] text-[10px] rounded-full 
                        ${bg} text-white flex justify-center items-center`}>
                            12
                        </div>
                    )}
                </NavLink>

                {/* ✅ Submenu Section (Same BG as Parent When Active) */}
                {link.path2 && isParentActive && (
                    <div className="pl-[20px] -mt-2 py-[8px] rounded-[4px] bg-[#F0F0F0]">
                        <NavLink
                            to={link.path2} // e.g., /realEstate/clientPage/addClient
                            className={({ isActive }) =>
                                `text-[12px] ${color} block pt-1 ${isActive ? 'font-bold' : 'text-[#858585]'}`
                            }
                            key="add-client"
                        >
                            Add New Client
                        </NavLink>
                        <NavLink
                            to={link.path3} // e.g., /realEstate/clientPage
                            className={({ isActive }) =>
                                `text-[12px] ${color} block pt-1 ${
                                    isActive && !location.pathname.includes('addClient') ? 'font-bold' : 'text-[#858585]'
                                }`
                            }
                            key="clients-page"
                        >
                            Clients Page
                        </NavLink>
                    </div>
                )}
            </div>
        );
    })}
</div>


            {/* User Info & Logout */}
            <div className='text-center'>
                <h1 className='text-[12px] xl:text-left xl:ml-[37px]'>Mohamed AlQahtani</h1>
                <h2 className='text-[10px] xl:text-left xl:ml-[45px] text-[#858585] leading-[20px]'>mohamed@realmore.com</h2>
                <button
                    className='text-[14px] font-bold mt-2 p-[10px] border border-[#D3D3D3] rounded-[4px] 
                    flex items-center justify-center lg:w-[160px] xl:w-[218px] h-[40px]'
                >
                    Log Out
                </button>
            </div>
        </div>
    );
};

export default SideBar;