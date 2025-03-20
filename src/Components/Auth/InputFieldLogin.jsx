import React, { useState } from 'react';
import { IoEyeSharp } from 'react-icons/io5'; // Assuming you're using react-icons for the eye icon
import passwordIcon from '../../assets/icons/ShowPassword.png';

function InputFieldLogin({ email, setEmail, password, setPassword, color }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='flex flex-col gap-[12px]'>
      {/* Email Input */}
      <input
        type='email'
        className='border border-[#D3D3D3] lg:w-[470px] xl:w-[709px] h-[50px] p-[18px] rounded-[10px] text-[18px] '
        style={{ outlineColor: color }}
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* Password Input */}
      <div className='relative lg:w-[470px] xl:w-[709px]'>
        <input
          type={showPassword ? 'text' : 'password'}
          className='border border-[#D3D3D3] lg:w-[470px] xl:w-[709px] h-[50px] p-[18px] rounded-[10px] text-[18px] '
          style={{ outlineColor: color }}
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type='button'
          className='absolute right-4 top-1/2 transform -translate-y-1/2 text-[#858585]'
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <IoEyeSharp className='text-[22px]' /> : <img src={passwordIcon} alt='Show Password' />}
        </button>
      </div>
    </div>
  );
}

export default InputFieldLogin;