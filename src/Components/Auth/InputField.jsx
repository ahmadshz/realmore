import React, { useState } from 'react';
import { IoEyeSharp } from 'react-icons/io5';
import password from '../../assets/icons/ShowPassword.png'

const InputField = ({ name, placeholder, type = 'text', value, onChange }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className='relative'>
            <input
                type={showPassword ? 'text' : type}
                className='border border-[#D3D3D3] lg:w-[225px] xl:w-[346px] h-[50px] p-[18px] rounded-[10px] text-[18px] focus:outline-[#318C70]'
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
            />
            {type === 'password' && (
                <button
                    type='button'
                    className='absolute right-4 top-1/2 transform -translate-y-1/2 text-[#858585]'
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? <IoEyeSharp className='text-[22px]' /> : <img src={password} alt='' />}
                </button>
            )}
        </div>
    );
};

export default InputField;