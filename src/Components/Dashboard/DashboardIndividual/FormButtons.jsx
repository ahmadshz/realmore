const FormButtons = ({ onCancel ,bgButton }) => {
    return (
        <div className="flex justify-center mt-6 gap-4">
            <button 
                type="button" 
                onClick={onCancel}
                className="border border-[#000000] w-[240px] h-[48px] px-6 py-2 rounded-md text-[16px] font-bold"
            >
                Cancel
            </button>
            <button 
                type="submit" 
                className={` ${bgButton} w-[240px] h-[48px] text-white px-6 py-2 rounded-md text-[16px] font-bold`}
            >
                Save
            </button>
        </div>
    );
};

export default FormButtons;