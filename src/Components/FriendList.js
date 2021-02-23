import React from "react";
import FriendListItem from "./FriendListItem";
import PropTypes from "prop-types";

const FriendList = ({ friends }) => (
  <ul>
    {friends.map((friend) => {
      return (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      );
    })}
  </ul>
);
FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
