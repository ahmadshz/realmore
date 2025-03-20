import React from 'react';
import InputField from './InputField';

const Step = ({ stepNumber, inputs, onChange, color }) => {
    // Map placeholders to state keys
    const placeholderToName = {
        'First Name': 'firstname', // Change to match backend
        'Last Name': 'lastname',   // Change to match backend
        'Email': 'email',
        'Bank Name': 'institutionName',
        'Employee ID': 'employeeId',
        'Contact Number': 'phoneNumber',
        'Password': 'password',
        'Confirm Password': 'confirmPassword'
    };

    return (
        <div>
            <h1 className='font-bold text-[22px] mb-[24px]'>Step {stepNumber}</h1>
            <div className='flex flex-col gap-[12px]'>
                {inputs.map((input, index) => (
                    <div key={index} className='flex gap-[16px]'>
                        {input.map((placeholder, idx) => (
                            <InputField
                                color={color}
                                key={idx}
                                name={placeholderToName[placeholder]} // Use mapped name
                                placeholder={placeholder}
                                type={placeholder.toLowerCase().includes('password') ? 'password' : 'text'}
                                onChange={onChange}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Step;