import React from "react";
import ProrTypes from "prop-types";

const Stats = ({ stats }) => (
  <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{stats.views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{stats.likes}</span>
    </li>
  </ul>
);
Stats.propTypes = {
  stats: ProrTypes.object.isRequired,
};
export default Stats;
