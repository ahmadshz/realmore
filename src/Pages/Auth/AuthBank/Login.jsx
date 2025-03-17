import LogoSection from '../../../Components/Auth/LogoSection';
import HeaderSection from '../../../Components/Auth/HeaderSection';
import RightSection from '../../../Components/Auth/RightSection';
import Button from '../../../Components/Auth/Button';
import InputFieldLogin from '../../../Components/Auth/InputFieldLogin';
import CheckBox from '../../../Components/Auth/CheckBox';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../../../Api/Api';
import LoginMobileBank from './LoginMobileBank';
import Cookies from 'universal-cookie';
import Header from '../../../Components/Auth/Header';

const Login = () => {
  const firstTitle = "Hello, Welcome Bank Employee";
  const titleSeconde = "Manage your properties efficiently.";
  const title = "Remember me";

  // State for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Navigate
  const navigate = useNavigate();

  // Set Cookies
  const cookie = new Cookies();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${baseUrl}/user/login`, {
        email,
        password
      });

      const { token } = response.data;

      if (token) {
        cookie.set('auth_token', token, { path: '/' });
        navigate('/bankemployee/dashboard');
      }

    } catch (error) {
      console.error('Login failed:', error.response ? error.response.data : error.message);

      if (error.response && error.response.data) {
        alert(`Error: ${error.response.data.message}`);
      } else {
        alert('An unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <div>
      <LoginMobileBank />
      <div className='hidden lg:block'>
        <Header color={'#318C70'} />
        <div className='flex relative justify-center items-center min-h-screen'>
          {/* Logo Section */}
          <LogoSection />

          {/* Main Content */}
          <div className='w-full  h-screen ml-[40px] gap-[60px] flex flex-col justify-center'>
            <HeaderSection titleSeconde={titleSeconde} firstTitle={firstTitle} />
            {/* Input */}
            <form onSubmit={handleSubmit} className='flex flex-col gap-[32px]'>
              <InputFieldLogin
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
              />

              {/* CheckBox */}
              <div className='flex flex-col gap-[12px]'>
                <div className='flex justify-between lg:w-[470px] xl:w-[709px]'>
                  <div className='flex items-center gap-2'>
                    <CheckBox color={'#318C70'} bg={"#D3D3D3"} title={title} />
                  </div>
                  <h1 className='text-[12px] text-[#858585]'>Forget Password?</h1>
                </div>

                {/* Button */}
                <Button color={'#318C70'} type="submit" />

                <div className='flex justify-between items-center lg:w-[470px] xl:w-[709px]'>
                  <h1 className='text-[14px] text-[#858585]'>Forget Password?</h1>
                  <Link to={'/register'} className='text-[14px] text-[#858585]'>Create an account</Link>
                </div>
              </div>
            </form>
          </div>

          {/* Right Section */}
          <RightSection />
        </div>
      </div>
    </div>
  );
};

export default Login;