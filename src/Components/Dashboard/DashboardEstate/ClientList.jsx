import React from "react";
import phone from '../../../assets/iconRealEstate/phone.png';
import circle from '../../../assets/iconRealEstate/circleBlack.svg';
import InfoCard from "../DashboardBank/InfoCard";
import ScrollBarY from "../ScrollBarY";
import ListProperties from "./ListProperties";
import PropertiesType from "./PropertiesType";

const ClientList = ({
    clients,
    add,
    bg,
    search,
    title,
    filterType,
    selected,
    setSelected,
    closedDeals,
    notes,
    mt,
    bgDeal,
    textColor
}) => {
    return (
        <div className="flex flex-col justify-center gap-[20px] mb-[60px]">
            {/* Header */}
            <ListProperties add={add} bg={bg} search={search} title={title} />

            {filterType && (
                <PropertiesType
                    propertyTypes={['All Deals', 'Under reviewing', 'Closed']}
                    bg={bg}
                    selected={selected}
                    setSelected={setSelected}
                    mt={mt}
                    justify={'justify-start'}
                />
            )}

            {/* Clients Grid */}
            <div className="flex h-fit gap-5 pb-4">
                <ScrollBarY
                    width="flex-shrink-0 w-full   xl:w-[765px] 2xl:w-[1080px]"
                    scrollWidth="w-full xl:w-[765px] 2xl:w-[1080px]"
                    height="auto"
                    scrollBarHeight={2}
                    gap={12}
                    hideNativeScrollbar={true}
                    scrollSpeed={5}
                >
                    {clients.map((client, index) => (
                        <div
                            key={index}
                            className="border rounded-[10px] flex-shrink-0 p-5 shadow-sm 
                                       w-full max-w-full sm:w-[49%] lg:max-w-max md:w-[49%] lg:w-[470px] xl:w-[671px]"
                        >
                            {/* Client Info */}
                            <div className="flex items-center justify-between">
                                <h3 className="text-[18px] font-bold">{client.name}</h3>
                                <div
                                    className={`flex items-center mb-1 px-3 py-1 text-[10px] rounded-[16px] w-[134px] h-[18px] transition-opacity
                                                duration-200 ${closedDeals ? `${bgDeal} ${textColor} opacity-100` : 'opacity-0'}`}
                                >
                                    ● Closed deal
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <p className="text-[14px] flex items-center">
                                    <img className="mr-3" src={phone} alt='' />
                                    {client.phone}
                                </p>
                                {notes && (
                                    <div className="flex lg:hidden items-center mb-1 px-3 py-1 text-[10px] rounded-[16px] w-[134px] h-[18px] bg-[#F6F6F6]">
                                        ● Notes
                                    </div>
                                )}
                            </div>

                            <div className="hidden lg:flex items-center justify-between">
                                <p className="mt-[14px] font-bold">
                                    Assigned Consultant:{" "}
                                    <span className="font-normal">
                                        {client.consultant || "N/A"}
                                    </span>
                                    {!client.consultant && (
                                        <button className="ml-3 bg-black text-white px-3 py-1 rounded-md text-sm">
                                            Assign
                                        </button>
                                    )}
                                </p>
                                {notes && (
                                    <div className="flex items-center mb-1 px-3 py-1 text-[10px] rounded-[16px] w-[134px] h-[18px] bg-[#F6F6F6]">
                                        ● Notes
                                    </div>
                                )}
                            </div>

                            {/* Mortgage Details */}
                            <h4 className="mt-4 text-[12px] text-[#858585] mb-1">Mortgage Details</h4>
                            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-[10px]">
                                <InfoCard icon={circle} title={'Property District'} value={'Albawadi'} />
                                <InfoCard icon={circle} title={'Property District'} value={'Albawadi'} />
                            </div>

                            {/* Property Details */}
                            <h4 className="mt-4 text-[12px] text-[#858585] mb-1">Property Details</h4>
                            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:w-[631px] gap-[10px]">
                                <InfoCard icon={circle} title={'Property District'} value={'Albawadi'} />
                                <InfoCard icon={circle} title={'Property District'} value={'Albawadi'} />
                                <InfoCard icon={circle} title={'Property District'} value={'Albawadi'} />
                                <InfoCard icon={circle} title={'Property District'} value={'Albawadi'} />
                                <InfoCard icon={circle} title={'Property District'} value={'Albawadi'} />
                                <InfoCard icon={circle} title={'Property District'} value={'Albawadi'} />
                                <InfoCard icon={circle} title={'Property District'} value={'Albawadi'} />
                            </div>
                        </div>
                    ))}
                </ScrollBarY>
            </div>
        </div>
    );
};

export default ClientList;
