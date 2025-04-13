import React, { useState } from 'react'
import HeaderSection from '../../../Components/Auth/HeaderSection';
import PropertiesType from '../../../Components/Dashboard/DashboardEstate/PropertiesType';
import TaskNavigation from '../../../Components/Dashboard/DashboardIndividual/TaskNavigation';
import Table from '../../../Components/Dashboard/DashboardIndividual/Table';
import TaskInformation from '../../../Components/Dashboard/DashboardIndividual/TaskInformation';
import EventInformation from '../../../Components/Dashboard/DashboardIndividual/EventInformation';
import notification from '../../../assets/IconAdmin/notification.svg'
import TrackTasck from '../../../Components/Dashboard/DashboardIndividual/TrackTasck';
import CallInformation from '../../../Components/Dashboard/DashboardIndividual/CallInformation';

const TasksAdmin = () => {
    const [selected, setSelected] = useState("Task Tracker");
    const [activeIndex, setActiveIndex] = useState(0);

    const propertyTypes = ["Task Tracker", "Task List", "Calendar"];

    const firstTitle = 'Tasks'
    const titleSeconde = 'Track your tasks.'
    return (
        <div className='min-h-screen flex flex-col gap-[20px] xl:w-[850px] 2xl:w-[1205px] pt-[50pxpx] lg:pt-[97px] px-[18px]
                        md:px-[40px] lg:px-[20px] xl:px-[40px] 2xl:px-[60px] mb-10 overflow-x-hidden
                          '>
            <HeaderSection firstTitle={firstTitle} titleSeconde={titleSeconde} font='font-bold' notification={notification} />
            <PropertiesType selected={selected} setSelected={setSelected} propertyTypes={propertyTypes} bg={'bg-black'} />
            <TaskNavigation search activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
            {
                activeIndex === 0 ?
                    <Table bg={'bg-black'} /> :
                    activeIndex === 1 ?
                        <TaskInformation bgButton={'bg-black'} color={"#000000"} /> :
                        activeIndex === 2 ?
                            <CallInformation bgButton={'bg-black'} color={"#000000"}/> :
                             activeIndex === 3 &&
                            <EventInformation bgButton={'bg-black'} color={"#000000"}/> 
            }
            <TrackTasck />
        </div>
    )
}

export default TasksAdmin