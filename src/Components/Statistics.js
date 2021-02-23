import React from "react";
import StatisticsList from "./Statistics-list";
import StatisticsTitle from "./Statistics-title";

const Statistics = ({ stats, title }) => (
  <section className="statistics">
    <StatisticsTitle title={title} />
    <StatisticsList stats={stats} />
  </section>
);
export default Statistics;
