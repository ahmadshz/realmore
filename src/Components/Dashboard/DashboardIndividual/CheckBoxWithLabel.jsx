import CheckBoxIndividual from "./CheckBoxIndividual";

const CheckBoxWithLabel = ({ label, color, bg }) => {
    return (
        <div className="flex items-center gap-4">
        <CheckBoxIndividual color={color} bg={bg} />

            <label>{label}</label>
        </div>
    );
};

export default CheckBoxWithLabel;