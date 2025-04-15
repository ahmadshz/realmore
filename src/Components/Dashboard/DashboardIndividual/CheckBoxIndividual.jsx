import React from 'react';
import { FaCheck } from 'react-icons/fa';

const CheckBoxIndividual = ({ color, bg, checked, onChange }) => {
    return (
        <div>
            <div
                className="relative w-[26px] h-[24px] rounded-[5px] border cursor-pointer"
                style={{
                    backgroundColor: checked ? color : bg || 'white',
                    borderWidth: '1px',
                    borderColor: checked ? '#D3D3D3' : '#8D8D8D',
                }}
                onClick={onChange}
            >
                {/* Hidden Input */}
                <input
                    type="checkbox"
                    className="absolute opacity-0 w-full h-full cursor-pointer"
                    checked={checked}
                    onChange={onChange}
                />
                {/* Checkmark Icon */}
                {checked && (
                    <FaCheck className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
                )}
            </div>
        </div>
    );
};

export default CheckBoxIndividual;
