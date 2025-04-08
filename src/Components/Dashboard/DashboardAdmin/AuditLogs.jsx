import React, { useState } from 'react'
import alert from '../../../assets/IconAdmin/alertOrange.svg'

const AuditLogs = () => {
    const [visible, setVisible] = useState("4")

    const logs = [
        { name: "User Name", description: "Activity description." },
        { name: "User Name", description: "Activity description." },
        { name: "User Name", description: "Activity description." },
        { name: "User Name", description: "Activity description." },
        { name: "User Name", description: "Activity description." },
        { name: "User Name", description: "Activity description." },
        { name: "User Name", description: "Activity description." },
        { name: "User Name", description: "Activity description." },

    ]

    const handleSeeMore = () => {
        setVisible(prev => prev + 4)
    }

    return (
        <div>
            <section className='flex flex-col gap-[16px] lg:gap-[24px] leading-6'>
                <h1 className='text-[24px] lg:text-[40px]'>Audit Logs</h1>
                <h2 className='text-[16px]'>Track changes and activities across the platform for security and compliance</h2>

            </section>

            <section className='mt-[40px] flex flex-col gap-[12px]'>
                {logs.slice(0, visible).map((item, index) => (
                    <div key={index} className='w-full h-[80px] border border-[#D3D3D3] rounded-[6px] px-[16px] flex items-center gap-[20px] '>
                        <div className='h-[48px] w-[48px] rounded-[4px] flex items-center justify-center bg-[#FFF1DD]'>
                            <img src={alert} alt='' />
                        </div>
                        <h1 className='text-[20px] font-bold'>{item.name}</h1>
                        <h2 className='text-[16px]'>{item.description} </h2>
                    </div>
                ))}
                <div className='flex items-center justify-between'>
                    <div />
                    {visible < logs.length &&
                        <h2
                            onClick={handleSeeMore}
                            className="text-[24px] font-bold underline decoration-solid decoration-2 underline-offset-[4px] cursor-pointer ">
                            See more
                        </h2>
                    }
                </div>
            </section>
        </div>
    )
}

export default AuditLogs