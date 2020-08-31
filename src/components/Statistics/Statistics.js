import React from 'react';
import PropTypes from 'prop-types';
import style from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}
      <ul className={style.statList}>
        {stats.map(format => (
          <li key={format.id} className={style.item}>
            <span className={style.label}>{format.label}</span>
            <span className={style.percentage}>{format.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
