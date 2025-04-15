import React from 'react'
import search from '../../../assets/IconDashboard/ic-search.svg'
import { useSidebar } from '../../../Context/SidebarContext';

const HeaderDashboard = ({ logo, notification }) => {
    const { isMobileOpen, setIsMobileOpen } = useSidebar();

    return (
        <div className=' flex justify-between items-center lg:hidden h-[80px] border-b border-[#D3D3D3] px-[26px] '>
            <img className='w-[119px] h-[27px] ' src={logo} alt='' />
            <div className='flex items-center gap-2'>
                <img src={notification} alt='' />
                <img className='mb-[2px]' src={search} alt='' />
                {/* Mobile Toggle Button (only visible on mobile) */}
                {isMobileOpen === false && (<button
                    className="lg:hidden p-2  rounded-md  border border-[#D3D3D3]"
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                >

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>

                </button>
                )}
            </div>

        </div>
    )
}

export default HeaderDashboard