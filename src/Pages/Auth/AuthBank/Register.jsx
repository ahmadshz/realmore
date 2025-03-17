import React, { useState } from 'react';
import LogoSection from '../../../Components/Auth/LogoSection';
import Step from '../../../Components/Auth/Step';
import HeaderSection from '../../../Components/Auth/HeaderSection';
import RightSection from '../../../Components/Auth/RightSection';
import CheckBox from '../../../Components/Auth/CheckBox';
import Button from '../../../Components/Auth/Button';
import Header from '../../../Components/Auth/Header';
import axios from 'axios';
import { baseUrl } from '../../../Api/Api';

const Register = () => {
    // Step 1 Inputs
    const step1Inputs = [
        ['First Name', 'Last Name'],
        ['Email', 'Bank Name'],
        ['Employee ID', 'Contact Number'],
    ];

    // Step 2 Inputs
    const step2Inputs = [
        ['Password', 'Confirm Password'],
    ];

    // Header Section
    const titleSeconde = "Manage your properties efficiently."
    const firstTitle = "Hello, Welcome Bank Employee"

    // State to hold form data
    const [formData, setFormData] = useState({
        firstname: '', // Match backend
        lastname: '',  // Match backend
        email: '',
        institutionName: '',
        phoneNumber: '',
        employeeId: '',
        password: '',
        confirmPassword: '',
        role: 'bank'
    });

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const response = await axios.post(`${baseUrl}/user/register`, formData);
            console.log('Registration successful:', response.data);
        } catch (error) {
            console.error('Registration failed:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className='h-screen '>
            <Header color={'#318C70'} />
            <div className='flex relative'>
                {/* Logo Section */}
                <LogoSection />

                {/* Main Content */}
                <div className='w-full xl:w-[70%] ml-[40px] gap-[60px] flex flex-col justify-center mt-[120px]'>
                    <HeaderSection titleSeconde={titleSeconde} firstTitle={firstTitle} />
                    <form onSubmit={handleSubmit} className='flex flex-col gap-[40px]'>
                        <div className='flex flex-col gap-[40px]'>
                            <Step stepNumber={1} inputs={step1Inputs} onChange={handleInputChange} />
                            <Step stepNumber={2} inputs={step2Inputs} onChange={handleInputChange} />
                        </div>

                        {/* CheckBox */}
                        <div className='flex flex-col gap-4'>
                            <CheckBox color={'#318C70'} />
                            <Button color={'#318C70'} type="submit" />
                        </div>
                    </form>
                </div>

                {/* Right Section */}
                <RightSection />
            </div>
        </div>
    );
};

export default Register;