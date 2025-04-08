import React from "react";

const days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const hours = [
  "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM"
];

const tasks = [
  { day: "Monday", time: "8:00 AM", title: "Client 1 - Villa - Riyadh - Reminder Sent" },
  { day: "Monday", time: "9:00 AM", title: "Client 1 - Villa - Riyadh - Reminder Sent" },
  { day: "Monday", time: "10:00 AM", title: "Client 1 - Villa - Riyadh - Reminder Sent" },
  { day: "Tuesday", time: "8:00 AM", title: "Client 1 - Villa - Riyadh - Reminder Sent" },
  { day: "Friday", time: "1:00 PM", title: "Client 1 - Villa - Riyadh - Reminder Sent" },
];

const TrackTasck = () => {
  const getTask = (day, time) => {
    return tasks.find(task => task.day === day && task.time === time);
  };

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
        <div className="flex gap-4 text-sm">
          <span className="font-semibold">All Tasks</span>
          <span className="text-gray-400">Meetings</span>
          <span className="text-gray-400">Events</span>
          <span className="text-gray-400">Calls</span>
        </div>
        <div className="ml-auto text-sm text-gray-700">June 2024</div>
      </div>

      <div className="overflow-auto border rounded-xl">
        <table className="w-full min-w-[700px]">
          <thead>
            <tr>
              <th className="w-[100px] text-left bg-gray-100 p-2"></th>
              {days.map((day, index) => (
                <th
                  key={day}
                  className={`text-center text-sm font-medium bg-gray-100 py-2 px-1
                    ${index === 0 ? "first:rounded-tl-xl" : ""} 
                    ${index === days.length - 1 ? "last:rounded-tr-xl" : ""}`}
                >
                  {day}
                </th>
              ))}
            </tr>
            <tr>
              <td className="p-2"></td>
              {[...Array(7)].map((_, i) => (
                <td key={i} className="text-center text-xs text-gray-500 pb-2">{i + 1}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {hours.map(hour => (
              <tr key={hour} className="h-[70px] border-t">
                <td className="text-sm text-gray-600 p-2 align-top">{hour}</td>
                {days.map(day => {
                  const task = getTask(day, hour);
                  return (
                    <td key={day} className="align-top text-center relative">
                      {task && (
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-fit bg-gray-200 text-gray-700 text-xs py-1 px-2 rounded-xl whitespace-nowrap shadow-sm">
                          <span className="inline-block h-2 rounded-full mr-1"></span>
                          {task.title}
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrackTasck;
