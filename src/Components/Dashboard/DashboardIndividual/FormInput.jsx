const FormInput = ({ label, type = "text", name, value, onChange, placeholder, className }) => {
    return (
        <div className="flex flex-col">
            <label className="font-bold text-[14px] mb-[4px]">{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={` border p-2 rounded-md text-[14px] text-[#00000080] ${className}`}
            />
        </div>
    );
};

export default FormInput;