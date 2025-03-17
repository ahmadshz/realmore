import React from 'react'
import { Link } from 'react-router-dom'
import ConsultantCard from './ConsultantCard'

const Status = () => {
    const consultants = [
        { name: "Consultant Name", date: "12/12/2025", score: 15 },
        { name: "Consultant Name", date: "12/12/2025", score: 15 },
        { name: "Consultant Name", date: "12/12/2025", score: 15 },
       
    ];
    return (
        <div className='mt-[10px]'>
            <div className='flex justify-between items-center'>
                <h1 className='text-[22px] font-bold'>Status</h1>
                <div className='flex items-center gap-[10px]'>
                    <Link className='px-[16px] py-[6px] rounded-[4px] flex justify-center items-center
                               bg-[#076152] text-white text-[12px] font-bold w-[98px] ' >Overview</Link>
                    <Link className='px-[16px] py-[6px] rounded-[4px] flex justify-center items-center
                               bg-[#F0F0F0]  text-[12px] font-bold w-[98px] ' >Dealing</Link>
                </div>
            </div>
            <div className='mt-4  mb-8 flex lg:flex-wrap gap-2'>
                {consultants.map((consultant, index) => (
                    <ConsultantCard
                        key={index}
                        name={consultant.name}
                        date={consultant.date}
                        score={consultant.score}
                    />
                ))}
            </div>
        </div>
    )
}

export default Status