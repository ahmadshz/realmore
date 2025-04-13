import React from "react";

const PropertiesType = ({ selected, setSelected , propertyTypes ,bg , mt ,justify}) => {

    return (
        <div className={`mt-[20px] ${mt} flex items-center ${justify}  lg:justify-start gap-[12px]`}>
            {propertyTypes.map((type) => (
                <div
                    key={type}
                    className={`px-[14px] h-[36px] text-[12px]  flex justify-center items-center w-fit rounded-[6px] cursor-pointer 
                        ${selected === type ? `${bg} text-white font-bold` : "border border-[#D3D3D3]"}`}
                    onClick={() => setSelected(type)}
                >
                    {type}
                </div>
            ))}
        </div>
    );
};

export default PropertiesType;