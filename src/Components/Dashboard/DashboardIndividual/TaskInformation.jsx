import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import CheckBoxWithLabel from "./CheckBoxWithLabel";
import OwnerInfo from "./OwnerInfo";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import FormButtons from "./FormButtons";
import polygon from "../../../assets/Iconindividual/polygon.svg";
import { baseUrl } from "../../../Api/Api";

const cookies = new Cookies();

const TaskInformation = ({ bgButton, color }) => {
    const [task, setTask] = useState({
        taskName: "",
        dueDate: "",
        type: "", // 'Repeat' or 'Reminder'
        relatedTo: "",
        description: "",
        priority: false,
        completed: false,
        owner: "",
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setTask((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleCheckboxChange = (field) => {
        setTask((prev) => ({
            ...prev,
            [field]: !prev[field],
        }));
    };

    const handleOwnerChange = (newOwner) => {
        setTask((prev) => ({
            ...prev,
            owner: newOwner,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = cookies.get("token");

            const response = await axios.post(`${baseUrl}/activity/task`, task, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            console.log("Task submitted successfully:", response.data);
        } catch (error) {
            console.error("Error submitting task:", error.response || error.message);
        }
    };

    return (
        <div className="flex justify-center">
            <div className="w-full">
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-[32px]">Task Information</h2>
                    <OwnerInfo owner={task.owner} polygon={polygon} onChange={handleOwnerChange} />
                </div>

                <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-6">
                    <FormInput
                        label="Task Name"
                        name="taskName"
                        value={task.taskName}
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
                        checked={task.type === "Repeat"} // Checking if 'Repeat' is selected
                        onChange={() => setTask((prev) => ({ ...prev, type: "Repeat" }))}
                        label="Repeat"
                        color={color}
                        bg="#D3D3D3"
                    />

                    <CheckBoxWithLabel
                        checked={task.type === "Reminder"} // Checking if 'Reminder' is selected
                        onChange={() => setTask((prev) => ({ ...prev, type: "Reminder" }))}
                        label="Reminder"
                        color={color}
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
                        checked={task.priority}
                        onChange={() => handleCheckboxChange("priority")}
                        label="Mark as High Priority"
                        color={color}
                        bg="#D3D3D3"
                    />

                    <CheckBoxWithLabel
                        checked={task.completed}
                        onChange={() => handleCheckboxChange("completed")}
                        label="Mark as Completed"
                        color={color}
                        bg="#D3D3D3"
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

export default TaskInformation;
