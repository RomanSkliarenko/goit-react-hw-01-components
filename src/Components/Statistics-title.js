import React from 'react';
import ProrTypes from 'prop-types';
import styles from './Statistics-title.module.css';

const StatisticsTitle = ({ title }) => (
  <h2 className={styles.title}>{title ? title : null}</h2>
);
StatisticsTitle.ProrTypes = {
  title: ProrTypes.string,
};
export default StatisticsTitle;
