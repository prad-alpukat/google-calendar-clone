"use client";
import { Calendar, momentLocalizer, View, Event } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState, useCallback } from "react";

// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
const localizer = momentLocalizer(moment); // or globalizeLocalizer
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";

export default function MyCalendar() {
  const [view, setView] = useState<View>("week");
  const [events, setEvents] = useState<Event[]>([
    {
      title: "event 1",
      start: new Date("2024-09-02T10:30:00"),
      end: new Date("2024-09-02T16:30:00"),
      allDay: false,
    },
  ]);

  const DnDCalendar = withDragAndDrop(Calendar);

  const handleSelectSlot = useCallback(
    ({ start, end }: { start: Date; end: Date }) => {
      const title = window.prompt("New Event name");

      if (!title) {
        return;
      }

      setEvents([
        ...events,
        {
          title,
          start: new Date(start),
          end: new Date(end),
        },
      ]);
    },
    [events]
  );

  return (
    <div className="h-dvh container">
      <DnDCalendar
        localizer={localizer}
        views={["week", "day"]}
        view={view}
        onView={(test) => setView(test)}
        draggableAccessor={(event) => true}
        selectable
        onSelectSlot={handleSelectSlot}
        events={events}
      />
    </div>
  );
}
