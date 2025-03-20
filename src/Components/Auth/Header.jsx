import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Header = ({ color , logoHeader }) => {
    return (
        <div className='hidden lg:flex justify-between fixed z-10 bg-white items-center w-full h-[80px] 
                       lg:px-[100px]  xl:px-[160px] border border-[#D3D3D3]-b '>
            <img className='lg:w-[140px] 2xl:w-[180px]' src={logoHeader} alt='' />
            <div className='flex gap-[20px] items-center'>
                <Link to={'/login'}>Login</Link>
                <div>Contact us</div>
                <div className="relative ">
                    <input
                        type="text"
                        className="border border-[#D3D3D3] rounded-[6px] p-[8px]  w-full"
                        placeholder="Search in site"
                        style={{ outlineColor: color }}
                    />
                    <FiSearch className="absolute text-[20px] right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
            </div>
        </div>
    )
}

export default Header