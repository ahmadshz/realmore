import React from 'react';

const Button = ({ color, type = 'button' }) => {
    return (
        <button
            type={type}
            className="lg:w-[470px] xl:w-[709px] h-[50px] text-white rounded-[10px] text-[22px] font-bold"
            style={{ backgroundColor: color }}
        >
            Sign Up
        </button>
    );
};

export default Button;