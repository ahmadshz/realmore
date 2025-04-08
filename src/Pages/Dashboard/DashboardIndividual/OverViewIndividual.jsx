import React from 'react'
import HeaderSection from '../../../Components/Auth/HeaderSection'
import MetricsIndividual from '../../../Components/Dashboard/DashboardIndividual/MetricsIndividual'
import notification from '../../../assets/Iconindividual/notification.svg'
import ClientCard from '../../../Components/Dashboard/DashboardBank/ClientCard'
import more from '../../../assets/Iconindividual/moreInfo.svg'
import circle from '../../../assets/Iconindividual/circle.svg'
import diagram from '../../../assets/Iconindividual/diagram.svg'
import location from '../../../assets/Iconindividual/location.svg'
import map from '../../../assets/Iconindividual/map.svg'
import HeaderDashboard from '../../../Components/Dashboard/DashboardBank/HeaderDashboard'
import headerDashboard from '../../../assets/Iconindividual/LogoHeaderIndividual.svg'

const OverViewIndividual = () => {
    return (
        <div>
            <HeaderDashboard logo={headerDashboard} notification={notification} />

            <div className='min-h-screen flex flex-col gap-[28px] xl:w-[850px] 2xl:w-[1205px] pt-[50px] lg:pt-[97px] px-[18px]
                        md:px-[40px] lg:px-[20px] xl:px-[40px] 2xl:px-[60px] mb-10 overflow-x-hidden'>
                {/*  Apply Filter */}
                <HeaderSection font='font-bold' firstTitle='Analytics and Reporting Page' titleSeconde='Track your tasks' notification={notification} />

                <MetricsIndividual />

                <div className='flex flex-col mt-5 lg:mt-0 '>
                    <h1 className='text-[22px] lg:text-[28px] font-bold '>Interaction History</h1>
                    <div className='flex gap-[10px] overflow-x-hidden
                        pr-[18px] md:pr-[40px] lg:pr-[20px] xl:pr-[40px] 2xl:pr-[60px]'>
                        <ClientCard
                            name={`Ahmad`}
                            budget={'10000'}
                            amount={'10000'}
                            city={'Jeddah'}
                            district={'jeddah'}
                            color={'text-[#EA9B23]'}
                            iconMore={more}
                            iconCircle={circle}
                            diagramIcon={diagram}
                            location={location}
                            map={map}
                        />
                        <ClientCard
                            name={`Ahmad`}
                            budget={'10000'}
                            amount={'10000'}
                            city={'Jeddah'}
                            district={'jeddah'}
                            color={'text-[#EA9B23]'}
                            iconMore={more}
                            iconCircle={circle}
                            diagramIcon={diagram}
                            location={location}
                            map={map}
                        />
                        <ClientCard
                            name={`Ahmad`}
                            budget={'10000'}
                            amount={'10000'}
                            city={'Jeddah'}
                            district={'jeddah'}
                            color={'text-[#EA9B23]'}
                            iconMore={more}
                            iconCircle={circle}
                            diagramIcon={diagram}
                            location={location}
                            map={map}
                        />
                        <ClientCard
                            name={`Ahmad`}
                            budget={'10000'}
                            amount={'10000'}
                            city={'Jeddah'}
                            district={'jeddah'}
                            color={'text-[#EA9B23]'}
                            iconMore={more}
                            iconCircle={circle}
                            diagramIcon={diagram}
                            location={location}
                            map={map}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OverViewIndividual