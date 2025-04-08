import React from 'react'
import { FiSearch } from 'react-icons/fi'
import note from '../../../assets/Iconindividual/note-add.svg'

const TopNavigation = ({ color }) => {
    return (
        <div className='flex justify-between items-center'>
            <div >
                <h1 className='text-[26px] font-bold '> Current Deal</h1>
                <h2 className='text-[16px]  '>Manage your client deal</h2>
            </div>
            <div className='flex items-center gap-[20px]'>
                <div className="relative  ">
                    <input
                        type="text"
                        className="border border-[#D3D3D3] rounded-[6px] p-[8px] w-full  "
                        style={{ outlineColor: color }}
                        placeholder="Search clients"
                    />

                    <FiSearch className="absolute text-[20px] right-3 top-1/2 transform -translate-y-1/2 " />
                </div>
                <div className='flex items-center gap-[8px] bg-[#EE7A32] px-[12px] h-[36px] rounded-[4px] text-white'>
                    <img src={note} alt='' />
                     <h1 className='text-[14px] font-bold '>Add Note</h1>
                </div>
            </div>
        </div>
    )
}

export default TopNavigation