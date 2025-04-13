import React from 'react';

const PlatformSettings = () => {
    return (
        <div className="flex flex-col gap-[16px] lg:gap-[24px] ">
            {/* Title + Description */}
            <div className='px-[8px] lg:px-0'>
                <h2 className='text-[24px] lg:text-[40px] font-semibold'>Modify Platform Settings</h2>
                <p className='text-[16px] text-[#555]'>Customize the platform to suit your needs</p>
            </div>

            {/* Form Grid */}
            <div className="hidden lg:grid grid-cols-3 gap-[18px] mt-[36px]">
                {[1, 2, 3].map((row) => (
                    <React.Fragment key={row}>
                        <div className="flex flex-col gap-1">
                            <label className="text-[14px] font-bold">Setting {row}</label>
                            <input
                                type="text"
                                placeholder="Name"
                                className="h-[36px] px-3 border border-[#ccc] lg:rounded-[6px] rounded-[10px] text-[14px]"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-[14px] font-bold">Setting {row}</label>
                            <input
                                type="text"
                                placeholder="Number"
                                className="h-[36px] px-3 border border-[#ccc] lg:rounded-[6px] rounded-[10px] text-[14px]"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-[14px] font-bold">Setting {row}</label>
                            <input
                                type="text"
                                placeholder="Address"
                                className="h-[36px] px-3 border border-[#ccc] lg:rounded-[6px] rounded-[10px] text-[14px]"
                            />
                        </div>
                    </React.Fragment>
                ))}
            </div>

            {/* Mobile View (stacked) */}
            <div className="flex flex-col gap-[30px] lg:hidden px-[8px] lg:px-0 ">
                {[1, 2, 3].map((row) => (
                    <React.Fragment key={row}>
                        <input
                            type="text"
                            placeholder={`Setting ${row} (Name)`}
                            className="h-[50px] px-3 border border-[#ccc] lg:rounded-[6px] rounded-[10px] text-[18px]"
                        />
                        <input
                            type="text"
                            placeholder={`Setting ${row} (Number)`}
                            className="h-[50px] px-3 border border-[#ccc] lg:rounded-[6px] rounded-[10px] text-[18px]"
                        />
                        <input
                            type="text"
                            placeholder={`Setting ${row} (Address)`}
                            className="h-[50px] px-3 border border-[#ccc] lg:rounded-[6px] rounded-[10px] text-[18px]"
                        />
                    </React.Fragment>
                ))}
            </div>

            {/* Save Button */}
            <button className="w-full bg-black text-white h-[50px] mt-[15px] lg:mt-0 lg:h-[40px] lg:rounded-[6px] rounded-[10px] font-bold text-[20px] ">
                Save Changes
            </button>
        </div>
    );
};

export default PlatformSettings;
