import React from 'react';
import cn from 'classnames';
import css from './Statistics.module.css';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const Statistics = ({ title = '', stats }) => {
  return (
    <section className={cn(css.statistics)}>
      {title.length > 0 && <h2 className={cn(css.title)}>{title}</h2>}

      <ul className={cn(css.statList)}>
        {Array.isArray(stats) &&
          stats.map(({ id, label, percentage }) => (
            <li
              className={cn(css.statItem)}
              key={id}
              style={{ backgroundColor: getRandomColor() }}
            >
              <span className={cn(css.label)}>{label}</span>
              <span className={cn(css.percentage)}>{percentage}%</span>
            </li>
          ))}
      </ul>
    </section>
  );
};
