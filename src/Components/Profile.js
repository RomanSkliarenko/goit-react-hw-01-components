import React from 'react';
import Description from './Profile-description';
import Stats from './Profile-stats';
import styles from './Profile.module.css';

const Profile = ({ avatar, location, name, stats, tag }) => (
  <div className={styles.container}>
    <Description avatar={avatar} location={location} name={name} tag={tag} />
    <Stats stats={stats} />
  </div>
);
export default Profile;
