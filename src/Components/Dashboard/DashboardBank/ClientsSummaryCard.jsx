import React from 'react'
import InfoCard from './InfoCard'
import circle from '../../../assets/IconDashboard/circle.png'
import diagram from '../../../assets/IconDashboard/diagram.png'
import location from '../../../assets/IconDashboard/location.png'
import map from '../../../assets/IconDashboard/map.png'

const ClientsSummaryCard = ({name ,budget ,amount ,city}) => {
    return (
        <div className='border border-[#D3D3D3] w-auto lg:w-full min-h-[298px] rounded-[10px] px-[30px] py-[15px] my-1'>
            <div className='flex flex-col gap-[10px] '>
                <h1 className='text-[18px] font-bold '>{name}</h1>
                <div className='flex flex-col gap-[12px]'>
                    <div className='flex flex-col gap-[8px]'>
                        <h1 className='text-[12px] text-[#858585] '>Mortgage Details</h1>
                        <div className='flex items-center gap-2 '>
                            <InfoCard icon={circle} title={'Budget'} value={budget } currency={'SAR'} />
                            <InfoCard icon={diagram} title={'Loan Amount'} value={amount } currency={'SAR'} />
                        </div>
                    </div>
                    <div className='flex flex-col gap-[8px]'>
                        <h1 className='text-[12px] text-[#858585] '>Property Details</h1>
                        <div className='flex items-center gap-2 '>
                            <InfoCard icon={location} title={'Property City'} value={city } />
                            <InfoCard icon={map} title={'Property District'} value={'Albawadi'} />
                            <InfoCard icon={map} title={'Property District'} value={'Albawadi'} />
                            <InfoCard icon={map} title={'Property District'} value={'Albawadi'} />
                        </div>
                        <div className='flex items-center gap-2 '>
                            <InfoCard icon={location} title={'Property City'} value={'Jedda '} />
                            <InfoCard icon={map} title={'Property District'} value={'Albawadi'} />
                            <InfoCard icon={map} title={'Property District'} value={'Albawadi'} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ClientsSummaryCard