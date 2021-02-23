import React from 'react';
import PropTypes from 'prop-types';
import styles from './Transaction.module.css';

const Transaction = ({ type, amount, currency }) => (
  <tr>
    <td className={styles.td}>{type}</td>
    <td className={styles.td}>{amount}</td>
    <td className={styles.td}>{currency}</td>
  </tr>
);
Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
export default Transaction;
