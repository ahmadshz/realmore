import React, { useState } from 'react'
import logo from '../../../assets/LogoGreen/logoMobile.png'
import apple from '../../../assets/icons/appple.png'
import facebook from '../../../assets/icons/facebook.png'
import gmail from '../../../assets/icons/gmail.png'
import emaill from '../../../assets/icons/email.png'
import passwordd from '../../../assets/icons/password.png'
import { Link, useNavigate } from 'react-router-dom'
import { IoEyeOffSharp, IoEyeSharp } from 'react-icons/io5'
import axios from 'axios'
import { baseUrl } from '../../../Api/Api'
import Cookies from 'universal-cookie'

const LoginMobileBank = () => {
    const [showPassword, setShowPassword] = useState(false);

    // State for email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Navigate
    const navigate = useNavigate();

    // Cookies 
    const cookie = new Cookies();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`${baseUrl}/user/login`, {
                email,
                password
            });

            const { token } = res.data;

            if (res.status === 200) {
                cookie.set('auth_token', token, { path: '/' });
                navigate('/bankemployee/dashboard');
            }
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <div className="min-h-screen flex flex-col items-center justify-center  bg-white lg:hidden">
            {/* Logo */}
            <img src={logo} alt="Logo" className="w-[200px] mb-12" />

            {/* Form */}
            <form onSubmit={handleSubmit} className=" w-full ">
                {/* Email */}
                <div className="flex items-center w-[330px] h-[56px] mx-auto bg-gray-100 rounded-[5px] px-4 py-3 mb-[10px]">
                    <img src={emaill} alt='' />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-transparent  flex-1 outline-none ml-4 text-[15px]"
                    />
                </div>

                {/* Password */}
                <div className="flex items-center w-[330px] h-[56px] mx-auto bg-gray-100 rounded-[5px] px-4 py-3 mb-2 relative">
                    <img src={passwordd} alt='' />
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-transparent flex-1 outline-none ml-4 text-[15px]"
                    />
                    {
                        showPassword ? (
                            <button
                                type='button'
                                className='absolute right-4 top-1/2 transform -translate-y-1/2 text-[#B0BAC8]'
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                <IoEyeSharp className='text-[22px]' />
                            </button>
                        ) : (
                            <button
                                type='button'
                                className='absolute right-4 top-1/2 transform -translate-y-1/2 text-[#B0BAC8]'
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                <IoEyeOffSharp className='text-[22px]' />
                            </button>
                        )

                    }
                </div>

                {/* Forget Password */}
                <div className="text-left w-[330px] h-[56px] mx-auto mb-1">
                    <button className="text-[#9A9999] text-[13px]">Forget Password?</button>
                </div>

                {/* Sign in button */}
                <div className='w-full flex justify-center items-center'>
                    <button className="w-[330px] h-[56px] mx-auto bg-[#428057] text-white py-3 rounded-[5px] text-[20px] mb-6">
                        Sign in
                    </button>
                </div>

                {/* Divider */}
                <div className="flex items-center justify-between mt-3 mb-6">
                    <div className=" w-[124px] md:w-[300px] border-t-2 border-[#050605]" />
                    <span className="mx-4 text-[#263238] text-[14px]">Sign in with</span>
                    <div className="w-[124px] md:w-[300px] border-t-2 border-[#050605]" />
                </div>

                {/* Social Media Buttons */}
                <div className="flex justify-center gap-4 mb-8">
                    <button className="border border-[#D9D9D9] w-[83px] h-[42px] p-3 rounded-[5px] flex justify-center items-center">
                        <img src={gmail} alt='' />
                    </button>
                    <button className="border border-[#D9D9D9] w-[83px] h-[42px] p-3 rounded-[5px] flex justify-center items-center">
                        <img src={facebook} alt='' />
                    </button>
                    <button className="border border-[#D9D9D9] w-[83px] h-[42px] p-3 rounded-[5px] flex justify-center items-center">
                        <img src={apple} alt='' />                    </button>
                </div>

                {/* Sign up link */}
                <div className="text-center text-[16px] text-[#9A9999]">
                    Don't have an account?
                    <Link to={'/registerBank/mobile'} > Sign up now!</Link>
                </div>
            </form>
        </div>
    )
}

export default LoginMobileBank