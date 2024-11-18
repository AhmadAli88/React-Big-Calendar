import  { useState } from 'react';
import {  dateFnsLocalizer } from 'react-big-calendar';
import { DragAndDropCalendar as DnDCalendar } from 'react-big-calendar/lib/addons/dragAndDrop'; // Corrected import
import { format, parse, startOfWeek, getDay } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import enUS from 'date-fns/locale/en-US'; // Import locale

// Define locales
const locales = {
  'en-US': enUS,
};

// Initialize the localizer
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const DragAndDropCalendar = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Meeting',
      start: new Date(),
      end: new Date(new Date().setHours(new Date().getHours() + 1)),
    },
  ]);

  const moveEvent = ({ event, start, end }) => {
    const updatedEvent = { ...event, start, end };
    const filteredEvents = events.filter((e) => e.id !== event.id);
    setEvents([...filteredEvents, updatedEvent]);
  };

  const resizeEvent = ({ event, start, end }) => {
    const nextEvents = events.map((existingEvent) =>
      existingEvent.id === event.id
        ? { ...existingEvent, start, end }
        : existingEvent
    );
    setEvents(nextEvents);
  };

  return (
    <div style={{ height: '500px' }}>
      <DnDCalendar
        localizer={localizer}
        events={events}
        onEventDrop={moveEvent}
        onEventResize={resizeEvent}
        resizable
        defaultView="month"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default DragAndDropCalendar;
