import React from "react";
import Description from "./Profile-description";
import Stats from "./Profile-stats";

const Profile = ({ avatar, location, name, stats, tag }) => (
  <div className="profile">
    <Description avatar={avatar} location={location} name={name} tag={tag} />
    <Stats stats={stats} />
  </div>
);
export default Profile;
