import React from 'react';
import ProrTypes from 'prop-types';
import defaultImg from './profileDefaultImg.png';
import styles from './Profile-description.module.css';

const Description = ({ avatar, location, name, tag }) => (
  <div className="description">
    <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
    <p className={styles.name}>{name}</p>
    <p className={styles.tag}>@{tag}</p>
    <p className={styles.location}>{location}</p>
  </div>
);
Description.defaultProps = {
  avatar: defaultImg,
};
Description.propTypes = {
  avatar: ProrTypes.string,
  location: ProrTypes.string.isRequired,
  name: ProrTypes.string.isRequired,
  tag: ProrTypes.string.isRequired,
};
export default Description;
