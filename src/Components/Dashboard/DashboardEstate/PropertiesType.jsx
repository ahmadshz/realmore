import React from "react";

const PropertiesType = ({ selected, setSelected }) => {
    const propertyTypes = ["Duplex", "Villa", "Apartment"];

    return (
        <div className="mt-[20px] flex items-center justify-center lg:justify-start gap-[12px]">
            {propertyTypes.map((type) => (
                <div
                    key={type}
                    className={`px-[14px] h-[36px] text-[12px]  flex justify-center items-center w-fit rounded-[6px] cursor-pointer 
                        ${selected === type ? "bg-[#714E95] text-white font-bold" : "border border-[#D3D3D3]"}`}
                    onClick={() => setSelected(type)}
                >
                    {type}
                </div>
            ))}
        </div>
    );
};

export default PropertiesType;