import React, { useState } from "react";
import CheckBoxWithLabel from "./CheckBoxWithLabel";
import OwnerInfo from "./OwnerInfo";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import FormButtons from "./FormButtons";
import polygon from '../../../assets/Iconindividual/polygon.svg';

const TaskInformation = () => {
    const [task, setTask] = useState({
        name: "",
        dueDate: "",
        repeat: false,
        reminder: false,
        relatedTo: "",
        description: "",
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
                    <h2 className="text-[32px]">Task Information</h2>
                    <OwnerInfo owner={task.owner} polygon={polygon} />
                </div>
                
                <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-6">
                    <FormInput 
                        label="Task Name"
                        name="name"
                        value={task.name}
                        onChange={handleChange}
                        placeholder="Enter Task Name"
                    />
                    
                    <FormInput 
                        type="date"
                        label="Due Date"
                        name="dueDate"
                        value={task.dueDate}
                        onChange={handleChange}
                        className="uppercase"
                    />
                    
                    <CheckBoxWithLabel 
                        checked={task.repeat}
                        onChange={() => handleCheckboxChange('repeat')}
                        label="Repeat"
                        color="#EE7A32"
                        bg="#D3D3D3"
                    />
                    
                    <CheckBoxWithLabel 
                        checked={task.reminder}
                        onChange={() => handleCheckboxChange('reminder')}
                        label="Reminder"
                        color="#EE7A32"
                        bg="#D3D3D3"
                    />
                    
                    <FormInput 
                        label="Related To"
                        name="relatedTo"
                        value={task.relatedTo}
                        onChange={handleChange}
                        placeholder="Search Contacts/Companies/Pipelines"
                    />
                    
                    <FormTextArea 
                        label="Description"
                        name="description"
                        value={task.description}
                        onChange={handleChange}
                        placeholder="A few words about the task"
                    />
                    
                    <CheckBoxWithLabel 
                        checked={task.highPriority}
                        onChange={() => handleCheckboxChange('highPriority')}
                        label="Mark as High Priority"
                        color="#EE7A32"
                        bg="#D3D3D3"
                    />
                    
                    <CheckBoxWithLabel 
                        checked={task.completed}
                        onChange={() => handleCheckboxChange('completed')}
                        label="Mark as Completed"
                        color="#EE7A32"
                        bg="#D3D3D3"
                    />
                    
                    <FormButtons 
                        onCancel={() => console.log("Cancelled")}
                        onSubmit={handleSubmit}
                    />
                </form>
            </div>
        </div>
    );
};

export default TaskInformation;