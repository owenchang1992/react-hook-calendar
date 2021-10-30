import React from 'react'
import style from '../../styles/Calendar.css'

const weeks = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

const WeekTitles = () => (
  <div className={`${style.weeks} ${style.row}`}>
    {weeks.map((title) => <div key={title} className={`${style.item} ${style.weekItem}`}>{title}</div>)}
  </div>
)

export default WeekTitles