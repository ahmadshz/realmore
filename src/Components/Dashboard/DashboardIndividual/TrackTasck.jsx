import React, { useState } from "react";
import TaskNavigation from "./TaskNavigation";
import CalendarComponent from "../DashboardAdmin/CalendarComponent ";

const TrackTasck = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-1">Tasks</h1>
      <p className="text-sm text-gray-500 mb-4">Track your tasks</p>

      <div className="flex gap-2 mb-4">
        <button className="border px-3 py-1 rounded bg-black text-white text-sm">Task Tracker</button>
        <button className="border px-3 py-1 rounded text-sm">Task List</button>
        <button className="border px-3 py-1 rounded text-sm">Calendar</button>
      </div>

      <div className="flex gap-6 items-center mb-2">
        <TaskNavigation activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        <div className="ml-auto text-sm text-gray-700">June 2024</div>
      </div>

      <CalendarComponent />

    </div>
  );
};

export default TrackTasck;
