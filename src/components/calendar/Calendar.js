import { useState } from 'react';
import Calendar from 'react-calendar';

import './style.css';

const CalendarComponent = () => {
   const [date, setDate] = useState(new Date());

   // Обработчик изменения даты
   const onChange = (newDate) => {
      setDate(newDate);
   };

   return (
      <div className="calendar-container">
         <h2>Calendar</h2>
         <Calendar style={{ width: '100%' }} className="custom-calendar" value={date} onChange={onChange} />
      </div>
   );
};

export default CalendarComponent;
