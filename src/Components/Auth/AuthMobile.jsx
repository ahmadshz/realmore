import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/LogoGreen/logoMobile.png'

const AuthMobile = () => {
    return (
        <div className='  min-h-screen lg:hidden'>
            <div className='flex flex-col items-center   mt-[270px]'>
                <img className='w-[270px] h-[63px]  ' src={logo} alt='' />

                <div className='mt-[230px] flex flex-col gap-[10px]'>
                    <Link to={'/loginBank'} className='w-[340px] h-[57px] rounded-[5px] flex justify-center items-center bg-[#428057]
                                 text-white text-[20px] 
                                 '>Sign in</Link>
                    <Link to={'/registerBank'} className='w-[340px] h-[57px] rounded-[5px] flex justify-center items-center bg-[#050605]
                                 text-white text-[20px] 
                                 ' >Create your account</Link>
                </div>
            </div>
        </div>
    )
}

export default AuthMobile