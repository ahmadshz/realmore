import React, { useState } from "react";
import CheckBoxWithLabel from "./CheckBoxWithLabel";
import OwnerInfo from "./OwnerInfo";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import FormButtons from "./FormButtons";
import polygon from '../../../assets/Iconindividual/polygon.svg';

const EventInformation = () => {
    const [task, setTask] = useState({
        name: "",
        startDate: "",
        startTime: "",
        endDate: "",
        endTime: "",
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
        <div className="flex ">
            <div className="min-h-screen w-full ">
                <div className="flex items-center justify-between">
                    <h2 className="text-[32px]">Task Information</h2>
                    <OwnerInfo owner={task.owner} polygon={polygon} />
                </div>
                
                <form onSubmit={handleSubmit} className="mt-4 space-y-4 flex flex-col gap-2">
                    <FormInput 
                        label="Task Name"
                        name="name"
                        value={task.name}
                        onChange={handleChange}
                        placeholder="Enter Task Name"
                    />
                    
                    <div className="">
                        <label className="font-bold text-[14px]">Due Date</label>
                        <div className="flex items-center gap-4">
                            <FormInput
                                type="date"
                                name="startDate"
                                value={task.startDate}
                                onChange={handleChange}
                                className="w-[250px]"
                            />
                            <FormInput
                                type="time"
                                name="startTime"
                                value={task.startTime}
                                onChange={handleChange}
                                className="w-[250px]"

                            />
                            <span className="text-[14px] w-[20px] text-center">To</span>
                            <FormInput
                                type="date"
                                name="endDate"
                                value={task.endDate}
                                onChange={handleChange}
                                className="w-[250px]"

                            />
                            <FormInput
                                type="time"
                                name="endTime"
                                value={task.endTime}
                                onChange={handleChange}
                                className="w-[250px]"
                            />
                        </div>
                    </div>
                    
                    <CheckBoxWithLabel 
                        checked={task.repeat}
                        onChange={() => handleCheckboxChange('repeat')}
                        label="Repeat"
                        color="#EE7A32"
                        bg="#EFEFEF"
                    />
                    
                    <CheckBoxWithLabel 
                        checked={task.reminder}
                        onChange={() => handleCheckboxChange('reminder')}
                        label="Reminder"
                        color="#EE7A32"
                        bg="#EFEFEF"
                    />

                    <FormInput 
                        label="Location"
                        name="name"
                        value={task.name}
                        onChange={handleChange}
                        placeholder="Enter Location"
                    />

                    <CheckBoxWithLabel 
                        checked={task.repeat}
                        onChange={() => handleCheckboxChange('repeat')}
                        label="Online Meeting"
                        color="#EE7A32"
                        bg="#EFEFEF"
                    />
                    
                    <FormInput 
                        label="Related To"
                        name="relatedTo"
                        value={task.relatedTo}
                        onChange={handleChange}
                        placeholder="Search Contacts/Companies/Pipelines"
                    />
                    <FormInput 
                        label="Participants"
                        name="Participants"
                        value={task.relatedTo}
                        onChange={handleChange}
                        placeholder="Search Contacts, User or Invite People"
                    />
                    
                    <FormTextArea 
                        label="Description"
                        name="description"
                        value={task.description}
                        onChange={handleChange}
                        placeholder="A few words about the task"
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

export default EventInformation;