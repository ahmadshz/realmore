const FormTextArea = ({ label, name, value, onChange, placeholder }) => {
    return (
        <div className="flex flex-col">
            <label className="font-bold text-[14px] mb-[4px]">{label}</label>
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full border p-2 rounded-md h-[42px] resize-none"
            />
        </div>
    );
};

export default FormTextArea;