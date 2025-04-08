import axios from "axios";
import { useState } from "react";
import { baseUrl } from "../../../Api/Api";
import Header from "../../../Components/Auth/Header";
import LogoSection from "../../../Components/Auth/LogoSection";
import HeaderSection from "../../../Components/Auth/HeaderSection";
import Step from "../../../Components/Auth/Step";
import CheckBox from "../../../Components/Auth/CheckBox";
import Button from "../../../Components/Auth/Button";
import RightSection from "../../../Components/Auth/RightSection";
import LogoSide from '../../../assets/Iconindividual/Logoindividual.svg'
import LogoHeader from '../../../assets/Iconindividual/LogoHeaderIndividual.svg'
import { useNavigate } from "react-router-dom";
import RegisterMobileBank from "../../../Components/Auth/RegisterMobileBank";

const RegisterIndividual = () => {
    // Step 1 Inputs
    const step1Inputs = [
        ['First Name', 'Last Name'],
        ['Email', 'Bank Name'],
        ['Employee ID', 'Contact Number'],
    ];

    // Step 2 Inputs
    const step2Inputs = [['Password', 'Confirm Password']];

    // Header Section
    const firstTitle = "Hello, Welcome Consultant";
    const titleSeconde = "Manage your clients and deals efficiently";

    // State to hold form data
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        institutionName: '',
        phoneNumber: '',
        employeeId: '',
        password: '',
        confirmPassword: '',
        role: 'ic'
    });

    // States for loading and error
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Navigate
    const navigate = useNavigate();

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Reset error
        setLoading(true); // Start loading

        // Basic validation
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match!");
            setLoading(false);
            return;
        }

        try {
            await axios.post(`${baseUrl}/user/register`, formData);
            navigate('/individual/dashboard');
        } catch (error) {
            setError(error.response?.data?.message || "An unexpected error occurred. Please try again.");
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <div>
            <RegisterMobileBank bg={'bg-[#EE7A32]'} logo={LogoHeader} role='re' />
            <div className='h-screen hidden lg:block '>
                <Header color={'#EE7A32'} logoHeader={LogoHeader} />
                <div className='flex relative'>
                    {/* Logo Section */}
                    <LogoSection logo={LogoSide} />

                    {/* Main Content */}
                    <div className='w-full xl:w-[70%] ml-[40px] gap-[60px] flex flex-col justify-center mt-[120px]'>
                        <HeaderSection notification titleSeconde={titleSeconde} firstTitle={firstTitle} font={'font-bold'} />
                        
                        <form onSubmit={handleSubmit} className='flex flex-col gap-[40px]'>
                            <div className='flex flex-col gap-[40px]'>
                                <Step color={'#EE7A32'} stepNumber={1} inputs={step1Inputs} onChange={handleInputChange} />
                                <Step color={'#EE7A32'} stepNumber={2} inputs={step2Inputs} onChange={handleInputChange} />
                            </div>

                            {/* Error Message */}
                            {error && (
                                <div className='text-red-500 text-[18px]'>
                                    {error}
                                </div>
                            )}

                            {/* CheckBox */}
                            <div className='flex flex-col gap-4'>
                                <CheckBox color={'#EE7A32'} />
                                <Button color={'#EE7A32'} type="submit" loading={loading} />

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

export default RegisterIndividual;
