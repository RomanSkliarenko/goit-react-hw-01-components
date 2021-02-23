import React from "react";
import ProrTypes from "prop-types";

const StatisticsList = ({ stats }) => (
  <ul>
    {stats.map((file) => (
      <li key={file.id}>
        <span className="label">{file.label}</span>
        <span className="label">{file.percentage}%</span>
      </li>
    ))}
  </ul>
);

StatisticsList.propTypes = {
  stats: ProrTypes.array.isRequired,
};
export default StatisticsList;
