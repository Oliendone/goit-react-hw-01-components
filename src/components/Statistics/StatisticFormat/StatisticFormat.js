import React from 'react';
import style from './StatisticFormat.module.css';
import createRandomColor from './createRandomColor';

export default function StatisticFormat({ stats }) {
  return (
    <ul className={style.statList}>
      {stats.map(({ id, label, percentage }) => (
        <li
          key={id}
          className={style.item}
          style={{ backgroundColor: createRandomColor() }}
        >
          <span className={style.label}>{label}</span>
          <span className={style.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  );
}
