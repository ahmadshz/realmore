import React from "react";
import circle from '../../../assets/IconDashboard/Ellipse.png'

const ConsultantCard = ({ name, date, score }) => {
    return (
        <div className=" w-full xl:w-[380px] 2xl:w-[360px] flex flex-col gap-[10px]">
            <div className=" w-full h-[137px] border border-[#D3D3D3] flex flex-col justify-between p-[20px] rounded-[10px] ">
                <div className="flex gap-[8px]">
                    <img src={circle} alt='' />
                    <div>
                        <h1 className="text-[12px] font-bold text-[#858585] ">{name}</h1>
                        <h2 className="text-[10px]  text-[#858585] ">{date}</h2>
                    </div>
                </div>
                <div className="flex justify-between">
                    <h1 className="text-[11px] font-bold text-[#328C71] flex items-end pb-2 ">Closed Deals </h1>
                    <div className="text-[64px] leading-[1.2] font-bold text-[#328C71] ">{score}</div>
                    <div />
                </div>
            </div>

            <div className="w-full h-[40px] border border-[#D3D3D3] p-[20px] rounded-[10px]
                            flex justify-evenly items-center text-[12px] font-bold text-[#328C71] ">
                <div>Hire</div>
                <div />
            </div>
        </div>
    );
};

export default ConsultantCard;