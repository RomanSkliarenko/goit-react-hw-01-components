import React from 'react';
import ProrTypes from 'prop-types';
import styles from './Statistics-list.module.css';

const StatisticsList = ({ stats }) => (
  <ul className={styles.list}>
    {stats.map(file => (
      <li key={file.id} className={styles.item}>
        <span className={styles.label}>{file.label}</span>
        <span className={styles.label}>{file.percentage}%</span>
      </li>
    ))}
  </ul>
);

StatisticsList.propTypes = {
  stats: ProrTypes.array.isRequired,
};
export default StatisticsList;
