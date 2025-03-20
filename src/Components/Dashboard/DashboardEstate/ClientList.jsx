import React from "react";
import add from '../../../assets/IconDashboard/addClient.png'
import phone from '../../../assets/iconRealEstate/phone.png'
import circle from '../../../assets/iconRealEstate/circleBlack.png'
import InfoCard from "../DashboardBank/InfoCard";

const ClientList = () => {

    const clients = [
        {
            name: "Client Name",
            phone: "05 123 456 78",
            consultant: "Consultant Name",
            mortgage: {
                budget: "5,000,000",
                loan: "1,000,000",
            },
            properties: [
                { label: "Property City", value: "Jedda" },
                { label: "Property District", value: "Albawadi" },
                { label: "Property District", value: "Albawadi" },
                { label: "Property City", value: "Jedda" },
                { label: "Property District", value: "Albawadi" },
                { label: "Property District", value: "Albawadi" },
            ],
        },
        {
            name: "Client Name",
            phone: "05 123 456 78",
            consultant: null,
            mortgage: {
                budget: "5,000,000",
                loan: "1,000,000",
            },
            properties: [
                { label: "Property City", value: "Jedda" },
                { label: "Property District", value: "Albawadi" },
                { label: "Property District", value: "Albawadi" },
                { label: "Property City", value: "Jedda" },
                { label: "Property District", value: "Albawadi" },
                { label: "Property District", value: "Albawadi" },
            ],
        },
    ];
    return (
        <div className="p-5 mt-16 w-[99%] overflow-x-hidden">
            {/* Header */}
            <div className="flex justify-between items-center mb-5">
                <h2 className="text-2xl font-bold">Clients</h2>
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Search clients"
                        className="border px-3 py-2 rounded-md"
                    />
                    <button className="bg-black flex items-center text-white px-4 py-2 rounded-md">
                        <img className="mr-1" src={add} alt='' />
                        Add Client
                    </button>
                </div>
            </div>

            {/* Clients Grid */}
            <div className=" flex gap-5">
                {clients.map((client, index) => (
                    <div
                        key={index}
                        className="border rounded-[10px] p-5  bg-white"
                    >
                        {/* Client Info */}
                        <h3 className="text-[18px] font-bold">{client.name}</h3>
                        <p className="text-[14px]  flex items-center ">
                            <img className="mr-3" src={phone} alt='' />
                            {client.phone}
                        </p>
                        <p className="mt-[14px] font-bold">
                            Assigned Consultant:{" "}
                            <span className="font-normal">
                                {client.consultant ? client.consultant : "N/A"}
                            </span>
                            {!client.consultant && (
                                <button className="ml-3 bg-black text-white px-3 py-1 rounded-md text-sm">
                                    Assign
                                </button>
                            )}
                        </p>

                        {/* Mortgage Details */}
                        <h4 className="mt-4 text-[12px] text-[#858585] mb-1 ">Mortgage Details</h4>
                        <div className="flex gap-[10px]">
                            <InfoCard icon={circle} title={'Property District'} value={'Albawadi'} />
                            <InfoCard icon={circle} title={'Property District'} value={'Albawadi'} />
                        </div>


                        {/* Property Details */}
                        <h4 className="mt-4 text-[12px] text-[#858585] mb-1 ">Property Details</h4>
                        <div className="flex gap-[10px]">
                            <InfoCard icon={circle} title={'Property District'} value={'Albawadi'} />
                            <InfoCard icon={circle} title={'Property District'} value={'Albawadi'} />
                            <InfoCard icon={circle} title={'Property District'} value={'Albawadi'} />
                            <InfoCard icon={circle} title={'Property District'} value={'Albawadi'} />
                        </div>
                        <div className="flex mt-[10px] gap-[10px]">
                            <InfoCard icon={circle} title={'Property District'} value={'Albawadi'} />
                            <InfoCard icon={circle} title={'Property District'} value={'Albawadi'} />
                           
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClientList;
