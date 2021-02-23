import React from "react";
import ProrTypes from "prop-types";

const StatisticsTitle = ({ title }) => (
  <h2 className="title">{title ? title : null}</h2>
);
StatisticsTitle.ProrTypes = {
  title: ProrTypes.string,
};
export default StatisticsTitle;
