import { DateTime } from './luxon.js';

const renderDate = () => {
  const now = DateTime.now().c;
  const datesTimes = document.getElementById('date-time');

  const dateObj = {
    month: now.month,
    day: now.day,
    year: now.year,
    hour: now.hour,
    minute: now.minute,
    second: now.second,
  };

  const months = [
    'January', 'February', 'March', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',
  ];
  let universal;

  if (dateObj.hour < 12) {
    universal = 'AM';
  } else {
    universal = 'PM';
  }

  const dateTime = `
    <div class="dateTime">
            <div class="date">
                <span class="month">${months[dateObj.month - 1]}</span>,
                <span class="day">${dateObj.day}</span>,
                <span class="year">${dateObj.year}</span>
            </div>
            <div class="time">
                <span class="hour">${dateObj.hour}</span> :
                <span class="minute">${dateObj.minute}</span> :
                <span class="second">${dateObj.second}</span>
            </div>
            <span class="AmPm">${universal}</span>
    </div>
    `;

  datesTimes.innerHTML = dateTime;
  requestAnimationFrame(renderDate);
};

export default renderDate;