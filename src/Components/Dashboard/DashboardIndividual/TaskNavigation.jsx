import React from 'react';
import square from '../../../assets/Iconindividual/task-square.svg';
import calender from '../../../assets/Iconindividual/calendar-edit.svg';
import calls from '../../../assets/Iconindividual/calls.svg';
import events from '../../../assets/Iconindividual/events.svg';
import arrowright from '../../../assets/Iconindividual/Vector.svg'
import search from '../../../assets/Iconindividual/search.svg'

const TaskNavigation = ({ activeIndex, setActiveIndex }) => {

    const data = [
        {
            icon: square,
            title: "All Tasks",
        },
        {
            icon: calender,
            title: "Meetings",
        },
        {
            icon: calls,
            title: "Calls",
        },
        {
            icon: events,
            title: "Events",
        },
    ];

    return (
        <div className='flex justify-between items-center mt-3'>
            <section className='flex items-center gap-4 text-[20px]'>
                {data.map((item, index) => (
                    <div
                        key={index}
                        className={`flex gap-[8px] items-center cursor-pointer ${activeIndex === index ? 'text-black' : 'text-gray-500'}`}
                        onClick={() => setActiveIndex(index)}
                    >
                        <img
                            src={item.icon}
                            alt=''
                            className={activeIndex === index ? 'filter brightness-0 border-b-2 ' : 'filter brightness-0 opacity-50'}
                        />
                        <div>{item.title}</div>
                    </div>
                ))}
            </section>

            <section className='flex items-center '>
                <div className='w-[235px] h-[57px] flex items-center justify-center gap-[12px]'>
                    <h1 className='text-[20px] font-bold text-[#808080] ' >Recent Search</h1>
                    <img src={arrowright} alt='' />
                </div>
                <div className='flex justify-center items-center gap-[12px] h-[57px] w-[228px] bg-black rounded-[8px] '>
                    <img src={search} alt='' />
                    <h1 className='text-[20px] font-bold text-white'>Search Tasks</h1>
                </div>
            </section>
        </div>
    );
};

export default TaskNavigation;