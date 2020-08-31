import React from 'react';
import PropTypes from 'prop-types';
import style from './StatisticsSection.module.css';
import StatisticFormat from '../StatisticFormat/StatisticFormat';

export default function Statistics({ title, stats }) {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}
      <StatisticFormat stats={stats} />
    </section>
  );
}

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,

  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
