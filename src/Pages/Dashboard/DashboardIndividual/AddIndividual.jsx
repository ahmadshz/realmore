import React, { useState } from 'react'
import TaskInformation from '../../../Components/Dashboard/DashboardIndividual/TaskInformation'
import notification from '../../../assets/Iconindividual/notification.svg'
import HeaderSection from '../../../Components/Auth/HeaderSection'
import PropertiesType from '../../../Components/Dashboard/DashboardEstate/PropertiesType'
import TaskNavigation from '../../../Components/Dashboard/DashboardIndividual/TaskNavigation'
import EventInformation from '../../../Components/Dashboard/DashboardIndividual/EventInformation'
import Table from '../../../Components/Dashboard/DashboardIndividual/Table'
import TrackTasck from '../../../Components/Dashboard/DashboardIndividual/TrackTasck'
import CallInformation from '../../../Components/Dashboard/DashboardIndividual/CallInformation'

const AddIndividual = () => {
    const [selected, setSelected] = useState("Task Tracker");
    const [activeIndex, setActiveIndex] = useState(0);

    const propertyTypes = ["Task Tracker", "Task List", "Calendar"];

    const firstTitle = 'Tasks'
    const titleSeconde = 'Track your tasks.'
    return (
        <div className='min-h-screen flex flex-col gap-[20px] xl:w-[850px] 2xl:w-[1205px] pt-[50px] lg:pt-[97px] px-[18px]
                        md:px-[40px] lg:px-[20px] xl:px-[40px] 2xl:px-[60px] mb-10 overflow-x-hidden
                          '>
            <HeaderSection firstTitle={firstTitle} titleSeconde={titleSeconde} font='font-bold' notification={notification} />
            <PropertiesType selected={selected} setSelected={setSelected} propertyTypes={propertyTypes} bg={'bg-[#EA9B23]'} />
            <TaskNavigation activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
            {
                activeIndex === 0 ?
                    <Table bg={'bg-[#EA9B23]'} /> :
                    activeIndex === 1 ?
                        <TaskInformation bgButton={'bg-[#EE7A32]'} color={'#EE7A32'} /> :
                        activeIndex === 2 ?
                            <CallInformation bgButton={'bg-[#EE7A32]'} color={'#EE7A32'} /> :
                            activeIndex === 3 &&
                            <EventInformation bgButton={'bg-[#EE7A32]'} color={'#EE7A32'} />
            }
            <TrackTasck />
        </div>
    )
}

export default AddIndividual