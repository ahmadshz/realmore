import React from "react";
import InfoCard from "../DashboardBank/InfoCard";

const PropertiesCard = ({ property, bg, circle  }) => {
    return (
        <div className=" w-[310px] lg:w-fit bg-white  rounded-[10px] p-5 border border-[#D3D3D3] -mb-3">
            {/* Image Section */}
            <div className="relative">
                <img
                    src={property.image}
                    alt={property.type}
                    className="w-full h-[200px] object-cover "
                />
                <h1 className="absolute -top-1 -left-1 bg-white px-7 py-2">{property.type}</h1>
            </div>

            {/* Details Section */}
            <div className="mt-[18px]">
                <h2 className="text-[12px]  text-[#858585]">Details</h2>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 mt-2">
                    <InfoCard icon={circle} title='Budget' value={property.budget} />
                    <InfoCard icon={circle} title='Budget' value={property.budget} />
                </div>
            </div>

            {/* Property Preferences */}
            <div className="mt-[18px] hidden lg:block">
                <h2 className="text-[12px]  text-[#858585]">Property Preferences</h2>
                <div className="grid grid-cols-2  lg:grid-cols-3 gap-2 mt-2">
                    {property.preferences.map((pref, index) => (
                        <div key={index}>
                            <InfoCard icon={pref.icon} title={pref.label} value={pref.value} />

                        </div>
                    ))}
                </div>
            </div>

            {/* Consultant Section */}
            <div className="mt-[18px]">
                <h2 className="text-[12px]  text-[#858585]">{window.innerWidth < 768 ? 'Time available for visit' : 'Consultant'}</h2>
                <div className="grid grid-cols-2  lg:grid-cols-3 gap-2 mt-2">
                    <div className="hidden lg:block">
                        <InfoCard icon={circle} title='' value={property.consultant} />
                    </div>
                    <InfoCard icon={circle} title='Visit Date' value={property.visitDate} />
                    <InfoCard icon={circle} title='Visit Time' value={property.visitTime} />

                </div>
            </div>

            {/* Reassign Button */}
            <div className="mt-5">
                <button className={` w-full h-[26px]  ${bg} text-[14px] text-white  rounded-[4px] flex justify-center items-center `}>
                    Reassign
                </button>
            </div>
        </div>
    );
};

export default PropertiesCard;
