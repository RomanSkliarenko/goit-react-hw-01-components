import React from "react";
import PropTypes from "prop-types";
import defaultImg from "./profileDefaultImg.png";

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li>
    <span className="status"></span>
    <img className="avatar" src={avatar} alt="" width="48" />
    <p className="name">{name}</p>
  </li>
);
FriendListItem.defaultProps = {
  avatar: defaultImg,
};
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default FriendListItem;
