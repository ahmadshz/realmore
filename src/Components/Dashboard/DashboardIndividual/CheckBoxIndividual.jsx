import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const CheckBoxIndividual = ({ color, bg }) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div>
            <div
                className="relative w-[26px] h-[24px] rounded-[5px] border cursor-pointer"
                style={{
                    backgroundColor: isChecked ? color : bg || 'white',
                    borderWidth: '1px', 
                    borderColor: isChecked ? '#D3D3D3' : '#8D8D8D',  // Always black when checked
                }}
                onClick={() => setIsChecked(!isChecked)}
            >
                {/* Hidden Input */}
                <input
                    type="checkbox"
                    className="absolute opacity-0 w-full h-full cursor-pointer"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                />
                {/* Checkmark Icon */}
                {isChecked && (
                    <FaCheck className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
                )}
            </div>
        </div>
    );
};

export default CheckBoxIndividual;
