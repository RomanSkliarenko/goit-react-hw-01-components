import React from 'react';
import Transaction from './Transaction';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={styles.table}>
    <thead className={styles.thead}>
      <tr className={styles.tr}>
        <th className={styles.th}>Type</th>
        <th className={styles.th}>Amount</th>
        <th className={styles.th}>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <Transaction key={item.id} {...item} />
      ))}
    </tbody>
  </table>
);
TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;
