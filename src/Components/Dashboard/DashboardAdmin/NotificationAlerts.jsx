import React, { useState } from 'react'
import close from '../../../assets/IconAdmin/close.svg'
import alert from '../../../assets/IconAdmin/alert.svg'
import alertRed from '../../../assets/IconAdmin/alertRed.svg'

const NotificationAlerts = () => {
    const [filter, setFilter] = useState('All')

    const alertData = [
        {
            note: "Notification",
            counter: "1"
        },
        {
            note: "Alert",
            counter: "1"
        },
        {
            note: "Notification",
            counter: "4"
        },
        {
            note: "Alert",
            counter: "1"
        },
    ]

    const filteredData = filter === "All"
        ? alertData
        : alertData.filter(item => item.note === (filter === "Notifications" ? "Notification" : "Alert"));


    return (
        <div className='flex flex-col gap-[28px]'>
            <section className='flex flex-col gap-[16px] lg:gap-[24px] leading-6'>
                <h1 className='text-[24px] lg:text-[40px]'>Notifications and Alerts</h1>
                <h2 className='text-[16px]'>Review alerts within the platform</h2>
                <div className='flex items-center gap-[12px]'>
                    {
                        ["All", "Notifications", "Alerts"].map(item => (
                            <div
                                key={item}
                                onClick={() => setFilter(item)}
                                className={`h-[36px] px-[12px] w-fit flex items-center justify-center border border-[#D3D3D3] rounded-[6px]
                                            text-[12px] cursor-pointer
                                    ${filter === item ? "bg-black text-white font-bold" : ""}
                                    `}>
                                {item}
                            </div>
                        ))
                    }
                </div>
            </section>

            <section className='hidden xl:flex flex-col gap-[12px] ' >
                {filteredData.map((item, index) => (
                    <div key={index} className='h-[68px] w-full border border-[#D3D3D3] rounded-[6px] flex justify-between items-center px-[20px]'>
                        <div className='flex items-center gap-[20px]'>
                            <div className={`flex items-center gap-[12px] p-[12px] rounded-[4px]
                                 ${item.note === "Notification" ? "text-[#1BC13F] bg-[#DDFFE3]" : "bg-[#FEF1F1] text-[#EA2225]"} `}>
                                <img src={item.note === "Notification" ? alert : alertRed} alt='' />
                                <h2 className='text-[16px]'>{item.note}</h2>
                                <h2 className='text-[16px]'>{item.counter}</h2>
                            </div>
                            <h1 className='text-[20px] font-bold'>User Name</h1>
                            <h2 className='text-[16px]'>Alert Description</h2>
                        </div>
                        <img className='text-red-400' src={close} alt='' />
                    </div>
                ))}
            </section>

            {/* to mobile */}
            <section className='flex xl:hidden flex-col gap-[12px] ' >
                {filteredData.map((item, index) => (
                    <div key={index} >
                        <div className={`flex items-center gap-[12px] h-[35px] w-fit px-[12px] rounded-[4px]
                             ${item.note === "Notification" ? "text-[#1BC13F] bg-[#DDFFE3]" : "bg-[#FEF1F1] text-[#EA2225]"} `}>
                            <img src={item.note === "Notification" ? alert : alertRed} alt='' />
                            <h2 className='text-[16px]'>{item.note}</h2>
                            <h2 className='text-[16px]'>{item.counter}</h2>
                        </div>
                        <div className='h-[40px] w-[95%] border border-[#D3D3D3] rounded-[6px] mt-1 flex items-center justify-between px-[20px] '>
                            <h1 className='text-[20px] font-bold'>User Name</h1>
                            <h2 className='text-[16px]'>Alert Description</h2>
                            <img className='text-red-400' src={close} alt='' />

                        </div>

                    </div>
                ))}
            </section>

        </div>
    )
}

export default NotificationAlerts