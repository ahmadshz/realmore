import React from 'react'
import circle from '../../../assets/Iconindividual/circle.svg'
import InfoCard from '../DashboardBank/InfoCard'


const PropertyCard = ({ property }) => {
    return (
        <div className=" w-[472px] h-fit bg-white  rounded-[10px] p-5 border border-[#D3D3D3]">
            {/* Image Section */}
            <div className='grid grid-cols-3'>
                <div className="relative w-[275px]  col-span-2">
                    <img
                        src={property.image}
                        alt={property.type}
                        className="w-full  h-[127px] object-cover "
                    />
                    <h1 className="absolute -top-1 -left-1 bg-white px-7 py-2">{property.type}</h1>
                </div>

                {/* Details Section */}
                <div >
                    <h2 className="text-[12px]  text-[#858585] leading-3">Details</h2>
                    <div className="grid grid-cols-1 gap-[6px] mt-[6px] ">
                        <InfoCard icon={circle} title='Budget' value={property.budget} />
                        <InfoCard icon={circle} title='Budget' value={property.budget} />
                    </div>
                </div>
            </div>

            {/* Property Preferences */}
            <div className="mt-[18px] hidden lg:block">
                <h2 className="text-[12px]  text-[#858585]">Property Preferences</h2>
                <div className="grid grid-cols-2  lg:grid-cols-3 gap-2 mt-2">
                    {property.preferences.map((pref, index) => (
                        <div key={index}>
                            <InfoCard icon={circle} title={pref.label} value={pref.value} />

                        </div>
                    ))}
                </div>
            </div>

            {/* Consultant Section */}
            <div className="mt-[18px]">
                <h2 className="text-[12px]  text-[#858585]">{window.innerWidth < 768 ? 'Time available for visit' : 'Consultant'}</h2>
                <div className="grid grid-cols-2  lg:grid-cols-3 gap-2 mt-2">
                    <div className="hidden lg:block"> <InfoCard icon={circle} title='' value={property.consultant} /></div>
                    <InfoCard icon={circle} title='Visit Date' value={property.visitDate} />
                    <InfoCard icon={circle} title='Visit Time' value={property.visitTime} />

                </div>
            </div>

            {/* Reassign Button */}
            <div className="mt-5">
                <button className=" w-full h-[26px] bg-[#EA9B23] text-[14px] text-white  rounded-[4px] flex justify-center items-center ">
                {property.type}
                </button>
            </div>
        </div>
    )
}

export default PropertyCard