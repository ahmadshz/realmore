import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import axios from 'axios';
import emaill from '../../assets/icons/email.png';
import passwordd from '../../assets/icons/password.png';
import phone from '../../assets/icons/phone.svg';
import user from '../../assets/icons/user.svg';
import { IoEyeOffSharp, IoEyeSharp } from 'react-icons/io5';
import { TbBuildingBank } from 'react-icons/tb';
import { FaRegIdBadge } from 'react-icons/fa';
import { baseUrl } from '../../Api/Api';

const RegisterMobileBank = ({bg , logo ,role}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '', 
    lastname: '',  
    email: '',
    institutionName: '', 
    phoneNumber: '', 
    employeeId: '',
    password: '',
    confirmPassword: '',
    role: role 
  });

  const navigate = useNavigate();
  const cookie = new Cookies();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await axios.post(`${baseUrl}/user/register`, formData);
      const { token } = res.data;

      
        cookie.set('auth_token', token, { path: '/' });
        navigate('/bankemployee/dashboard');
      
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen my-[20px] flex flex-col items-center justify-center bg-white lg:hidden">
      {/* Logo */}
      <img src={logo} alt="Logo" className="w-[200px] mb-20" />

      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full">

        {/* First Name */}
        <div className="flex items-center w-[85%] h-[56px] mx-auto bg-gray-100 rounded-[5px] px-4 py-3 mb-[10px]">
          <img src={user} alt='' />
          <input
            type="text"
            name="firstname" // Match backend
            placeholder="First Name"
            value={formData.firstname}
            onChange={handleChange}
            className="bg-transparent flex-1 outline-none ml-4 text-[15px]"
          />
        </div>

        {/* Last Name */}
        <div className="flex items-center w-[85%] h-[56px] mx-auto bg-gray-100 rounded-[5px] px-4 py-3 mb-[10px]">
          <img src={user} alt='' />
          <input
            type="text"
            name="lastname" // Match backend
            placeholder="Last Name"
            value={formData.lastname}
            onChange={handleChange}
            className="bg-transparent flex-1 outline-none ml-4 text-[15px]"
          />
        </div>

        {/* Email */}
        <div className="flex items-center w-[85%] h-[56px] mx-auto bg-gray-100 rounded-[5px] px-4 py-3 mb-[10px]">
          <img src={emaill} alt='' />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="bg-transparent flex-1 outline-none ml-4 text-[15px]"
          />
        </div>

        {/* Bank Name */}
        <div className="flex items-center w-[85%] h-[56px] mx-auto bg-gray-100 rounded-[5px] px-4 py-3 mb-[10px]">
          <TbBuildingBank className='text-[24px] text-[#ACB6C4]' />
          <input
            type="text"
            name="institutionName" // Match backend
            placeholder="Bank Name"
            value={formData.institutionName}
            onChange={handleChange}
            className="bg-transparent flex-1 outline-none ml-4 text-[15px]"
          />
        </div>

        {/* Employee Id */}
        <div className="flex items-center w-[85%] h-[56px] mx-auto bg-gray-100 rounded-[5px] px-4 py-3 mb-[10px]">
          <FaRegIdBadge className='text-[24px] text-[#ACB6C4]' />
          <input
            type="text"
            name="employeeId"
            placeholder="Employee Id"
            value={formData.employeeId}
            onChange={handleChange}
            className="bg-transparent flex-1 outline-none ml-4 text-[15px]"
          />
        </div>

        {/* Phone */}
        <div className="flex items-center w-[85%] h-[56px] mx-auto bg-gray-100 rounded-[5px] px-4 py-3 mb-[10px]">
          <img src={phone} alt='' />
          <input
            type="text"
            name="phoneNumber" // Match backend
            placeholder="Phone"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="bg-transparent flex-1 outline-none ml-4 text-[15px]"
          />
        </div>

        {/* Password */}
        <div className="flex items-center w-[85%] h-[56px] mx-auto bg-gray-100 rounded-[5px] px-4 py-3 mb-2 relative">
          <img src={passwordd} alt='' />
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="bg-transparent flex-1 outline-none ml-4 text-[15px]"
          />
          <button
            type='button'
            className='absolute right-4 top-1/2 transform -translate-y-1/2 text-[#B0BAC8]'
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <IoEyeSharp className='text-[22px]' /> : <IoEyeOffSharp className='text-[22px]' />}
          </button>
        </div>

        {/* Confirm Password */}
        <div className="flex items-center w-[85%] h-[56px] mx-auto bg-gray-100 rounded-[5px] px-4 py-3 mb-2 relative">
          <img src={passwordd} alt='' />
          <input
            type={showPassword ? 'text' : 'password'}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="bg-transparent flex-1 outline-none ml-4 text-[15px]"
          />
          <button
            type='button'
            className='absolute right-4 top-1/2 transform -translate-y-1/2 text-[#B0BAC8]'
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <IoEyeSharp className='text-[22px]' /> : <IoEyeOffSharp className='text-[22px]' />}
          </button>
        </div>

        {/* Sign in button */}
        <div className='w-full flex justify-center items-center mt-10'>
          <button type="submit" className={`w-[85%] h-[56px] mx-auto ${bg} text-white py-3 rounded-[5px] text-[20px] mb-6`}>
            Sign in
          </button>
        </div>

        {/* Sign up link */}
        <div className="text-center text-[16px] text-[#9A9999]">
          Already have an account?
          <Link to={'/loginBank'}> Log in!</Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterMobileBank;