import React from 'react'
import search from '../../../assets/IconDashboard/ic-search.png'

const HeaderDashboard = ({logo ,notification}) => {
    return (
        <div className=' flex justify-between items-center lg:hidden h-[80px] border-b border-[#D3D3D3] px-[26px] '>
            <img className='w-[119px] h-[27px] ' src={logo} alt='' />
            <div className='flex items-center gap-2'>
                <img src={notification} alt='' />
                <img src={search} alt='' />
            </div>
        </div>
    )
}

export default HeaderDashboard