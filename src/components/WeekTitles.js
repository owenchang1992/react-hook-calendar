import React from 'react';
import '../styles/Calendar.css'

const weeks = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const WeekTitles = () => (
  <div className="weeks">
    {weeks.map((title) => <div key={title} className="item">{title}</div>)}
  </div>
)

export default WeekTitles;