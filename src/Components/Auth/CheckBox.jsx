import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CheckBox = ({ color, title, bg }) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className="flex items-center gap-2">
            {/* Checkbox Container */}
            <div
                className="relative w-[26px] h-[24px] rounded-[5px] border"
                style={{
                    backgroundColor: isChecked ? color : bg || 'white', // Use bg if provided, otherwise default to white
                    borderColor: isChecked ? color : '#D3D3D3',
                }}
                onClick={() => setIsChecked(!isChecked)}
            >
                {/* Hidden Input */}
                <input
                    type="checkbox"
                    id="check1"
                    className="absolute opacity-0 w-full h-full cursor-pointer"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                />
                {/* Checkmark Icon */}
                {isChecked && (
                    <FaCheck className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
                )}
            </div>
            {/* Label */}
            <label htmlFor="check1" className="text-[14px] text-[#858585]">
                {title ? title : (
                    <div>
                        Agree to
                        <span className='font-bold text-[14px] underline'> terms and conditions</span>
                    </div>
                )}
            </label>
        </div>
    );
};

export default CheckBox;