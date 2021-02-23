import React from 'react';
import StatisticsList from './Statistics-list';
import StatisticsTitle from './Statistics-title';
import styles from './Statistics.module.css';

const Statistics = ({ stats, title }) => (
  <section className={styles.statistics}>
    <StatisticsTitle title={title} />
    <StatisticsList stats={stats} />
  </section>
);
export default Statistics;
