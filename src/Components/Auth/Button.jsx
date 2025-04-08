import React from 'react';

const Button = ({ color, type = 'button', loading }) => {
    return (
        <button
            disabled={loading ? true : false}
            type={type}
            className={`lg:w-[470px] xl:w-[709px] h-[50px] text-white rounded-[10px] text-[22px] font-bold
                       ${loading ? 'opacity-80 cursor-not-allowed' : ''}`}
            style={{ backgroundColor: color }}
        >
            Sign In
        </button>
    );
};

export default Button;