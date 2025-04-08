import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { baseUrl } from "../../../Api/Api";
import LoginMobileBank from "../../../Components/Auth/LoginMobileBank";
import Header from "../../../Components/Auth/Header";
import LogoSection from "../../../Components/Auth/LogoSection";
import HeaderSection from "../../../Components/Auth/HeaderSection";
import InputFieldLogin from "../../../Components/Auth/InputFieldLogin";
import CheckBox from "../../../Components/Auth/CheckBox";
import Button from "../../../Components/Auth/Button";
import RightSection from "../../../Components/Auth/RightSection";
import logo from '../../../assets/IconAdmin/Logoside.svg'
import logoHeader from '../../../assets/IconAdmin/LogoHeader.svg'

const LoginAdmin = () => {
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

      const { token, role } = response.data;

      if (token && role === "admin") {
        cookie.set('auth_token', token, { path: '/' });
        navigate('/admin/dashboard');
      } else {
        setError('Unauthorized access. Only Admin role can log in.');
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
      <LoginMobileBank bg='bg-[#050605]' logo={logoHeader} />
      <div className='hidden lg:block'>
        <Header color={'#050605'} logoHeader={logoHeader} />
        <div className='flex relative justify-center items-center min-h-screen'>
          {/* Logo Section */}
          <LogoSection logo={logo} />

          {/* Main Content */}
          <div className='w-full h-screen ml-[40px] gap-[60px] flex flex-col justify-center'>
            <HeaderSection titleSeconde={titleSeconde} firstTitle={firstTitle} font={'font-bold'}  />

            {/* Input */}
            <form onSubmit={handleSubmit} className='flex flex-col gap-[32px]'>
              <InputFieldLogin
                color={'#050605'}
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
                    <CheckBox color={'#050605'} bg={"#D3D3D3"} title={title} />
                  </div>
                  <h1 className='text-[12px] text-[#858585]'>Forget Password?</h1>
                </div>

                {/* Button */}
                <Button
                  color={'#050605'}
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

export default LoginAdmin;