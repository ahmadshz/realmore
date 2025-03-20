import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import polygon from '../../../assets/IconDashboard/Polygon.png';
import axios from 'axios';
import { baseUrl } from '../../../Api/Api';
import Cookies from 'universal-cookie';

const FormAddClient = () => {
    // State to store form data
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        budget: '',
        employeeId: '',
        mortgageBudget: '',
        approvedLoanAmount: '',
        propertyType: '',
        propertyLocation: '',
        propertyArea: '',
        propertyCity: '',
        propertyDistrict: '',
        propertyBedrooms: '',
        propertyBathrooms: '',
        minSpace: '',
        maxSpace: '',
    });

    // Navigate
    const navigate = useNavigate()

    // Cookies 
    const cookies = new Cookies();
    const token = cookies.get('auth_token');

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(`${baseUrl}/bankclient/add-client`, formData, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
            });

            navigate('/bankemployee/clientPage')

        } catch (error) {
            console.error('Error adding client:', error);
            alert('Failed to add client. Please try again.');
        }
    };

    return (
        <div>
            <form className='flex flex-col gap-[40px] my-[40px]' onSubmit={handleSubmit}>
                {/* Contact Details */}
                <div className='flex flex-col gap-[24px]'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-[18px] lg:text-[22px] font-bold'>Contact Details</h1>
                        <Link to={'/bankemployee/clientPage'} className='text-[14px] text-white font-bold w-[70px] h-[26px] rounded-[4px] hidden lg:flex items-center justify-center bg-[#076152]'>
                            Cancel
                        </Link>
                    </div>

                    {/* Client Details */}
                    <div className='flex flex-col gap-[12px]'>
                        <div className='flex flex-col lg:flex-row gap-[16px]'>
                            {/* First Name */}
                            <input
                                className='w-full lg:w-[50%] xl:w-[557px] h-[50px] text-[14px] lg:text-[18px] border border-[#D3D3D3] rounded-[50px] lg:rounded-[10px] p-[18px] focus:outline-[#328C71]'
                                type='text'
                                placeholder='First Name'
                                name='firstName'
                                value={formData.firstName}
                                onChange={handleInputChange}
                            />
                            {/* Last Name */}
                            <input
                                className='w-full lg:w-[50%] xl:w-[557px] h-[50px] text-[14px] lg:text-[18px] border border-[#D3D3D3] rounded-[50px] lg:rounded-[10px] p-[18px] focus:outline-[#328C71]'
                                type='text'
                                placeholder='Last Name'
                                name='lastName'
                                value={formData.lastName}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='flex flex-col lg:flex-row gap-[16px]'>
                            {/* Contact Number */}
                            <input
                                className='w-full lg:w-[50%] xl:w-[557px] h-[50px] text-[14px] lg:text-[18px] border border-[#D3D3D3] rounded-[50px] lg:rounded-[10px] p-[18px] focus:outline-[#328C71]'
                                type='text'
                                placeholder='Contact Number'
                                name='contactNumber'
                                value={formData.contactNumber}
                                onChange={handleInputChange}
                            />
                            {/* Budget */}
                            <input
                                className='w-full lg:w-[50%] xl:w-[557px] h-[50px] text-[14px] lg:text-[18px] border border-[#D3D3D3] rounded-[50px] lg:rounded-[10px] p-[18px] focus:outline-[#328C71]'
                                type='text'
                                placeholder='Budget'
                                name='budget'
                                value={formData.budget}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            {/* Employee ID */}
                            <input
                                className='w-full lg:w-[48.4%] xl:w-[327px] h-[50px] text-[14px] lg:text-[18px] border border-[#D3D3D3] rounded-[50px] lg:rounded-[10px] p-[18px] focus:outline-[#328C71]'
                                type='text'
                                placeholder='Employee ID'
                                name='employeeId'
                                value={formData.employeeId}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>

                {/* Mortgage Details */}
                <div className='flex flex-col gap-[24px]'>
                    <div>
                        <h1 className='text-[18px] lg:text-[22px] font-bold'>Mortgage Details</h1>
                    </div>

                    <div className='flex flex-col lg:flex-row gap-[16px]'>
                        {/* Mortgage Budget */}
                        <div className='relative w-full lg:w-[557px]'>
                            <input
                                className='w-full h-[50px] text-[14px] lg:text-[18px] border border-[#D3D3D3] rounded-[50px] lg:rounded-[10px] p-[18px] pr-[50px] focus:outline-[#328C71]'
                                type='text'
                                placeholder='Mortgage Budget'
                                name='mortgageBudget'
                                value={formData.mortgageBudget}
                                onChange={handleInputChange}
                            />
                            <span className='absolute right-[18px] top-1/2 transform -translate-y-1/2 text-[#858585] text-[14px] lg:text-[18px]'>
                                SAR
                            </span>
                        </div>

                        {/* Approved Loan Amount */}
                        <div className='relative w-full lg:w-[557px]'>
                            <input
                                className='w-full h-[50px] text-[14px] lg:text-[18px] border border-[#D3D3D3] rounded-[50px] lg:rounded-[10px] p-[18px] pr-[50px] focus:outline-[#328C71]'
                                type='text'
                                placeholder='Approved Loan Amount'
                                name='approvedLoanAmount'
                                value={formData.approvedLoanAmount}
                                onChange={handleInputChange}
                            />
                            <span className='absolute right-[18px] top-1/2 transform -translate-y-1/2 text-[#858585] text-[14px] lg:text-[18px]'>
                                SAR
                            </span>
                        </div>
                    </div>
                </div>

                {/* Property Preferences */}
                <div className='flex flex-col gap-[12px]'>
                    <div>
                        <h1 className='text-[18px] lg:text-[22px] font-bold'>Property Preferences</h1>
                    </div>

                    <div className='flex flex-col lg:flex-row gap-[16px]'>
                        {/* Property Type */}
                        <div className='relative w-full lg:w-[557px]'>
                            <select
                                className='w-full h-[50px] text-[14px] lg:text-[18px] text-[#858585] border border-[#D3D3D3] rounded-[50px] lg:rounded-[10px] px-[18px] focus:outline-[#328C71] appearance-none bg-white'
                                name='propertyType'
                                value={formData.propertyType}
                                onChange={handleInputChange}
                            >
                                <option value="" disabled selected>
                                    Property Type
                                </option>
                                <option value="Location 1">Location 1</option>
                                <option value="Location 2">Location 2</option>
                                <option value="Location 3">Location 3</option>
                            </select>
                            {/* Dropdown Arrow */}
                            <img
                                className='absolute right-[18px] top-1/2 transform -translate-y-1/2 pointer-events-none'
                                src={polygon}
                                alt='Dropdown Arrow'
                            />
                        </div>

                        {/* Property Location */}
                        <div className='relative w-full lg:w-[557px]'>
                            <select
                                className='w-full h-[50px] text-[14px] lg:text-[18px] text-[#858585] border border-[#D3D3D3] rounded-[50px] lg:rounded-[10px] px-[18px] focus:outline-[#328C71] appearance-none bg-white'
                                name='propertyLocation'
                                value={formData.propertyLocation}
                                onChange={handleInputChange}
                            >
                                <option value="" disabled selected>
                                    Property Location
                                </option>
                                <option value="Location 1">Location 1</option>
                                <option value="Location 2">Location 2</option>
                                <option value="Location 3">Location 3</option>
                            </select>
                            {/* Dropdown Arrow */}
                            <img
                                className='absolute right-[18px] top-1/2 transform -translate-y-1/2 pointer-events-none'
                                src={polygon}
                                alt='Dropdown Arrow'
                            />
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row gap-[16px]'>
                        {/* Property Area */}
                        <div className='relative w-full lg:w-[557px]'>
                            <select
                                className='w-full h-[50px] text-[14px] lg:text-[18px] text-[#858585] border border-[#D3D3D3] rounded-[50px] lg:rounded-[10px] px-[18px] focus:outline-[#328C71] appearance-none bg-white'
                                name='propertyArea'
                                value={formData.propertyArea}
                                onChange={handleInputChange}
                            >
                                <option value="" disabled selected>
                                    Property Area
                                </option>
                                <option value="1">Area</option>
                                <option value="2">dasd</option>
                                <option value="3">adsasd</option>
                            </select>
                            {/* Dropdown Arrow */}
                            <img
                                className='absolute right-[18px] top-1/2 transform -translate-y-1/2 pointer-events-none'
                                src={polygon}
                                alt='Dropdown Arrow'
                            />
                        </div>

                        {/* Property City */}
                        <div className='relative w-full lg:w-[557px]'>
                            <select
                                className='w-full h-[50px] text-[14px] lg:text-[18px] text-[#858585] border border-[#D3D3D3] rounded-[50px] lg:rounded-[10px] px-[18px] focus:outline-[#328C71] appearance-none bg-white'
                                name='propertyCity'
                                value={formData.propertyCity}
                                onChange={handleInputChange}
                            >
                                <option value="" disabled selected>
                                    Property City
                                </option>
                                <option value="Riyadh">Riyadh</option>
                                <option value="Jeddah">Jeddah</option>
                                <option value="Dammam">Dammam</option>
                            </select>
                            {/* Dropdown Arrow */}
                            <img
                                className='absolute right-[18px] top-1/2 transform -translate-y-1/2 pointer-events-none'
                                src={polygon}
                                alt='Dropdown Arrow'
                            />
                        </div>
                    </div>

                    <div>
                        {/* Property District */}
                        <div className='relative w-full lg:w-[48.4%] xl:w-[327px]'>
                            <select
                                className='w-full h-[50px] text-[14px] lg:text-[18px] text-[#858585] border border-[#D3D3D3] rounded-[50px] lg:rounded-[10px] px-[18px] focus:outline-[#328C71] appearance-none bg-white'
                                name='propertyDistrict'
                                value={formData.propertyDistrict}
                                onChange={handleInputChange}
                            >
                                <option value="" disabled selected>
                                    Property District
                                </option>
                                <option value="District 1">District 1</option>
                                <option value="District 2">District 2</option>
                                <option value="District 3">District 3</option>
                            </select>
                            {/* Dropdown Arrow */}
                            <img
                                className='absolute right-[18px] top-1/2 transform -translate-y-1/2 pointer-events-none'
                                src={polygon}
                                alt='Dropdown Arrow'
                            />
                        </div>
                    </div>
                </div>

                {/* Property Bedrooms */}
                <div className='flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-[24px]'>
                    <h1 className='text-[18px] text-[#858585]'>Property Bedrooms</h1>
                    <div className='flex gap-[8px] flex-wrap'>
                        {[...Array(window.innerWidth < 768 ? 4 : 6)].map((_, index) => (
                            <div
                                key={index}
                                className={`text-[14px] lg:text-[18px] px-[16px] py-[18px] border border-[#D3D3D3] rounded-[10px] w-[56px] h-[50px] flex justify-center items-center cursor-pointer
                    ${formData.propertyBedrooms === index + 1
                                        ? 'bg-[#318C70] text-white' // Selected style
                                        : 'text-[#858585]' // Default style
                                    }`}
                                onClick={() =>
                                    setFormData({
                                        ...formData,
                                        propertyBedrooms: index + 1, // Update the selected number
                                    })
                                }
                            >
                                {`0${index + 1}`}
                            </div>
                        ))}
                        <div className='text-[18px] text-[#858585] px-[16px] py-[18px] border border-[#D3D3D3] rounded-[10px] w-[77px] h-[50px] flex justify-center items-center'>
                            More
                        </div>
                    </div>
                </div>

                {/* Property Bathrooms */}
                <div className='flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-[24px]'>
                    <h1 className='text-[18px] text-[#858585]'>Property Bathrooms</h1>
                    <div className='flex gap-[8px] flex-wrap'>
                        {[...Array(window.innerWidth < 768 ? 4 : 6)].map((_, index) => (
                            <div
                                key={index}
                                className={`text-[18px] px-[16px] py-[18px] border border-[#D3D3D3] rounded-[10px] w-[56px] h-[50px] flex justify-center items-center cursor-pointer
                  ${formData.propertyBathrooms === index + 1
                                        ? 'bg-[#318C70] text-white' // Selected style
                                        : 'text-[#858585]' // Default style
                                    }`}
                                onClick={() =>
                                    setFormData({
                                        ...formData,
                                        propertyBathrooms: index + 1, // Update the selected number
                                    })
                                }
                            >
                                {`0${index + 1}`}
                            </div>
                        ))}
                        <div className='text-[18px] text-[#858585] px-[16px] py-[18px] border border-[#D3D3D3] rounded-[10px] w-[77px] h-[50px] flex justify-center items-center'>
                            More
                        </div>
                    </div>
                </div>

                {/* Property Area */}
                <div className='flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-[24px]'>
                    <h1 className='text-[18px] text-[#858585] w-[150px] '>Property Area</h1>
                    <div className='flex gap-[8px] w-full'>
                        {/* Min Space */}
                        <div className='relative w-1/2  h-[50px]'>
                            <input
                                className='w-full h-[50px] text-[18px] text-[#858585] px-[16px] py-[18px] border border-[#D3D3D3] rounded-[10px] focus:outline-[#328C71]'
                                type='text'
                                placeholder='Min Space'
                                name='minSpace'
                                value={formData.minSpace}
                                onChange={handleInputChange}
                            />
                            {/* m² suffix */}
                            <span className='absolute right-[10px] top-1/2 transform -translate-y-1/2 text-[#858585] pointer-events-none'>
                                m²
                            </span>
                        </div>
                        {/* Max Space */}
                        <div className='relative w-1/2  h-[50px]'>
                            <input
                                className='w-full h-[50px] text-[18px] text-[#858585] px-[16px] py-[18px] border border-[#D3D3D3] rounded-[10px] focus:outline-[#328C71]'
                                type='text'
                                placeholder='Max Space'
                                name='maxSpace'
                                value={formData.maxSpace}
                                onChange={handleInputChange}
                            />
                            {/* m² suffix */}
                            <span className='absolute right-[10px] top-1/2 transform -translate-y-1/2 text-[#858585] pointer-events-none'>
                                m²
                            </span>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className='flex justify-between gap-[8px] lg:gap-[16px] mt-[60px]'>
                    <button
                        type='button'
                        className='bg-[#F0F0F0] h-[50px] text-[#328C71] w-1/2 lg:w-[49.5%] text-[17px] lg:text-[20px] font-bold flex justify-center items-center rounded-[10px]'
                    >
                        Save as Draft
                    </button>
                    <button
                        type='submit'
                        className='bg-[#318C70] h-[50px] text-white w-1/2 lg:w-[49.5%] text-[17px] lg:text-[20px] font-bold flex justify-center items-center rounded-[10px]'
                    >
                        Add Client
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormAddClient;