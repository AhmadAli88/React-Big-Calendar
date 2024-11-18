/* eslint-disable no-unused-vars */
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { useState } from 'react';
import enUS from 'date-fns/locale/en-US'; // Import locale using ES module syntax

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const AddingEvents = () => {
  const [events, setEvents] = useState([
    {
      title: 'Meeting',
      start: new Date(),
      end: new Date(),
    },
  ]);
  const handleSelect = ({ start, end }) => {
    const title = window.prompt('New Event Name');
    if (title) setEvents((prev) => [...prev, { start, end, title }]);
  };
  return (
    <div style={{ height: '500px' }}>
      <Calendar
        localizer={localizer}
        events={events}
        selectable
        onSelectSlot={handleSelect}
      />
    </div>
  );
};

export default AddingEvents;
