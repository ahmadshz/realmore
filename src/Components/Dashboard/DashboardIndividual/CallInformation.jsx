import React, { useState } from "react";
import CheckBoxWithLabel from "./CheckBoxWithLabel";
import OwnerInfo from "./OwnerInfo";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import FormButtons from "./FormButtons";
import polygon from '../../../assets/Iconindividual/polygon.svg';

const CallInformation = ({ bgButton , color }) => {
    const [task, setTask] = useState({
        name: "",
        dueDate: "",
        dueTime: "",
        reminder: false,
        calType: "",
        relatedTo: "",
        calAgenda: "",
        highPriority: false,
        completed: false,
        owner: "User Name",
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setTask(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Task Data:", task);
    };

    const handleCheckboxChange = (field) => {
        setTask(prev => ({
            ...prev,
            [field]: !prev[field]
        }));
    };

    return (
        <div className="flex justify-center">
            <div className="w-full   ">
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-[32px]">Call Information</h2>
                    <OwnerInfo owner={task.owner} polygon={polygon} />
                </div>

                <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-6">
                    <FormInput
                        label="To/From"
                        name="name"
                        value={task.name}
                        onChange={handleChange}
                        placeholder="Enter Event Name"
                    />

                    <div className="grid grid-cols-2 gap-[20px] items-center">
                        <FormInput
                            label="Due Date"
                            name="dueDate"
                            value={task.dueDate}
                            onChange={handleChange}
                            className="uppercase"
                            placeholder="DD/MM/YYYY"

                        />
                        <FormInput
                            name="dueTime"
                            value={task.dueTime}
                            onChange={handleChange}
                            className="uppercase -mb-5"
                            placeholder="HH:MM"
                        />
                    </div>

                    <CheckBoxWithLabel
                        checked={task.reminder}
                        onChange={() => handleCheckboxChange('repeat')}
                        label="Reminder"
                        color={color}
                        bg="#D3D3D3"
                    />

                    <FormInput
                        label="Call Type"
                        name="relatedTo"
                        value={task.calType}
                        onChange={handleChange}
                        placeholder="Online"
                    />
                    <FormInput
                        label="Related To"
                        name="relatedTo"
                        value={task.relatedTo}
                        onChange={handleChange}
                        placeholder="Search Contacts/Companies/Pipelines"
                    />
                    <FormInput
                        label="Call Agenda"
                        name="relatedTo"
                        value={task.calAgenda}
                        onChange={handleChange}
                        placeholder=""
                    />

                    <FormButtons
                        bgButton={bgButton}
                        onCancel={() => console.log("Cancelled")}
                        onSubmit={handleSubmit}
                    />
                </form>
            </div>
        </div>
    );
};

export default CallInformation;