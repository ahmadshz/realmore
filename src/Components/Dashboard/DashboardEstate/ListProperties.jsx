import React from 'react'
import { FiSearch } from 'react-icons/fi'
import add from '../../../assets/IconDashboard/addClient.png'

const ListProperties = () => {
    return (

        <div className='flex justify-between mt-[40px]'>
            <div className='text-[26px] font-bold  '>Listed Properties</div>
            <div className='flex items-center gap-[20px]'>
                <div className="relative ">
                    <input
                        type="text"
                        className="border border-[#D3D3D3] rounded-[6px] p-[8px]  w-full"
                        placeholder="Search in site"
                    />
                    <FiSearch className="absolute text-[20px] right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                <div className='h-[40px] w-[154px] bg-[#714E95] flex justify-center items-center text-white rounded-[4px] text-[14px] font-bold '>
                    <img className='mr-1' src={add} alt='' />
                    Add Properties
                </div>
            </div>

        </div>
    )
}

export default ListProperties