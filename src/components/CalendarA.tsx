"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { DateClickArg } from "@fullcalendar/interaction";

export default function Calendar() {
  const events = [
    { title: "event 1", date: "2024-09-03" },
    { title: "event 2", date: "2024-09-04" },
  ];

  const handleDateClick = (arg: DateClickArg) => {
    // check apakah date yang di klik sudah ada event atau belum
    const event = events.find((event) => event.date === arg.dateStr);
    if (event) {
      alert(`Event: ${event.title}`);
    } else {
      alert(`No event for this date: ${arg.dateStr}`);
    }
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
        events={events}
      />
    </div>
  );
}
