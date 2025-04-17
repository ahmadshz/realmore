import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSidebar } from '../../../Context/SidebarContext';

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
    const { isMobileOpen, setIsMobileOpen } = useSidebar();

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
            path: 'overview',
            title: 'Overview',
            icon: overview,
        },
    ];

    return (
        <div>

            {/* Sidebar - now visible on mobile when isMobileOpen is true */}
            <div className={`${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 
                transition-transform duration-300 ease-in-out fixed  w-[280px] lg:w-[200px] xl:w-[260px] 
                2xl:w-[306px] h-screen flex flex-col justify-between lg:items-center px-4 lg:px-0 py-[40px] border-r border-[#D3D3D3] bg-white z-40`}>
                {/* Logo Section */}
                <img className='pl-[10px] lg:pl-0  w-[155px] 2xl:w-[180px]' src={logo} alt='Logo' />
                {isMobileOpen && (
                    <button
                        className="lg:hidden fixed top-2 right-2 z-50 p-2 bg-white rounded-md "
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                    >

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                )}


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
                                        `relative flex flex-col py-[10px] px-[10px] xl:px-[20px] ${color}
                                        ${isParentActive ? 'bg-[#F0F0F0] font-bold' : 'bg-white'} 
                                        w-full lg:w-[160px] xl:w-[218px]  min-h-[44px] rounded-[4px]`
                                    }
                                    onClick={() => window.innerWidth < 1024 && setIsMobileOpen(false)}
                                >
                                    {/* Icon and Title */}
                                    <div className='flex items-center gap-[12px]'>
                                        <div className='relative '>
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

                                {/* Submenu Section */}
                                {link.path2 && isParentActive && (
                                    <div className="pl-[20px]  w-full lg:w-[160px] xl:w-[218px] -mt-2 py-[8px] rounded-[4px] bg-[#F0F0F0]">
                                        <NavLink
                                            to={link.path2}
                                            className={({ isActive }) =>
                                                `text-[12px] ${color} block pt-1 ${isActive ? 'font-bold' : 'text-[#858585]'}`
                                            }
                                            key="add-client"
                                            onClick={() => window.innerWidth < 1024 && setIsMobileOpen(false)}
                                        >
                                            Add New Client
                                        </NavLink>
                                        <NavLink
                                            to={link.path3}
                                            className={({ isActive }) =>
                                                `text-[12px] ${color} block pt-1 ${isActive && !location.pathname.includes('addClient') ? 'font-bold' : 'text-[#858585]'
                                                }`
                                            }
                                            key="clients-page"
                                            onClick={() => window.innerWidth < 1024 && setIsMobileOpen(false)}
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
                <div className=' lg:text-center'>
                    <h1 className='pl-[10px] lg:pl-0 text-[12px] xl:text-left xl:ml-[37px]'>Mohamed AlQahtani</h1>
                    <h2 className='pl-[10px] lg:pl-0 text-[10px] xl:text-left xl:ml-[45px] text-[#858585] leading-[20px]'>mohamed@realmore.com</h2>
                    <button
                        className='text-[14px] font-bold mt-2 p-[10px] border border-[#D3D3D3] rounded-[4px] 
                        flex items-center justify-center w-full  lg:w-[160px] xl:w-[218px] h-[40px]'
                        onClick={() => window.innerWidth < 1024 && setIsMobileOpen(false)}
                    >
                        Log Out
                    </button>
                </div>
            </div>

            {/* Overlay for mobile (only visible when sidebar is open) */}
            {isMobileOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}
        </div>
    );
};

export default SideBar;