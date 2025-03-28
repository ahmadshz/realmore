import React from "react";
import img from '../../../assets/iconRealEstate/real.png'
import shedule from '../../../assets/iconRealEstate/shedule.svg'

const statusColors = {
    waiting: "bg-gray-100 text-gray-600",
    visited: "bg-orange-100 text-orange-600",
    closed: "bg-[#DDFFE3] text-green-600",
};

const TrackerVisit = () => {
    const property = [
        {
            type: "Duplex",
            city: "Riyadh",
            developer: "Developer Name",
            floors: 2,
            rooms: 5,
            bathrooms: 2,
            image: img,
            status: "waiting",
            statusText: "Waiting for Visit",
            visitDate: "Monday, 12/12/2024",
            visitTime: "12:00 PM",
            consultant: "Consultant Name",
            client: "Client Name",
        },
        {
            type: "Duplex",
            city: "Riyadh",
            developer: "Developer Name",
            floors: 2,
            rooms: 5,
            bathrooms: 2,
            image: img,
            status: "visited",
            statusText: "Visited",
            visitDate: "Monday, 12/12/2024",
            visitTime: "12:00 PM",
            consultant: "Consultant Name",
            client: "Client Name",
        },
        {
            type: "Duplex",
            city: "Riyadh",
            developer: "Developer Name",
            floors: 2,
            rooms: 5,
            bathrooms: 2,
            image: img,
            status: "closed",
            statusText: "Closed Deal",
            visitDate: "Monday, 12/12/2024",
            visitTime: "12:00 PM",
            consultant: "Consultant Name",
            client: "Client Name",
        },
    ];
    return (
        <div className="mb-[40px]">
            {property.map((property, index) => (
                <div key={index} className=" lg:border rounded-[4px] lg:mt-4 py-4 lg:p-4 flex lg:justify-between  w-full h-[166px] lg:shadow-sm">
                    {/* Left Section: Image */}
                    <div className="relative w-[100px]">
                        <img src={property.image} alt="Property" className=" w-[100px] h-[130px] lg:w-28 lg:h-28  object-cover" />
                        <div className="absolute top-0 left-0 p-2 -m-1  bg-white">
                            <h3 className="   text-[10px] font-bold border-b-2  border-black   ">{property.type}</h3>
                        </div>
                    </div>
                    {/* Middle Section: Property Details */}
                    <div div className="w-[calc(100%-110px)] lg:w-1/2 px-4 flex flex-col justify-between lg:block " >
                        <div >
                            <p className="font-bold text-[14px]">City: Riyadh</p>
                            <h2 className="text-[10px]">Developer Name</h2>
                            <div className={`flex items-center lg:hidden mb-1 px-3 py-1 text-[10px] rounded-[16px] w-[134px] h-[18px] ${statusColors[property.status]}`}>
                                ● {property.statusText}
                            </div>
                        </div>
                        <div className=" lg:w-1/3 flex justify-between mt-2 ">
                            <div>
                                <h3 className="text-[10px]">Area</h3>
                                <h3 className="text-[10px]">District</h3>
                                <h3 className="text-[10px]">Location</h3>
                            </div>
                            <div>
                                <h3 className="text-[10px]">2 Floors</h3>
                                <h3 className="text-[10px]">5 Rooms</h3>
                                <h3 className="text-[10px]">2 Bathrooms</h3>
                            </div>
                        </div>
                        <div className="text-[10px] lg:hidden flex">Schedule
                        <img className="ml-2" src={shedule} alt=''/>
                        </div>
                    </div>

                    {/* Right Section: Status & Client Info */}
                    <div className=" w-1/2 hidden  lg:flex ">
                        <div className="w-1/2">
                            <div className={`inline-block mb-1 px-3 py-1 text-[10px] rounded-[16px] min-w-[134px] ${statusColors[property.status]}`}>
                                ● {property.statusText}
                            </div>
                            <p className=" text-[10px] ">{property.visitTime}</p>
                            <p className=" text-[10px] mt-1">{property.visitDate}</p>
                            <p className="font-bold text-[12px] mt-2">{property.consultant}</p>
                            <p className="text-[10px]">{property.consultant}</p>
                        </div>
                        <div className="w-1/2">
                            <p className="font-bold text-[12px] mt-2">{property.client}</p>
                            <p className="text-[10px]">{property.client}</p>
                        </div>
                    </div>
                </div >
            ))}
        </div >
    );
};

export default TrackerVisit;
