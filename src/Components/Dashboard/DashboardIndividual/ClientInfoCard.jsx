import React from 'react'
import call from '../../../assets/Iconindividual/call.svg'
import circle from '../../../assets/Iconindividual/circle.svg'
import diagram from '../../../assets/Iconindividual/diagram.svg'
import location from '../../../assets/Iconindividual/location.svg'
import map from '../../../assets/Iconindividual/map.svg'
import InfoCard from '../DashboardBank/InfoCard'

const ClientInfoCard = () => {
    return (
        <div className='border border-[#D3D3D3] w-[405px] h-fit rounded-[10px] px-[20px] py-[15px]'>
            {/* Client Info */}
            <div className='flex flex-col gap-[5px]'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-[16px] font-bold'>Client Name</h1>
                    <div className={`flex items-center  mb-1 px-3 py-1 text-[10px] rounded-[16px] w-[134px] h-[18px] bg-[#DDFFE3] text-[#1BC13F] `}>
                        ● Closed deal
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <img src={call} alt='' />
                        <h1 className='text-[14px] text-[#373737]'>05 123 456 78</h1>
                    </div>
                    <div className={`flex items-center  mb-1 px-3 py-1 text-[10px] rounded-[16px] w-[134px] h-[18px] bg-[#F6F6F6]  `}>
                        ● Notes
                    </div>
                </div>
            </div>

            {/* Client Summary */}
            <div className='flex flex-col gap-[12px] mt-4'>
                <div className='flex flex-col gap-[8px]'>
                    <h1 className='text-[12px] text-[#858585] '>Mortgage Details</h1>
                    <div className='grid grid-cols-2 gap-[8px]'>
                        <InfoCard icon={circle} title={'Budget'} value='0000' currency={'SAR'} />
                        <InfoCard icon={diagram} title={'Loan Amount'} value='00000' currency={'SAR'} />
                    </div>
                </div>
                <div className='flex flex-col gap-[8px] '>
                    <h1 className='text-[12px] text-[#858585] '>Property Details</h1>
                    <div className='grid grid-cols-2 gap-[8px] '>
                        <InfoCard icon={location} title={'Property City'} value='jedda' />
                        <InfoCard icon={map} title={'Property District'} value={'Albawadi'} />
                        <InfoCard icon={map} title={'Property District'} value={'Albawadi'} />
                        <InfoCard icon={map} title={'Property District'} value={'Albawadi'} />
                        <InfoCard icon={map} title={'Property District'} value={'Albawadi'} />
                        <InfoCard icon={map} title={'Property District'} value={'Albawadi'} />
                        <InfoCard icon={map} title={'Property District'} value={'Albawadi'} />
                        <div className='col-span-2 h-[150px] border border-[#D3D3D3] rounded-[10px] p-[10px] flex gap-[8px]'>
                            <div className='flex justify-center items-center w-[32px] h-[32px] rounded-[6px] p-[6px] bg-[#F6F6F6]'>
                                <img src={map} alt='' />
                            </div>
                            <div className='w-full'>
                                <h1 className='text-[8px] text-[#858585]'>Notes</h1>
                                <textarea
                                    className='w-full h-[100px] text-[10px] font-bold text-[#858585]    resize-none focus:outline-none'
                                    placeholder="Write your notes here"
                                ></textarea>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default ClientInfoCard