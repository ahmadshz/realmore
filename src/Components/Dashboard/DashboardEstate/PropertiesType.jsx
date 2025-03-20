import { useState } from "react";

const PropertiesType = () => {
    const [selected, setSelected] = useState("Duplex");

    const propertyTypes = ["Duplex", "Villa", "Apartment"];

    return (
        <div className="mt-[20px] flex items-center gap-[12px]">
            {propertyTypes.map((type) => (
                <div
                    key={type}
                    className={`px-[14px] py-[12px] w-fit rounded-[6px] cursor-pointer 
                        ${selected === type ? "bg-[#714E95] text-white" : "border border-[#D3D3D3]"}`}
                    onClick={() => setSelected(type)}
                >
                    {type}
                </div>
            ))}
        </div>
    );
};

export default PropertiesType;
