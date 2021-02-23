import React from 'react';
import Profile from './Components/Profile';
import Statistics from './Components/Statistics';
import users from './user.json';
import statisticalData from './statistical-data.json';
import FriendList from './Components/FriendList';
import Friends from './friends.json';
import TransactionHistory from './Components/TransactionHistory';
import transaction from './transactions.json';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Profile
        avatar={users.avatar}
        location={users.location}
        name={users.name}
        stats={users.stats}
        tag={users.tag}
      />
      <Statistics stats={statisticalData} title="Upload stats" />
      <FriendList friends={Friends} />
      <TransactionHistory items={transaction} />
    </div>
  );
}

export default App;
