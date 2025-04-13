import React from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';


const CalendarComponent = () => {
    return (
        <div className="p-4 h-fit mx-auto">
            <FullCalendar
                plugins={[timeGridPlugin, interactionPlugin]}
                initialView="timeGridWeek"
                allDaySlot={false}
                slotMinTime="08:00:00"
                slotMaxTime="15:00:00"
                headerToolbar={false}
                dayHeaderFormat={{ weekday: 'long' }}
                slotLabelFormat={{ hour: 'numeric', minute: '2-digit', hour12: true }}
                events={[
                    { title: 'Client 1 - Villa - Riyadh - Reminder Sent', start: '2025-04-07T08:00:00' },
                    { title: 'Client 1 - Villa - Riyadh - Reminder Sent', start: '2025-04-11T08:30:00' },
                    { title: 'Client 1 - Villa - Riyadh - Reminder Sent', start: '2025-04-08T10:00:00' },
                    { title: 'Client 1 - Villa - Riyadh - Reminder Sent', start: '2025-04-10T13:30:00' },
                ]}
                eventContent={renderEventContent}
                height={650}  // Set calendar height to 600px
            />

        </div>
    );
};

function renderEventContent(eventInfo) {
    return (
       <div className="flex items-center gap-2 px-4 bg-[#D9D9D9] rounded-full text-xs text-black shadow-sm relative w-full">
            <span className="absolute -left-1 w-[8px] h-[8px] bg-[#636363] rounded-full"></span>
            <span className="flex-1 ">{eventInfo.event.title}</span> {/* Added break-words for text wrapping */}
        </div>
    );
}


export default CalendarComponent;
