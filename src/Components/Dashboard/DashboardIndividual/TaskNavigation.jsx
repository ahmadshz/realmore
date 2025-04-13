import React from 'react';
import square from '../../../assets/Iconindividual/task-square.svg';
import calender from '../../../assets/Iconindividual/calendar-edit.svg';
import calls from '../../../assets/Iconindividual/calls.svg';
import events from '../../../assets/Iconindividual/events.svg';
import arrowright from '../../../assets/Iconindividual/Vector.svg'
import searchicon from '../../../assets/Iconindividual/search.svg'

const TaskNavigation = ({ activeIndex, setActiveIndex, search }) => {

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
        <div className='flex flex-wrap 2xl:flex-nowrap justify-between items-center mt-3 max-w-[1440px] w-full gap-5 '>
            <section className='flex items-center gap-4 text-[16px] lg:text-[18px] xl:text-[20px] order-2 2xl:order-none '>
                {data.map((item, index) => (
                    <div
                        key={index}
                        className={`flex gap-[8px] items-center cursor-pointer transition-all duration-200 ${activeIndex === index ? 'text-black' : 'text-gray-500'}`}
                        onClick={() => setActiveIndex(index)}
                    >
                        <img
                            src={item.icon}
                            alt=''
                            className={`h-[24px] lg:h-[26px] xl:h-[28px] ${activeIndex === index ? 'filter brightness-0 border-b-2' : 'filter brightness-0 opacity-50'}`}
                        />
                        <div>{item.title}</div>
                    </div>
                ))}
            </section>

            {search && (
                <section className='flex justify-between w-full 2xl:w-auto 2xl:justify-end items-center gap-4 order-1 2xl:order-none'>
                    <div className='flex w-[235px] h-[57px] items-center 2xl:justify-center gap-[12px] '>
                        <h1 className='text-[16px] xl:text-[18px] 2xl:text-[20px] font-bold text-[#808080]'>Recent Search</h1>
                        <img src={arrowright} alt='' className='w-4 h-4' />
                    </div>

                    <div className='flex justify-center items-center gap-[12px] h-[48px] lg:h-[57px] w-[200px] lg:w-[228px] bg-black rounded-[8px]'>
                        <img src={searchicon} alt='' className='w-5 h-5' />
                        <h1 className='text-[16px] lg:text-[18px] xl:text-[20px] font-bold text-white'>Search Tasks</h1>
                    </div>
                </section>
            )}
        </div>

    );
};

export default TaskNavigation;