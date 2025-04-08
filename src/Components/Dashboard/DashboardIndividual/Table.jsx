import React, { useState } from 'react'
import frame from '../../../assets/Iconindividual/frame.svg'
import add from '../../../assets/Iconindividual/note-add.svg'
import { FaCheck } from 'react-icons/fa';

const Table = () => {
    const [checkedAll, setCheckedAll] = useState(false);
    const [selectedTasks, setSelectedTasks] = useState([]);

    const tasks = [
        { id: 1, status: "In Progress" },
        { id: 2, status: "Under Review" },
        { id: 3, status: "Under Review" },
        { id: 4, status: "In Progress" },
        { id: 5, status: "Under Review" },
        { id: 6, status: "Completed" },
        { id: 7, status: "Completed" },
        { id: 8, status: "Completed" },
    ];

    const handleSelectAll = () => {
        if (checkedAll) {
            setSelectedTasks([]);
        } else {
            setSelectedTasks(tasks.map(task => task.id));
        }
        setCheckedAll(!checkedAll);
    };

    const handleSelectTask = (taskId) => {
        if (selectedTasks.includes(taskId)) {
            setSelectedTasks(selectedTasks.filter(id => id !== taskId));
            setCheckedAll(false);
        } else {
            setSelectedTasks([...selectedTasks, taskId]);
            if (selectedTasks.length + 1 === tasks.length) {
                setCheckedAll(true);
            }
        }
    };

    const getStatusBadge = (status) => {
        const base = "inline-block   w-[110px] h-[30px] text-[14px] rounded-[6px]  flex justify-center items-center";
        switch (status) {
            case "In Progress":
                return `${base} bg-orange-100 text-orange-500`;
            case "Under Review":
                return `${base} bg-gray-100 text-gray-500`;
            case "Completed":
                return `${base} bg-green-100 text-green-500`;
            default:
                return base;
        }
    };

    const totalTasks = tasks.length;
    const openTasks = tasks.filter((task) => task.status !== "Completed").length;
    const completed = tasks.filter((task) => task.status === "Completed").length;
    const overdue = 5;

    return (
        <div>
            {/*Header Bar*/}
            <section className='flex items-center justify-between '>
                <div className='flex items-center gap-2'>
                    <img className='pb-1 border-b-2 border-black' src={frame} alt='' />
                    <h1 className='text-[20px] font-bold '>Task Name</h1>
                </div>
                <div className='flex items-center justify-center gap-2 h-[52px] w-[152px] bg-black rounded-[8px] opacity-50'>
                    <img src={add} alt='' />
                    <h1 className='text-white font-bold text-[20px]'>Add Task</h1>
                </div>
            </section>

            {/* Table */}

            <div className=" overflow-x-auto mt-[40px] ">
                <table className="min-w-full bg-white    ">
                    <thead className="   px-10 rounded-[8px] ">
                        <tr className="text-left text-[16px] font-bold bg-[#F2F2F2] ">
                            <th className="pl-10 py-6">
                                <div
                                    className={`relative w-[20px] h-[20px] rounded-[2px] cursor-pointer
                                                ${checkedAll ? 'bg-[#EA9B23]' : 'bg-[#EFEFEF] border border-[#858585]'}`}
                                   
                                    onClick={handleSelectAll}
                                >
                                    <input
                                        type="checkbox"
                                        className="absolute opacity-0 w-full h-full cursor-pointer"
                                        checked={checkedAll}
                                        onChange={handleSelectAll}
                                    />
                                    {checkedAll && (
                                        <FaCheck className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs" />
                                    )}
                                </div>
                            </th>

                            <th className="px-3 py-6 text-center">Task Name</th>
                            <th className="px-3 py-6 text-center">Due Date</th>
                            <th className="px-3 py-6 text-center">Status</th>
                            <th className="px-3 py-6 text-center">Priority</th>
                            <th className="px-3 py-6 text-center">Related To</th>
                            <th className="px-3 py-6 text-center">Task Owner</th>
                            <th className="px-3 py-6 text-[#898989]">+ Create Field</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task, idx) => (
                            <tr
                                key={idx}
                                className={`border-b border-[#C9C9C9]}`}
                            >
                                <td className="pl-10 py-6">
                                    <div
                                        className={`relative w-[20px] h-[20px] rounded-[2px]  cursor-pointer ${selectedTasks.includes(task.id) ?
                                            'bg-[#EA9B23]' : 'bg-[#EFEFEF] border border-[#858585]'} `}

                                        onClick={() => handleSelectTask(task.id)}
                                    >
                                        <input
                                            type="checkbox"
                                            className="absolute opacity-0 w-full h-full cursor-pointer"
                                            checked={selectedTasks.includes(task.id)}
                                            onChange={() => handleSelectTask(task.id)}
                                        />
                                        {selectedTasks.includes(task.id) && (
                                            <FaCheck className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs" />
                                        )}
                                    </div>
                                </td>

                                <td className="px-3 py-6 text-center font-bold">Task Name</td>
                                <td className="px-3 py-6 text-center">20/12/2024</td>
                                <td className="px-3 p-6 text-center">
                                    <span className={getStatusBadge(task.status)}>{task.status}</span>
                                </td>
                                <td className="px-3 py-6 text-center">High</td>
                                <td className="px-3 py-6 text-center">Riyadh</td>
                                <td className="px-3 py-6 text-center">Ali Mohamed</td>
                                <td className="px-3 py-6 text-center"></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="text-sm text-gray-600 mt-4 pl-10">
                    <span className="mr-6">Total Tasks: <strong>{totalTasks}</strong></span>
                    <span className="mr-6">Open Tasks: <strong>{openTasks}</strong></span>
                    <span className="mr-6">Completed: <strong>{completed}</strong></span>
                    <span className="mr-6">Overdue: <strong>{overdue}</strong></span>
                </div>
            </div>

        </div>
    )
}

export default Table