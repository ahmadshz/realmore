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
import Cookies from 'universal-cookie';
import Header from '../../../Components/Auth/Header';
import logoHeader from '../../../assets/LogoGreen/logoheader.png';
import logoSide from '../../../assets/LogoGreen/LogoGreen.png';
import LoginMobileBank from '../../../Components/Auth/LoginMobileBank';

const Login = () => {
  const firstTitle = "Hello, Welcome Bank Employee";
  const titleSeconde = "Manage your properties efficiently.";
  const title = "Remember me";

  // State for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(''); // Error state

  // Navigate
  const navigate = useNavigate();

  // Set Cookies
  const cookie = new Cookies();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset error state
    setError('');

    // Start loading
    setLoading(true);

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
      setError('Invalid email or password. Please try again.', error.response ? error.response.data : error.message);

      
    } finally {
      // Stop loading
      setLoading(false);
    }
  };

  return (
    <div>
      <LoginMobileBank bg='bg-[#428057]' logo={logoHeader} />
      <div className='hidden lg:block'>
        <Header color={'#318C70'} logoHeader={logoHeader} />
        <div className='flex relative justify-center items-center min-h-screen'>
          {/* Logo Section */}
          <LogoSection logo={logoSide} />

          {/* Main Content */}
          <div className='w-full h-screen ml-[40px] gap-[60px] flex flex-col justify-center'>
            <HeaderSection titleSeconde={titleSeconde} firstTitle={firstTitle} />

            {/* Input */}
            <form onSubmit={handleSubmit} className='flex flex-col gap-[32px]'>
              <InputFieldLogin
                color={'#318C70'}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
              />

              {/* Error Message */}
              {error && (
                <div className='text-red-500 text-[18px] '>
                  {error}
                </div>
              )}

              {/* CheckBox */}
              <div className='flex flex-col gap-[12px]'>
                <div className='flex justify-between lg:w-[470px] xl:w-[709px]'>
                  <div className='flex items-center gap-2'>
                    <CheckBox color={'#318C70'} bg={"#D3D3D3"} title={title} />
                  </div>
                  <h1 className='text-[12px] text-[#858585]'>Forget Password?</h1>
                </div>

                {/* Button */}
                <Button
                  color={'#318C70'}
                  type="submit"
                  loading={loading} 
                />
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