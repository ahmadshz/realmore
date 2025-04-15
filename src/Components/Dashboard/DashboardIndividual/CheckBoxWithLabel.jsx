import CheckBoxIndividual from "./CheckBoxIndividual";

const CheckBoxWithLabel = ({ label, color, bg, checked, onChange }) => {
    return (
        <div className="flex items-center gap-4 cursor-pointer" onClick={onChange}>
            <CheckBoxIndividual color={color} bg={bg} checked={checked} onChange={onChange} />
            <label>{label}</label>
        </div>
    );
};

export default CheckBoxWithLabel;
