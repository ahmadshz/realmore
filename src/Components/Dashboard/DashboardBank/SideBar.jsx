import React from 'react';
import logo from '../../../assets/LogoGreen/logoheader.png';
import { NavLink, useLocation } from 'react-router-dom';
import notification from '../../../assets/IconDashboard/notification.png';
import iconCLient from '../../../assets/IconDashboard/client.png';
import overview from '../../../assets/IconDashboard/overview.png';

const SideBar = () => {
    const location = useLocation(); // Detect current route

    const navLinks = [
        {
            path: 'dashboard',
            title: 'Dashboard',
            icon: notification,
            notifications: 1,
            icon2: true,
        },
        {
            path: 'clientPage',
            title: 'Client',
            icon: iconCLient,
            path2: 'clientPage/addClient',
            path3: 'clientPage',
        },
        {
            path: 'overview',
            title: 'Overview',
            icon: overview,
        }
    ];

    return (
        <div className='hidden lg:w-[200px] xl:w-[260px] 2xl:w-[306px] h-screen fixed lg:flex flex-col justify-between items-center py-[40px] border border-[#D3D3D3]-r'>
            {/* Logo Section */}
            <img className='w-[140px] xl:w-[155px] 2xl:w-[180px]' src={logo} alt='Logo' />

            {/* NavLinks Section */}
            <div className='flex flex-col gap-[12px]'>
                {navLinks.map((link, index) => {
                    const isClientPageActive = location.pathname.includes(link.path);
                    const isAddClientActive = location.pathname.includes('addClient'); // Detect if "Add New Client" is active

                    return (
                        <div key={index} className='relative'>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    `relative flex flex-col items- gap-[12px] py-[10px] lg:px-[10px] xl:px-[20px] 
                                    ${isActive ? 'bg-[#F0F0F0]' : 'bg-white'} 
                                    lg:w-[160px] xl:w-[218px] 2xl:w-[218px] min-h-[44px] rounded-[4px]`
                                }
                            >
                                {/* Icon and Title */}
                                <div className='flex items-center gap-[12px]'>
                                    <div className='relative'>
                                        <img src={link.icon} alt={`${link.title} Icon`} />
                                        {link.notifications && (
                                            <div className='absolute top-[-3px] right-[-2px] w-[12px] h-[12px] bg-white rounded-full text-[10px] border border-[#D3D3D3] flex justify-center items-center'>
                                                {link.notifications}
                                            </div>
                                        )}
                                    </div>
                                    <div className='text-[16px] font-bold'>{link.title}</div>
                                </div>

                                {/* Icon2 circle notification */}
                                {link.icon2 && (
                                    <div className='absolute bottom-3 right-[20px] w-[18px] h-[18px] text-[10px] rounded-full bg-[#328C71] text-white flex justify-center items-center'>
                                        12
                                    </div>
                                )}

                                {/* Show "Add New Client" and "Clients Page" when Client is active */}
                                {link.path2 && isClientPageActive && (
                                    <div>
                                        <NavLink
                                            to={link.path2}
                                            className={({ isActive }) =>
                                                ` text-[12px] block pt-1 ${isActive ? 'font-bold' : 'text-[#858585]'}`
                                            }
                                        >
                                            Add New Client
                                        </NavLink>
                                        <NavLink
                                            to={link.path3}
                                            className={` text-[12px] block  ${isAddClientActive ? 'text-[#858585]' : 'font-bold'}`}
                                        >
                                            Clients Page
                                        </NavLink>
                                    </div>
                                )}
                            </NavLink>


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
