import React from "react";
import ciecle from '../../../assets/iconRealEstate/circle.png'

const PropertiesCard = ({ property }) => {
    return (
        <div className="w-fit bg-white  rounded-[10px] p-5 border border-[#D3D3D3]">
            {/* Image Section */}
            <div className="relative">
                <img
                    src={property.image}
                    alt={property.type}
                    className="w-full h-[200px] object-cover rounded-lg"
                />

            </div>

            {/* Details Section */}
            <div className="mt-4">
                <h2 className="text-[12px]  text-[#858585]">Details</h2>
                <div className="flex gap-2 mt-2">
                    <div className='w-[137px] h-[52px] border border-[#D3D3D3] rounded-[10px] p-[10px] flex gap-[8px] '>
                        <div className='flex justify-center items-center w-[32px] h-[32px] rounded-[6px] p-[6px]  bg-[#F6F6F6]'>
                            <img src={ciecle} alt='' /></div>
                        <div>
                            <h1 className='text-[8px] text-[#858585] '>Budget</h1>
                            <h1 className='text-[10px] font-bold text-[#858585] '>{property.budget} <span className='text-[#318C70]'>SAR</span> </h1>

                        </div>
                    </div>
                    <div className='w-[137px] h-[52px] border border-[#D3D3D3] rounded-[10px] p-[10px] flex gap-[8px] '>
                        <div className='flex justify-center items-center w-[32px] h-[32px] rounded-[6px] p-[6px]  bg-[#F6F6F6]'>
                            <img src={ciecle} alt='' /></div>
                        <div>
                            <h1 className='text-[8px] text-[#858585] '>Visits</h1>
                            <h1 className='text-[10px] font-bold text-[#858585] '>{property.visits} <span className='text-[#318C70]'>SAR</span> </h1>

                        </div>
                    </div>

                </div>
            </div>

            {/* Property Preferences */}
            <div className="mt-4">
                <h2 className="text-[12px]  text-[#858585]">Property Preferences</h2>
                <div className="grid grid-cols-3 gap-2 mt-1">
                    {property.preferences.map((pref, index) => (
                        <div key={index} className='w-[137px] h-[52px] border border-[#D3D3D3] rounded-[10px] p-[10px] flex gap-[8px] '>
                            <div className='flex justify-center items-center w-[32px] h-[32px] rounded-[6px] p-[6px]  bg-[#F6F6F6]'>
                                <img src={ciecle} alt='' /></div>
                            <div>
                                <h1 className='text-[8px] text-[#858585] '>{pref.label}</h1>
                                <h1 className='text-[10px] font-bold text-[#858585] '>{pref.value}</h1>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Consultant Section */}
            <div className="mt-4">
                <h2 className="text-[12px]  text-[#858585]">Consultant</h2>
                <div className="flex gap-2 mt-2">
                    <div className='w-[137px] h-[52px] border border-[#D3D3D3] rounded-[10px] p-[10px] flex items-center gap-[8px] '>
                        <div className='flex justify-center items-center w-[32px] h-[32px] rounded-[6px] p-[6px]  bg-[#F6F6F6]'>
                            <img src={ciecle} alt='' /></div>
                        <div>
                            <h1 className='text-[10px] font-bold text-[#858585] '>{property.consultant}</h1>

                        </div>
                    </div>
                    <div className='w-[137px] h-[52px] border border-[#D3D3D3] rounded-[10px] p-[10px] flex gap-[8px] '>
                        <div className='flex justify-center items-center w-[32px] h-[32px] rounded-[6px] p-[6px]  bg-[#F6F6F6]'>
                            <img src={ciecle} alt='' /></div>
                        <div>
                            <h1 className='text-[8px] text-[#858585] '>Visit Date</h1>
                            <h1 className='text-[10px] font-bold text-[#858585] '>{property.visitDate}</h1>

                        </div>
                    </div>
                    <div className='w-[137px] h-[52px] border border-[#D3D3D3] rounded-[10px] p-[10px] flex gap-[8px] '>
                        <div className='flex justify-center items-center w-[32px] h-[32px] rounded-[6px] p-[6px]  bg-[#F6F6F6]'>
                            <img src={ciecle} alt='' /></div>
                        <div>
                            <h1 className='text-[8px] text-[#858585] '>Visit Time</h1>
                            <h1 className='text-[10px] font-bold text-[#858585] '>{property.visitTime}</h1>

                        </div>
                    </div>


                </div>
            </div>

            {/* Reassign Button */}
            <div className="mt-5">
                <button className="w-full bg-[#714E95] text-white py-3 rounded-lg">
                    Reassign
                </button>
            </div>
        </div>
    );
};

export default PropertiesCard;
