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

const CustomToolbar = () => {
  const [events, setEvents] = useState([
    {
      title: 'Meeting',
      start: new Date(),
      end: new Date(),
    },
  ]);
  const CustomToolbar = (toolbar) => (
    <div>
      <button onClick={() => toolbar.onNavigate('PREV')}>Prev</button>
      <span>{toolbar.label}</span>
      <button onClick={() => toolbar.onNavigate('NEXT')}>Next</button>
    </div>
  );
  return (
    <div style={{ height: '500px' }}>
      <Calendar
        localizer={localizer}
        events={events}
        components={{ toolbar: CustomToolbar }}
      />
    </div>
  );
};

export default CustomToolbar;
