import React from 'react';
import ProrTypes from 'prop-types';
import styles from './Profile-stats.module.css';

const Stats = ({ stats }) => (
  <ul className={styles.list}>
    <li className={styles.item}>
      <span className={styles.label}>Followers</span>
      <span className={styles.quantity}>{stats.followers}</span>
    </li>
    <li className={styles.item}>
      <span className={styles.label}>Views</span>
      <span className={styles.quantity}>{stats.views}</span>
    </li>
    <li className={styles.item}>
      <span className={styles.label}>Likes</span>
      <span className={styles.quantity}>{stats.likes}</span>
    </li>
  </ul>
);
Stats.propTypes = {
  stats: ProrTypes.object.isRequired,
};
export default Stats;
